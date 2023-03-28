import { validate } from '@ezraobiwale/laravel-style-validation';

export const getRules = (rules, messages) => [value => validate(value, rules, messages)];