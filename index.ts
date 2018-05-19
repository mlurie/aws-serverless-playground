/* tslint:disable no-console */

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Callback, Context,
  Handler,
} from "aws-lambda";
import {
  DocumentClient,
} from "aws-sdk/clients/dynamodb";

const dynamo = new DocumentClient();

export const handler: APIGatewayProxyHandler = (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true,
    },
    body: JSON.stringify({ message: "Hello World!" }),
  };
  return Promise.resolve(result);
};
