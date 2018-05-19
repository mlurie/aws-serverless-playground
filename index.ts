/* tslint:disable no-console */

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Callback, Context,
  Handler,
} from "aws-lambda";
import * as DynamoDB from "aws-sdk/clients/dynamodb";

const dynamo = new DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandler = (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: "hello world",
  };
  return Promise.resolve(result);
};
