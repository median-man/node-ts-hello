import request from 'supertest'
import app from './App'

it('should respond to /', async () => {
  const { body } = await request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)

  expect(body).toMatchObject({
    message: expect.stringMatching(/Hello, .*!/),
  })
})
