declare module '@ezraobiwale/quaravel-validation' {
  export function getRules(
    rules: string | string[],
    messages?: false | { [field: string]: false | { [rule: string]: string } }
  ): string;
};
