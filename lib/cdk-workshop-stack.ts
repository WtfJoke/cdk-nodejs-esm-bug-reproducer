import { Stack, StackProps } from "aws-cdk-lib";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { resolve } from "path";

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new nodejs.NodejsFunction(this, "MyLambda", {
      runtime: Runtime.NODEJS_20_X,
      handler: "handler",
      entry: resolve("lib", "hello.ts"),
      bundling: {
        externalModules: [],
        format: nodejs.OutputFormat.ESM,
      },
    });
  }
}
