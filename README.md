# Koban | Node API Library
API SDK for Koban CRM

[![NPM version](https://img.shields.io/npm/v/@koban-crm/api-library?style=flat-square)](https://www.npmjs.com/package/@koban-crm/api-library) [![Generic badge](https://img.shields.io/badge/Docs-online-blue.svg?style=flat-square)](https://koban-crm.github.io/koban-node-api-library/)

![Build Status](https://github.com/Koban-CRM/koban-node-api-library/workflows/CI/badge.svg)
[![Build Status](https://github.com/Koban-CRM/koban-node-api-library/workflows/Release/badge.svg)](https://github.com/Koban-CRM/koban-node-api-library/releases)

[![codecov](https://codecov.io/gh/Koban-CRM/koban-node-api-library/branch/master/graph/badge.svg)](https://codecov.io/gh/Koban-CRM/koban-node-api-library)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation
### with yarn
```bash
yarn add @koban-crm/api-library
```
### with npm
```bash
npm install @koban-crm/api-library
```

## Initialize
### with import
```typescript
import { KobanSDK } from '@koban-crm/api-library';

const optionsSDK = {
  kobanInstance: 'http://instance.koban/',
  token: 'TokenXXX',
  user: 'UserKeyXXX',
};

const skdKoban = new KobanSDK(optionsSDK);
```

### with require
```javascript
const kobanApi = require('@koban-crm/api-library');
/**
 * Can also be used wwith named export like
 * const { KobanSDK } = require('@koban-crm/api-library');
 */

const optionsSDK = {
  kobanInstance: 'http://instance.koban/',
  token: 'TokenXXX',
  user: 'UserKeyXXX',
};

const skdKoban = new kobanApi.KobanSDK(optionsSDK);
```

## Usage
### with async/await
```typescript
// Get Koban Invoice
let invoice = await skdKoban.invoiceService.getOne('InvoiceIdXXX');
```

### with callback
```javascript
// Get Koban Invoice
let invoice = skdKoban.invoiceService.getOne('InvoiceIdXXX')
.then(function(data) {
  return data;
}).catch(function(err) {
  console.log(err);
});
```

Full Documentation [here](https://koban-crm.github.io/koban-node-api-library/)