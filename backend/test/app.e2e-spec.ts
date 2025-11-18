import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Entities API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /api/entities then GET /api/entities', async () => {
    const payload = {
      name: 'Mor Test',
      email: 'mor+test@example.com',
      age: 27,
    };

    // Create entity via POST
    const postRes = await request(app.getHttpServer())
      .post('/api/entities')
      .send(payload)
      .expect(201);

    expect(postRes.body).toHaveProperty('id');
    expect(postRes.body.name).toBe(payload.name);
    expect(postRes.body.email).toBe(payload.email);
    expect(postRes.body.age).toBe(payload.age);

    // Verify entity exists via GET
    const getRes = await request(app.getHttpServer())
      .get('/api/entities')
      .expect(200);

    expect(Array.isArray(getRes.body)).toBe(true);
    const found = getRes.body.find((e: any) => e.id === postRes.body.id);

    expect(found).toBeDefined();
    expect(found.name).toBe(payload.name);
    expect(found.email).toBe(payload.email);
  });
});
