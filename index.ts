/* tslint:disable no-console */

import { Callback, Context, Handler } from "aws-lambda";
import * as DynamoDB from "aws-sdk/clients/dynamodb";

const dynamo = new DynamoDB.DocumentClient();

const handler: Handler = (event: any): Promise<string[]> => {
  const a: string[] = [
    "hello",
    "world",
  ];
  return Promise.resolve(a);
};

export { handler };
