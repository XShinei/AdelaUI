#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const packageName = args[0];
const filePath = path.join(__dirname, '../packages');

if (args.length === 0 || packageName === '') {
  console.log('Usage: npm gc \${name} with no space');

  process.exit(1);
}

const dirName = path.join(filePath, `/${packageName}`);

if (fs.existsSync(dirName) && fs.statSync(dirName).isDirectory()) {
  console.log(`${packageName} component already exists, please change it`);

  process.exit(1);
}

const componentName = packageName[0].toUpperCase() + packageName.slice(1).toLowerCase();

const TEMPLATE_INDEX_VUE = `
<template>
  <div>
  </div>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
  export default {
    name: 'Ad${componentName}',
  };
</script>

<style>
</style>
`;

const TEMPLATE_INDEX_TS=`
import { App } from 'vue';
import ${componentName} from './src/index.vue';

export default (app: App) => {
  app.component(${componentName}.name, ${componentName});
};
`

const TEMPLATE_PKG_JSON=`
{
  "name": "Adela-${componentName}",
  "description": "",
  "version": "0.1.0",
  "main": "./index.ts",
  "license": "MIT",
  "dependencies": {}
}
`

fs.mkdirSync(dirName);
fs.mkdirSync(`${dirName}/src`);

fs.writeFileSync(`${dirName}/package.json`, TEMPLATE_PKG_JSON);
fs.writeFileSync(`${dirName}/src/index.ts`, TEMPLATE_INDEX_TS);
fs.writeFileSync(`${dirName}/src/index.vue`, TEMPLATE_INDEX_VUE);