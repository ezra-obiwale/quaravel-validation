declare module '@ezraobiwale/quaravel-validation' {
  type MessageRuleObject = {
    [rule: string]: string;
  };

  type MessageObject = {
    [field: string]: false | MessageRuleObject;
  };

  type ValidationFunction = (value: any) => boolean;

  export function getRules(
    rules: string | string[],
    messages?: false | MessageObject
  ): ValidationFunction[];
}
