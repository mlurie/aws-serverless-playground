const { handler } = require("../dist/index");
const AWS = require("aws-sdk-mock");

describe("handler tests", () => {
  beforeAll(() => {
    AWS.mock("DynamoDB.DocumentClient", "get", (params, callback) => {
      callback(null, {Item: {Key: 'Value'}});
    });
  });

  afterAll(() => {
    AWS.restore("DynamoDB.DocumentClient");
  });

  test("status code success", async () => {
    const output = await handler({});
    expect(output.statusCode).toEqual(200);
  });

  test("body success", async () => {
    const output = await handler({});
    expect(output.body).toEqual(JSON.stringify({Key: 'Value'}));
  });
});
