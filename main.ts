#!/usr/bin/env node

import { Arguments } from 'typings/arguments';

const args: string[] = process.argv.slice(2);
const options: Arguments = {
  options: [],
  values: [],
};

function parseArguments(args: string[], index: number = 0) {
  const argument: string = args[index];
  if (!argument) return options;
  if (argument.startsWith('-')) {
    const destructured: string[] = argument.split(/[(^\-+)|(=)]/g).filter((x: string) => x.length > 0);
    options.options.push({
      name: destructured[0],
      value: destructured[1],
    });
  } else {
    options.values.push(argument);
  }
  return parseArguments(args, index + 1);
}

parseArguments(args);
console.log(options)