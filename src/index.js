import { validate as lValidate } from '@ezraobiwale/laravel-style-validation'

export const validate = (rules, messages) => [value => lValidate(value, rules, messages)];