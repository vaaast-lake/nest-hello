# Phase 1: 기초 설정 및 개념 학습

## 목표
- NestJS 개발 환경 구축
- 핵심 개념 이해 (Controllers, Services, Modules)
- 첫 번째 실습 프로젝트 완성

## 1. 개발 환경 설정

### 필수 도구 설치
```bash
# Node.js 버전 확인 (18.x 이상 권장)
node --version

# NestJS CLI 설치
npm install -g @nestjs/cli

# 버전 확인
nest --version
```

### VS Code 확장 프로그램
- **NestJS Files**: NestJS 파일 템플릿 생성
- **Auto Import - ES6**: 자동 import 구문 생성
- **TypeScript Importer**: TypeScript import 도움
- **REST Client**: API 테스트용

### 첫 번째 프로젝트 생성
```bash
# 프로젝트 생성
nest new hello-nestjs

# 프로젝트 구조 확인
cd hello-nestjs
tree -I node_modules
```

## 2. NestJS 핵심 개념

### 2.1 Controllers (컨트롤러)
HTTP 요청을 처리하는 역할

```typescript
// users.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns user #${id}`;
  }

  @Post()
  create(@Body() createUserDto: any): string {
    return 'This action adds a new user';
  }
}
```

### 2.2 Services (서비스)
비즈니스 로직을 담당

```typescript
// users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(user: any) {
    this.users.push(user);
    return user;
  }
}
```

### 2.3 Modules (모듈)
관련된 기능들을 묶어서 관리

```typescript
// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

### 2.4 Dependency Injection (의존성 주입)
```typescript
// Controller에서 Service 주입받기
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
```

## 3. 실습: Hello NestJS 프로젝트

### 3.1 프로젝트 구조
```
hello-nestjs/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   └── users/
│       ├── users.controller.ts
│       ├── users.service.ts
│       └── users.module.ts
├── package.json
└── README.md
```

### 3.2 단계별 구현

#### Step 1: Users 모듈 생성
```bash
# NestJS CLI로 모듈 생성
nest generate module users
nest generate controller users
nest generate service users
```

#### Step 2: User DTO 정의
```typescript
// dto/create-user.dto.ts
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly age: number;
}

// dto/update-user.dto.ts
export class UpdateUserDto {
  readonly name?: string;
  readonly email?: string;
  readonly age?: number;
}
```

#### Step 3: Service 구현
```typescript
// users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      return this.users.splice(userIndex, 1)[0];
    }
    return null;
  }
}
```

#### Step 4: Controller 완성
```typescript
// users.controller.ts
import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  ParseIntPipe 
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
```

## 4. 테스트 방법

### 4.1 서버 실행
```bash
npm run start:dev
```

### 4.2 API 테스트
```bash
# 모든 사용자 조회
curl http://localhost:3000/users

# 특정 사용자 조회
curl http://localhost:3000/users/1

# 사용자 생성
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Bob","email":"bob@example.com","age":28}'

# 사용자 수정
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated"}'

# 사용자 삭제
curl -X DELETE http://localhost:3000/users/1
```

## 5. 다음 단계 준비

### 5.1 학습 체크리스트
- [ ] NestJS CLI 명령어 숙지
- [ ] Controller, Service, Module 관계 이해
- [ ] Dependency Injection 개념 이해
- [ ] HTTP 데코레이터 사용법 숙지
- [ ] DTO 패턴 이해

### 5.2 추가 학습 권장 사항
- TypeScript 데코레이터 심화 학습
- HTTP 상태 코드와 REST API 설계 원칙
- Node.js 비동기 처리 (Promise, async/await)

---

**다음**: [Phase 2 - 중급 기능 및 데이터 처리](./phase2-intermediate.md)