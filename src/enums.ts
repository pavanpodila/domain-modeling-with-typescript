enum ResultType {
  pending,
  completed,
  failed,
}

enum StringResultType {
  pending = 'Pending',
  completed = 'Completed',
  failed = 'Failed',
}

enum IntegerResultType {
  pending = 0,
  completed = 1,
  failed = 2,
}

type StringLiteralResultType = 'pending' | 'completed' | 'failed';
type NumberLiteralResultType = 0 | 1 | 2;

interface Pending {
  kind: 'pending';
}

interface Completed {
  kind: 'completed';
}

interface Failed {
  kind: 'failed';
}

type UnionResultType = Pending | Completed | Failed;

function changeStatus(status: StringLiteralResultType) {
  /* ... */
}
