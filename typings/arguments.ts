interface Option {
  name: string,
  value: string,
}

type Value = string;

export interface Arguments {
  options: Option[],
  values: Value[],
}