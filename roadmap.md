# NestJS 학습 로드맵

## 📚 학습 목표
기존 프론트엔드 및 인프라 경험을 바탕으로 NestJS를 체계적으로 학습하여 풀스택 개발자로 성장

## 🎯 단계별 학습 계획 (강의 기반)

### 섹션 1-3: 기초 설정 및 이론 (1주)
#### 완료 상태: ✅

**섹션 1. 강의 소개 및 이론** (52분)
- [x] Backend Engineer 소개
- [x] nodeJS 기본/기술적 소개  
- [x] HTTP 개념
- [x] NestJS 소개

**섹션 2. 세팅하기** (9분)
- [x] 환경설정 (macOS/Windows)
- [x] YARN/PNPM 설정

**섹션 3. nodeJS와 Express 기초** (37분)
- [x] 기본 nodeJS 서버 만들기
- [x] Express REST API 구현
- [x] NestJS Hello World

### 섹션 4-8: Controller, Service, Module 기초 (1주)
#### 완료 상태: ✅

**섹션 4. 프로젝트 컨셉** (3분)
- [x] 프로젝트 구조 이해

**섹션 5. Controller (컨트롤러)** (26분)
- [x] Request Life Cycle
- [x] Posts 모듈 생성
- [x] JSON 응답 처리
- [x] Postman 테스트

**섹션 6. Query and Parameters** (45분)
- [x] REST API 세트 구현
- [x] GET/POST/PATCH/DELETE 엔드포인트
- [x] Exception 처리

**섹션 7. Service** (15분)
- [x] Service 패턴 이해
- [x] 비즈니스 로직 분리

**섹션 8. Module, Provider and IoC** (19분)
- [x] Dependency Injection 이해
- [x] IoC (제어의 역전) 개념
- [x] AppModule 구조

### 섹션 9-13: 데이터베이스 및 TypeORM (1-2주)
#### 완료 상태: ✅ (기본 연동 완료)

**섹션 9. SQL & Docker** (55분)
- [x] SQL 기본기
- [x] Docker 이론 및 설치
- [x] Docker Compose 설정
- [x] PostgreSQL 연동

**섹션 10. TypeORM 사용해보기** (47분)
- [x] NestJS TypeORM 설정
- [x] Entity 테이블 생성
- [x] Repository 주입
- [x] CRUD 함수들 (Find, FindOne, Create, Save, Delete)

**섹션 11. TypeORM 이론** (2시간 11분)
- [ ] Column Annotations 탐구
- [ ] Enum Column
- [ ] Entity Embedding
- [ ] Table Inheritance
- [ ] Relationships (One-to-One, Many-to-One, Many-to-Many)
- [ ] FindManyOptions
- [ ] TypeORM 유틸리티

**섹션 12. Relations (관계)** (57분)
- [ ] UserModel 생성
- [ ] Author Relation 구현
- [ ] Relation 포함 쿼리

**섹션 13. 디버거 사용하기** (11분)
- [ ] NestJS 디버거 설정 및 사용

### 섹션 14: Authentication (인증) (2-3주)
#### 완료 상태: 🔄 90% 진행중

**섹션 14. Authentication** (2시간 16분)
- [x] Session vs JWT Token 이론
- [x] Access Token and Refresh Token 개념
- [x] 암호화 (bcrypt) 이론 및 구현
- [x] JWT 토큰 signing 구현
- [x] 회원가입/로그인 로직 구현 (AuthService)
- [x] RegisterDto, LoginDto 생성
- [ ] Auth Controller 엔드포인트 구현 **← 다음 작업**
- [ ] Token Refresh 시스템
- [ ] 인증 헤더 처리

### 섹션 15-17: 고급 기능 - Pipes, BaseModel (1주)
#### 진행 예정

**섹션 15. Pipe (파이프)** (27분)
- [ ] ParseIntPipe 사용
- [ ] Custom Pipe 생성
- [ ] DefaultValuePipe
- [ ] 다중 파이프 사용

**섹션 16. BaseModel 구현** (9분)
- [ ] UpdatedAt/CreatedAt 자동 생성
- [ ] 상속 기반 BaseModel 적용

