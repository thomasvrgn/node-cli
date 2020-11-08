import { Arguments } from 'typings/arguments';

export class Parser {
  private static readonly options: Arguments = { options: [], values: [] };

  public static parseArguments(args: string[], index: number = 0): typeof Parser.parseArguments | Arguments {
    const argument: string = args[index];
    if (!argument) return this.options;
    if (argument.startsWith('-')) {
      const destructured: string[] = argument.split(/[(^\-+)|(=)]/g).filter((x: string) => x.length > 0);
      this.options.options.push({
        name: destructured[0],
        value: destructured[1],
      });
    } else {
      this.options.values.push(argument);
    }
    return this.parseArguments(args, index + 1);
  }
}