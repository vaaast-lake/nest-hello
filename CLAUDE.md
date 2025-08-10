# NestJS 학습 프로젝트 컨텍스트

## 프로젝트 개요
- **목표**: NestJS 프레임워크 체계적 학습
- **학습자 배경**: 프론트엔드(React, TS, JS), 인프라(Docker, Jenkins), 서버 관리 경험
- **학습 방식**: 기초부터 차근차근, 실습 중심

## 🎯 학습 최적화 설정
- **기본 페르소나**: `--persona-mentor` (학습자 중심 가이드 제공)
- **학습 플래그**: `--explain` (개념 상세 설명), `--c7` (NestJS 공식 문서 참조)
- **코딩 방식**: 사용자가 직접 구현, AI는 가이드와 설명만 제공
- **피드백 방식**: 구현 후 리뷰 및 개선점 제시, 원리와 개념 심화 설명

## 기술 스택 경험
### 보유 기술
- **Frontend**: React, TypeScript, JavaScript
- **Infrastructure**: Docker (Compose), Jenkins
- **Server**: Ubuntu Server, Shell Script
- **기타**: 마인크래프트 서버 구축 경험

### 학습 목표 기술
- **Backend Framework**: NestJS
- **관련 기술**: Node.js, Express 기반 지식, 데코레이터 패턴
- **데이터베이스**: TypeORM, Prisma 등
- **인증/권한**: JWT, Guards, Interceptors
- **테스트**: Jest, E2E 테스팅

## 🎓 학습 방식 정의
- **실습 주도**: 사용자가 코드 직접 작성, AI는 방향성 제시
- **가이드 제공**: 구현 방향과 핵심 개념 설명, 단계별 힌트
- **단계별 피드백**: 구현 후 리뷰 및 개선점 제시
- **개념 심화**: 왜 그렇게 구현하는지 원리와 베스트 프랙티스 설명
- **문제 해결**: 막힐 때 힌트 제공, 직접 해결책보다는 사고 방향 가이드

## 학습 단계
1. **기초 설정**: Node.js, NestJS CLI 설치 및 프로젝트 생성
2. **핵심 개념**: Controllers, Services, Modules 이해
3. **실습 프로젝트**: 단계별 기능 구현
4. **고급 기능**: Guards, Interceptors, Pipes, Exception Filters
5. **데이터베이스 연동**: TypeORM/Prisma 활용
6. **인증 시스템**: JWT 기반 인증 구현
7. **테스트 작성**: 단위 테스트 및 E2E 테스트
8. **배포**: Docker 컨테이너화 및 배포 전략

## 프로젝트 구조
```
learning_nestjs/
├── CLAUDE.md              # 컨텍스트 파일
├── roadmap.md             # 상세 학습 로드맵
├── docs/                  # 학습 문서
├── practice/              # 실습 코드
├── projects/              # 단계별 프로젝트
└── notes/                 # 학습 노트
```

## 현재 진행 상황

### ✅ 완료된 단계
- [x] **섹션 1-8**: 기초 설정 및 NestJS 핵심 개념 완료
  - NestJS 프로젝트 생성 및 실행
  - Controllers, Services, Modules 이해
  - Dependency Injection 패턴 학습
  - Decorators 패턴 학습
  - Users CRUD API 구현 및 테스트 완료

- [x] **섹션 9-10**: PostgreSQL 데이터베이스 연동 완료
  - TypeORM 패키지 설치 및 설정
  - PostgreSQL Docker 컨테이너 연동
  - User Entity 생성 (password 필드 포함)
  - Repository 패턴으로 Users 서비스 리팩토링
  - 실제 DB 연동 CRUD 동작 확인

- [x] **섹션 14**: JWT 인증 시스템 구현 완료
  - JWT 토큰 구조와 인증 플로우 학습 완료
  - bcrypt를 활용한 비밀번호 해싱 이해
  - 인증 관련 패키지 설치 (`@nestjs/jwt`, `bcrypt`, `passport` 등)
  - Auth 모듈, 서비스, 컨트롤러 생성
  - AuthService에 register, login 메서드 구현 완료 (DTO 패턴 적용)
  - RegisterDto, LoginDto 생성 완료
  - Auth Controller 엔드포인트 구현 완료 (POST /auth/register, POST /auth/login)
  - 타입 안전성 및 보안 고려 (비밀번호 필드 제외, 직접 객체 생성)

