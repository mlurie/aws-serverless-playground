/* tslint:disable no-console */

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import {
  DocumentClient,
} from "aws-sdk/clients/dynamodb";

const dynamo: DocumentClient = new DocumentClient();

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello World!" }),
  };
  return await Promise.resolve(result);
};
