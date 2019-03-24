// any
const value: any = '20';

const intValue: number = value;

// unknown -- a typesafe any
const stringValue: unknown = '20';

const intValue2: number = stringValue;
const intValue3: number = stringValue as number;

// void

// never

function failOnError(fail: boolean, message: string): never | void {
  if (fail) {
    throw new Error(message);
  }
}

interface CustomProps {
  value: string | null;
  color: string | undefined;
}