### 🔄 **현재 작업중: API 테스트 및 DB 스키마 이슈 해결**

#### 현재 상태
- 프로젝트 경로: `/home/vaaast_lake/work_space/learning_nestjs/projects/hello-nestjs`
- JWT 인증 시스템 코드 구현 완료
- **DB 스키마 이슈**: password 컬럼 추가 필요

#### 완성된 파일들
**Users 모듈:**
- `src/users/entities/user.entitiy.ts` (password 필드 포함)
- `src/users/dto/create-user.dto.ts` (유효성 검사 포함)
- `src/users/dto/update-user.dto.ts` (유효성 검사 포함)
- `src/users/users.service.ts` (TypeORM Repository 사용)
- `src/users/users.controller.ts`
- `src/users/users.module.ts`

**Auth 모듈:**
- `src/auth/auth.module.ts` (JwtModule 설정 포함)
- `src/auth/auth.service.ts` (register, login, 해싱 메서드 구현, DTO 패턴 적용)
- `src/auth/auth.controller.ts` (POST /auth/register, POST /auth/login 구현)
- `src/auth/dto/register.dto.ts` (유효성 검사 포함, age 옵션 필드)
- `src/auth/dto/login.dto.ts` (유효성 검사 포함)

**공통 설정:**
- `src/common/filters/http-exception.filter.ts`
- `src/main.ts` (ValidationPipe, ExceptionFilter 설정)
- `src/app.module.ts` (TypeORM, AuthModule 설정)

### 🚀 **다음 세션에서 실행할 작업**

#### 1. DB 스키마 이슈 해결
- **현재 문제**: User 테이블에 password 컬럼 없음
- **해결방안**: 
  - 방법 A: 수동 SQL로 컬럼 추가 (`ALTER TABLE "user" ADD COLUMN "password" VARCHAR(255)`)
  - 방법 B: synchronize: true로 설정 후 기존 데이터 정리
  - Migration은 별도 세션에서 학습 예정

#### 2. API 엔드포인트 테스트
- **서버 실행** 및 DB 연결 확인
- Postman으로 회원가입/로그인 테스트
- JWT 토큰 발급 확인
- 에러 핸들링 검증 (중복 이메일, 잘못된 로그인 등)

#### 3. 다음 학습 단계 선택
**옵션 A**: 섹션 15-19 (Guards, Pipes, Custom Decorators)
- JWT 토큰 검증 Guard 구현
- 보호된 엔드포인트 생성

**옵션 B**: 섹션 11-12 (TypeORM 고급 기능)
- Entity 관계 설정 (User-Post 관계)
- 복잡한 데이터베이스 쿼리

#### 이번 세션 학습 포인트 정리
**완성한 구현:**
- ✅ Auth Controller 엔드포인트 구현 (register, login)
- ✅ DTO 패턴을 Service까지 일관성 있게 적용
- ✅ 보안 고려한 응답 처리 (비밀번호 필드 제외, 직접 객체 생성)
- ✅ TypeScript 타입 안전성 (Pick vs 직접 객체 생성 차이 이해)

**배운 핵심 개념:**
- **DTO 패턴의 일관성**: Controller → Service 까지 동일한 패턴 적용의 중요성
- **보안 우선 원칙**: Pick 타입 (컴파일타임) vs 직접 객체 생성 (런타임) 차이
- **PostgreSQL 따옴표 규칙**: `"` (식별자) vs `'` (값) 차이점
- **TypeORM Migration 기초**: 설정 복잡성과 대안 접근법 이해

**시도한 고급 기술:**
- Migration 설정 시도 (별도 세션에서 재도전 예정)
- 데이터베이스 스키마 변경 전략 탐색

## 참고 자료
- NestJS 공식 문서: https://docs.nestjs.com/
- TypeORM 문서: https://typeorm.io/
- PostgreSQL 문서: https://www.postgresql.org/docs/

---
*마지막 업데이트: 2025-08-09 (섹션 14 JWT Authentication 구현 완료, API 테스트 및 DB 스키마 이슈 해결 예정)*