**섹션 17. PgAdmin** (7분)
- [ ] PgAdmin 설치 및 사용법

### 섹션 18-20: Guards, Decorators, Postman (1주)
#### 진행 예정

**섹션 18. Guard (가드)** (29분)
- [ ] Guard 이론 및 구현
- [ ] BasicTokenGuard
- [ ] BearerTokenGuard

**섹션 19. Custom Decorator** (18분)
- [ ] AccessTokenGuard 적용
- [ ] User 커스텀 데코레이터
- [ ] 데코레이터 data 파라미터

**섹션 20. Postman 기능 심화** (15분)
- [ ] 환경변수 사용
- [ ] Test 자동화
- [ ] Authorization 설정

### 섹션 21-22: Validation & Transformation (1주)
#### 진행 예정

**섹션 21. Class Validator** (44분)
- [ ] DTO와 Class Validator
- [ ] 다양한 Validation Annotations
- [ ] PickType 활용
- [ ] 에러 메시지 커스터마이징

**섹션 22. Class Transformer** (18분)
- [ ] Exclude Annotation
- [ ] Expose Annotation
- [ ] ClassSerializer 적용

### 섹션 23-25: Pagination 시스템 (2주)
#### 진행 예정

**섹션 23. Cursor Pagination** (1시간 24분)
- [ ] Pagination 이론
- [ ] Cursor 기반 페이지네이션
- [ ] 메타데이터 생성
- [ ] 내림차순 정렬 로직

**섹션 24. Page Pagination** (13분)
- [ ] Page 기반 페이지네이션
- [ ] Total count 구현

**섹션 25. Pagination 일반화** (1시간 8분)
- [ ] BasePaginationDto
- [ ] paginate() 함수 일반화
- [ ] FindOptions 동적 생성

### 섹션 26-29: Config & File Upload (1-2주)
#### 진행 예정

**섹션 26. Config 모듈** (21분)
- [ ] ENV 파일 설정
- [ ] 환경변수 적용
- [ ] ConfigModule 사용

**섹션 27. 파일 업로드 - 클래식** (24분)
- [ ] Multer 설정
- [ ] FileInterceptor 적용

**섹션 28. Static File Serving** (8분)
- [ ] 정적 파일 서빙
- [ ] URL prefix 추가

**섹션 29. 파일 업로드 - 선 업로드** (31분)
- [ ] 선 업로드 방식 이론
- [ ] 이미지 업로드 구현
- [ ] 임시 폴더 관리

### 섹션 30-33: Transaction & Advanced Features (2주)
#### 진행 예정

**섹션 30. Transaction** (52분)
- [ ] Transaction 이론
- [ ] ImageModel 구현
- [ ] Transaction 적용

**섹션 31. Interceptor** (36분)
- [ ] Interceptor 이론
- [ ] 로거 Interceptor
- [ ] Transaction Interceptor

**섹션 32. Exception Filter** (9분)
- [ ] Exception Filter 이론
- [ ] HttpExceptionFilter 구현

**섹션 33. Middleware** (12분)
- [ ] Middleware 이론 및 구현

### 섹션 34-35: WebSocket (1-2주)
#### 진행 예정

**섹션 34. SocketIO 기본기** (1시간 39분)
- [ ] WebSocket/Socket.IO 이론
- [ ] Gateway 생성
- [ ] Room 활용
- [ ] Chat 시스템 구현

**섹션 35. SocketIO 심화** (38분)
- [ ] Validation Pipe
- [ ] Exception Filter
- [ ] Guard 적용
- [ ] Gateway Lifecycle

### 섹션 36-40: 고급 시스템 설계 (2-3주)
#### 진행 예정

**섹션 36. 모듈 네스팅** (45분)
- [ ] Comments Entity
- [ ] 중첩된 API 구조
- [ ] Middleware 활용

**섹션 37. RBAC** (31분)
- [ ] Role Based Access Control
- [ ] Roles Decorator
- [ ] 권한 시스템

**섹션 38. Authorization** (18분)
- [ ] 세밀한 권한 제어
- [ ] 소유자 검증 Guard

