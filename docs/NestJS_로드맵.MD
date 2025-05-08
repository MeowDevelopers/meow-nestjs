🧭 NestJS 학습 로드맵 (실습 중심 / Express → Spring 비교 기반)
| 단계     | 학습 주제                     | 주요 개념                                                           |
| :----- | :------------------------ | :-------------------------------------------------------------- |
| ✅ 1단계  | 프로젝트 구조 이해                | `AppModule`, `main.ts`, 의존성 주입(DI), 모듈 시스템                      |
| ✅ 2단계  | 컨트롤러 & 서비스                | `@Controller()`, `@Get()`, `@Post()`, `@Injectable()`           |
| ✅ 3단계  | DTO + Validation          | `class-validator`, `@Body()`, `@UsePipes(new ValidationPipe())` |
| ✅ 4단계  | 모듈 분리 & DI 구조화            | 도메인 단위 모듈 설계 (예: User, Auth, Post 등)                            |
| ✅ 5단계  | DB 연동 (Prisma or TypeORM) | 모델 설계, CRUD, DI 기반 Repository 구조                                |
| ✅ 6단계  | 인증 (JWT)                  | `AuthModule`, `Passport`, `jwt.strategy.ts`, `@UseGuards()`     |
| ✅ 7단계  | 미들웨어 & Interceptor        | 로깅, 응답 포맷팅, `@UseInterceptors()`                                |
| ✅ 8단계  | Exception Filter & Pipe   | `@Catch()`, `@UseFilters()`, 커스텀 Exception 처리                   |
