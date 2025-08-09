import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ArgumentsHostDebugFilter implements ExceptionFilter {
  private readonly logger = new Logger(ArgumentsHostDebugFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.debug('=== ArgumentsHost 내부 데이터 분석 ===');

    // 1. 기본 정보
    this.logger.debug(`Context Type: ${host.getType()}`);

    // 2. Arguments 배열 전체 조사
    const args = host.getArgs();
    this.logger.debug(`Total Arguments: ${args.length}`);
    args.forEach((arg, index) => {
      this.logger.debug(`Arg[${index}] Type: ${typeof arg}`);
      this.logger.debug(`Arg[${index}] Constructor: ${arg?.constructor?.name}`);
      if (typeof arg === 'object' && arg !== null) {
        this.logger.debug(
          `Arg[${index}] Keys: ${Object.keys(arg).slice(0, 10).join(', ')}`,
        );
      }
    });

    // 3. 개별 인덱스로 접근
    const requestArg = host.getArgByIndex(0);
    const responseArg = host.getArgByIndex(1);
    const nextArg = host.getArgByIndex(2);

    this.logger.debug('=== 개별 Arguments 분석 ===');
    this.logger.debug(`Request Type: ${requestArg?.constructor?.name}`);
    this.logger.debug(`Response Type: ${responseArg?.constructor?.name}`);
    this.logger.debug(`Next Type: ${nextArg?.constructor?.name}`);

    // 4. HTTP Context로 전환하여 데이터 조사
    if (host.getType() === 'http') {
      const httpContext = host.switchToHttp();
      const req = httpContext.getRequest<Request>();
      const res = httpContext.getResponse<Response>();
      const nextFn = httpContext.getNext();

      this.logger.debug('=== HTTP Context 분석 ===');
      this.logger.debug(`HTTP Method: ${req.method}`);
      this.logger.debug(`HTTP URL: ${req.url}`);
      this.logger.debug(
        `HTTP Headers: ${JSON.stringify(req.headers, null, 2)}`,
      );
      this.logger.debug(`HTTP Query: ${JSON.stringify(req.query)}`);
      this.logger.debug(`HTTP Params: ${JSON.stringify(req.params)}`);
      this.logger.debug(`HTTP Body: ${JSON.stringify(req.body)}`);

      // Request 객체의 모든 속성 조사
      this.logger.debug('=== Request 객체 속성들 ===');
      const reqKeys = Object.getOwnPropertyNames(req).filter(
        (key) => !key.startsWith('_') && typeof req[key] !== 'function',
      );
      reqKeys.forEach((key) => {
        try {
          const value = req[key];
          this.logger.debug(
            `req.${key}: ${typeof value} - ${JSON.stringify(value).slice(0, 100)}`,
          );
        } catch (e) {
          this.logger.debug(`req.${key}: [Cannot stringify]`);
        }
      });

      // Response 객체의 모든 속성 조사
      this.logger.debug('=== Response 객체 속성들 ===');
      const resKeys = Object.getOwnPropertyNames(res).filter(
        (key) => !key.startsWith('_') && typeof res[key] !== 'function',
      );
      resKeys.forEach((key) => {
        try {
          const value = res[key];
          this.logger.debug(
            `res.${key}: ${typeof value} - ${JSON.stringify(value).slice(0, 100)}`,
          );
        } catch (e) {
          this.logger.debug(`res.${key}: [Cannot stringify]`);
        }
      });
    }

    // 5. 예외 정보
    this.logger.debug('=== Exception 정보 ===');
    this.logger.debug(`Exception Type: ${exception?.constructor?.name}`);
    this.logger.debug(`Exception Message: ${exception?.message}`);
    if (exception instanceof HttpException) {
      this.logger.debug(`HTTP Status: ${exception.getStatus()}`);
      this.logger.debug(
        `HTTP Response: ${JSON.stringify(exception.getResponse())}`,
      );
    }

    // 6. 실제 응답 처리
    const ctx = host.switchToHttp();
    const finalResponse = ctx.getResponse<Response>();
    const finalRequest = ctx.getRequest<Request>();

    let status = 500;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: finalRequest.url,
      method: finalRequest.method,
      message: message,
      debug: {
        contextType: host.getType(),
        argsLength: host.getArgs().length,
        requestType: finalRequest?.constructor?.name,
        responseType: finalResponse?.constructor?.name,
      },
    };

    finalResponse.status(status).json(errorResponse);
  }
}
