/* tslint:disable no-console */

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import {
  DocumentClient,
  GetItemOutput,
} from "aws-sdk/clients/dynamodb";
import {
  AWSError,
} from "aws-sdk/lib/error";
import {
  PromiseResult,
} from "aws-sdk/lib/request";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const dynamo: DocumentClient = new DocumentClient();
  const data: PromiseResult<GetItemOutput, AWSError> = await dynamo.get({
    TableName: "TestTable",
    Key: { Key: "Apple" },
  }).promise();
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.Item),
  };
  return await result;
};
