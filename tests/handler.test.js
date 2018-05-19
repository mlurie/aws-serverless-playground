const { handler } = require('../dist/lambda');

test('handler', async () => {
  const output = await handler({});
  expect(output).toEqual(["hello","world"]);
});
