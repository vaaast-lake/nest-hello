import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseFilters,
  HttpException,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ArgumentsHostDebugFilter } from '../common/filters/arguments-host-debug.filter';

@Controller('debug')
@UseFilters(ArgumentsHostDebugFilter)
export class DebugController {
  @Get('arguments-host')
  testArgumentsHost(@Query('data') data: string) {
    // 의도적으로 예외를 발생시켜 ArgumentsHost 데이터를 확인
    throw new BadRequestException(
      `ArgumentsHost 테스트: 쿼리 데이터 = ${data}`,
    );
  }

  @Post('arguments-host/:id')
  testArgumentsHostWithBody(
    @Param('id') id: string,
    @Body() body: any,
    @Query('filter') filter?: string,
  ) {
    // POST 요청에서 ArgumentsHost 데이터 확인
    throw new HttpException(
      {
        message: 'ArgumentsHost POST 테스트',
        receivedData: {
          paramId: id,
          bodyData: body,
          queryFilter: filter,
        },
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }

  @Get('exception-types/:type')
  testDifferentExceptions(@Param('type') type: string) {
    switch (type) {
      case 'bad-request':
        throw new BadRequestException('테스트 BadRequestException');
      case 'not-found':
        throw new NotFoundException('테스트 NotFoundException');
      case 'custom':
        throw new HttpException('커스텀 HTTP 예외', 422);
      case 'generic':
        throw new Error('일반 에러 객체');
      default:
        throw new BadRequestException('알 수 없는 예외 타입');
    }
  }

  @Get('normal-response')
  normalResponse() {
    return {
      message: '정상 응답 - ArgumentsHost는 예외 발생시에만 사용됩니다',
      timestamp: new Date().toISOString(),
    };
  }
}
