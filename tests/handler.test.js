const { handler } = require('../dist/index');

test('handler', async () => {
  const output = await handler({});
  expect(output.statusCode).toEqual(200);
});
