import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // 1. Password hashing
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // 해싱 강도 (높을 수록 안전하나 느려짐)
    return bcrypt.hash(password, saltRounds);
  }

  // 2. 비밀번호 검증
  private async validatePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  // 3. 회원가입
  async register(registerDto: RegisterDto) {
    const { email, password, name, age } = registerDto;

    // 1. 이메일 중복 확인
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // 2. 비밀번호 해싱
    const hashPassword = await this.hashPassword(password);

    // 3. 사용자 생성
    const user = this.userRepository.create({
      email,
      password: hashPassword,
      name,
      age,
    });

    return await this.userRepository.save(user);
  }

  // 4. 로그인
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // 1. 이메일로 사용자 찾기
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    // 2. 비밀번호 검증
    const isPasswordValid = await this.validatePassword(
      password,
      user.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    // 3. JWT 토큰 생성 및 반환
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }
}
