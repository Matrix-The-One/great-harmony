export interface Foo {}

export interface Bar {
  children?: Array<string>
  a?: {
    b?: string
  }
}

const bar: Bar = {}

const foo = bar && bar.a && bar.a.b
