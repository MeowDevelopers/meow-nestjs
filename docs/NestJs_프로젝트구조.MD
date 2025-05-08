```
src/
├── app.controller.ts
├── app.controller.spec.ts
├── app.module.ts
├── app.service.ts
├── main.ts
```

| 파일                  | 역할                                               |
| :------------------ | :----------------------------------------------- |
| `main.ts`           | 앱의 **엔트리 포인트** (`NestFactory.create(AppModule)`) |
| `app.module.ts`     | 앱의 **최상위 모듈**. 모든 하위 모듈을 `imports: []`로 연결       |
| `app.controller.ts` | 기본 API 라우터 (`GET /`, etc.)                       |
| `app.service.ts`    | 기본 서비스 로직. 비즈니스 처리 담당                            |
| `*.spec.ts`         | 유닛 테스트 파일 (Nest CLI가 자동 생성)                      |


## AppModule이란? 
- Spring에서는 패키지 단위로 도메인을 나누듯이 NestJs에서는 모듈단위로 도메인을 나눕니다. 해당 모듈들의 최상위 모듈로서 모든 하위 모듈을 import로 연결해서 관리하는 역할을 AppModule이 합니다.

**[예시 코드]**
```
@Module({
  imports: [UserModule], // 하위 모듈을 import 함
})
export class AppModule {}
```

---

## 의존성 주입구조란?
Nest는 DI(Dependuncy Injection)컨테이너 기반으로 동작해서 

- user.controller.ts
- user.service.ts

2가지 파일이 존재하고
controller에서 service가 필요한경우
service에 데코레이터 **즉 @Injectable을 붙여 DI컨테이너에 등록하며 이 service가 의존성 주입이 가능한 대상**이다라고 선언 할 수 있습니다.

이로 인해 user.controller.ts에서는 생성자로 생성하지 않아도 간단하게 가져다 쓸수있는 구조가됩니다.

  
  
**[예시 코드]**
```

//user.controller.ts
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}

//user.service.ts
@Injectable() //DI컨테이너에 등록
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
```

**예외:**
컨트롤러(@Controller())나 모듈(@Module())은 자동으로 DI 등록 대상이므로 @Injectable() 안 붙여도 됨.

--- 

## @Module의 인자 요소

```
@Module({
  imports: [],       // 다른 모듈을 가져올 때
  controllers: [],   // 이 모듈이 등록하는 라우터
  providers: [],     // 이 모듈의 의존성 (Service, Repository 등)
  exports: [],       // 다른 모듈에서 쓸 수 있게 공개할 것들
})
export class SomeModule {}

```

---

## 왜 NestJS에서는 모듈간의 DI를 하기위해 export import같은 행위를 해야할까?

| 항목       | Spring Boot                                   | NestJS                                    |
| :------- | :-------------------------------------------- | :---------------------------------------- |
| DI 등록 방식 | 클래스에 `@Component`, `@Service` 붙이면 자동          | 반드시 `@Module`에서 `providers`에 등록해야 함       |
| 외부 모듈 접근 | `@ComponentScan`, `@Import`, 또는 같은 패키지면 자동 스캔 | `imports`, `exports` 명시해야 접근 가능           |
| 기본 철학    | Convention over Configuration (관례 우선)         | 명시적 구성 (Explicit is better than implicit) |


NestJS는 Angular에서 영향을 받은 구조로 Angular는 "모듈은 반드시 명시적으로 연결하라"라는 철학이 있어서 계승한걸로 확인
또한 이로인해 모듈간의 경계를 명확하게 설계 할 수 있는 장점이있음 