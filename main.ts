#!/usr/bin/env node -r ts-node/register/transpile-only -r tsconfig-paths/register

import { Parser } from 'cli/parser';
import { Arguments } from 'typings/arguments';

const args: string[] = process.argv.slice(2);
const options: Arguments = <Arguments>Parser.parseArguments(args);

console.log(options)