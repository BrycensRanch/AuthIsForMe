// Application starts from start.ts


import {describe, it, expect} from 'vitest';
import { build } from '../helper';
import get from "got"
import supertest from 'supertest'


describe('Start application', () => {
  it('should start the application', async () => {
    const app = await build();
    // app.inject({
    //   method: 'GET',
    //   url: '/api/health',
    // }).then(response => {
    //   expect(response.statusCode).toBe(200)
    // })
    // const address = app.server.address()
    // const port = typeof address === 'string' ? address : address?.port
    const response = await get(`http://localhost:8000/api/health`)
    expect(response.statusCode).toBe(200)
  });
});
