# quaravel-validation
[Laravel](https://laravel.com/docs/9.x/validation#available-validation-rules) style validation for [Quasar](https://quasar.dev)

This is a wrapper around [laravel-style-validation](https://npmjs.org/@ezraobiwale/laravel-style-validation).

## Installation

```javascript
yarn add @ezraobiwale/quaravel-validation
// or
npm install @ezraobiwale/quaravel-validation
```

## Usage

```html
<template>
    <q-form>
        <q-input :rules="getRules('required|alpha')"></q-input>
    </q-form>
</template>

<script setup>
import { getRules } from '@ezraobiwale/quaravel';
</script>
```

## Rules

[See available rules](https://github.com/ezra-obiwale/laravel-style-validation/blob/master/doc/rules.md)