**섹션 39. Follow System** (39분)
- [ ] 팔로우 시스템 설계
- [ ] Many-to-Many 관계
- [ ] 커스텀 테이블 구현

**섹션 40. 카운트 시스템** (19분)
- [ ] 팔로워 카운트
- [ ] 댓글 카운트
- [ ] 실시간 업데이트

## 🛠 추천 도구 및 라이브러리

### 핵심 패키지
```json
{
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/core": "^11.0.1",
    "@nestjs/platform-express": "^11.0.1",
    "@nestjs/typeorm": "^11.0.0",
    "@nestjs/jwt": "^10.0.0",
    "@nestjs/passport": "^10.0.0",
    "@nestjs/config": "^3.0.0",
    "@nestjs/websockets": "^11.0.0",
    "@nestjs/platform-socket.io": "^11.0.0",
    "typeorm": "^0.3.25",
    "pg": "^8.16.3",
    "class-validator": "^0.14.2",
    "class-transformer": "^0.5.1",
    "bcrypt": "^5.1.0",
    "passport-jwt": "^4.0.0",
    "socket.io": "^4.7.0"
  }
}
```

### 유용한 도구
- **데이터베이스**: PostgreSQL, PgAdmin
- **API 테스트**: Postman
- **컨테이너화**: Docker, Docker Compose
- **패키지 관리**: PNPM

## 📅 학습 스케줄 (총 12-15주)

| 기간 | 섹션 | 내용 | 상태 |
|------|------|------|------|
| 1-2주 | 1-8 | 기초 설정, Controller, Service, Module | ✅ 완료 |
| 3-4주 | 9-13 | 데이터베이스, TypeORM, 관계 설정 | ✅ 진행중 |
| 5-6주 | 14 | Authentication, JWT, 보안 | 🔄 예정 |
| 7-8주 | 15-22 | Pipes, Guards, Validation, Transformation | 🔄 예정 |
| 9-10주 | 23-25 | Pagination 시스템 | 🔄 예정 |
| 11-12주 | 26-33 | Config, File Upload, Transaction, Middleware | 🔄 예정 |
| 13-14주 | 34-35 | WebSocket, Socket.IO | 🔄 예정 |
| 15주 | 36-40 | 고급 시스템 (RBAC, 팔로우 등) | 🔄 예정 |

## 🎓 학습 방법론

### 실습 프로젝트 진행 방식
1. **Posts 기반 블로그 시스템**: 강의의 메인 프로젝트
   - User (사용자)
   - Post (게시글)  
   - Comment (댓글)
   - Image (이미지)
   - Follow 시스템

2. **단계별 기능 추가**:
   - 기본 CRUD → 인증 → 파일업로드 → 실시간 채팅 → 권한관리

### 학습 진도 관리
- **매 섹션 완료 후**: 실습 코드 커밋 및 노트 정리
- **주간 리뷰**: 진행 상황 점검 및 복습
- **단계별 테스트**: Postman을 활용한 API 검증

## 🚀 현재 진행 상황

### ✅ 완료 (섹션 1-10)
- 기본 환경 설정 및 NestJS 이해
- Controller, Service, Module 패턴  
- TypeORM 기본 연동 및 CRUD 구현
- PostgreSQL 데이터베이스 연결

### 🔄 현재 작업중 (섹션 14)
- **JWT 인증 시스템 90% 완성**
- AuthService (register, login 메서드) 구현 완료
- bcrypt 해싱, JWT 토큰 생성 구현 완료
- RegisterDto, LoginDto 생성 완료
- **Auth Controller 구현 남음** ← 다음 작업

### 📋 다음 학습 옵션
**옵션 A**: 섹션 15-19 (Guards, Pipes, Custom Decorators)
- JWT 토큰 검증 Guard 구현
- 보호된 엔드포인트 생성

**옵션 B**: 섹션 11-12 (TypeORM 고급 기능)
- Entity 관계 설정 (User-Post 관계)
- 복잡한 데이터베이스 쿼리

---

**현재 상태**: 섹션 14 Authentication 마무리 단계 🎯