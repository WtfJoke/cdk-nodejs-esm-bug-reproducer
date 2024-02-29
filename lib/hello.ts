import { SSM } from "@aws-sdk/client-ssm";

export const handler = async () => {
  new SSM().putParameter({
    Name: "my-param",
    Value: "my-value",
    Overwrite: true,
  });
};
