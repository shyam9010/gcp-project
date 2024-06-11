import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { InsuranceClaimController } from "../insuranceClaim.controller";
import { InsuranceClaimService } from "../insuranceClaim.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  claimAmount: 42.42,
  claimDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  policyNumber: "examplePolicyNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  claimAmount: 42.42,
  claimDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  policyNumber: "examplePolicyNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    claimAmount: 42.42,
    claimDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    policyNumber: "examplePolicyNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  claimAmount: 42.42,
  claimDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  policyNumber: "examplePolicyNumber",
  updatedAt: new Date(),
};

const service = {
  createInsuranceClaim() {
    return CREATE_RESULT;
  },
  insuranceClaims: () => FIND_MANY_RESULT,
  insuranceClaim: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("InsuranceClaim", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InsuranceClaimService,
          useValue: service,
        },
      ],
      controllers: [InsuranceClaimController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /insuranceClaims", async () => {
    await request(app.getHttpServer())
      .post("/insuranceClaims")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        claimDate: CREATE_RESULT.claimDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /insuranceClaims", async () => {
    await request(app.getHttpServer())
      .get("/insuranceClaims")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          claimDate: FIND_MANY_RESULT[0].claimDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /insuranceClaims/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/insuranceClaims"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /insuranceClaims/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/insuranceClaims"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        claimDate: FIND_ONE_RESULT.claimDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /insuranceClaims existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/insuranceClaims")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        claimDate: CREATE_RESULT.claimDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/insuranceClaims")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
