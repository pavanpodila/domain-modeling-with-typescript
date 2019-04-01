interface Shape {
  color: string;
  width: number;
  height: number;
  lineWidth: number;
  useShadow: boolean;
}

type ShapeKeys = keyof Shape;
type ShapeKeys2 = 'color' | 'width' | 'height' | 'lineWidth' | 'useShadow';

const names = {
  'track-1': 'Mobile',
  'track-2': 'Web',
  'track-3': 'Data',
  'track-4': 'Microservices',
  'track-5': 'AI',
};

type keys = keyof typeof names;

type SpecificProps<T, K extends keyof T> = { [P in K]: T[P] };

type ColorAndWidth = SpecificProps<Shape, 'color' | 'width'>;

/// Extracting new types ///

type Check = {
  flag: boolean;
  skip: never;
  name?: string;
};
type OnlyBool = Check['skip' | 'flag'];
type CheckWithoutNever = Check[keyof Check];

// From an object literal
type TrackType = typeof names['track-1'];

/// Complex Mapped Types
type OnlySomeProps = Pick<Shape, 'color' | 'width'>;
type NotRequiredProps = Partial<Shape>;

type NumberedShapeProps = {
  [K in keyof Shape]: Shape[K] extends number ? K : never
}[keyof Shape];

type NumberProps = { [K in NumberedShapeProps]: Shape[K] };

// Genericize NumberedShapeProps!!

/// Examples of Mapping ///
interface Todo {
  name: string;
  done: boolean;
}

interface TodoList {
  todos: Todo[];
  name: string;
  id: string;
  lastUpdated: Date;
  tags?: string[];
  ownerId: string;
  sharedWithUsers: { [userId: string]: boolean };
}

// Pick only a slice that has the sharing group users
type ShareGroupUsers = Pick<TodoList, 'sharedWithUsers'>;

// Extract everything except the sharedWithUsers
type PlainTodoList = {
  [K in Exclude<keyof TodoList, 'sharedWithUsers'>]: TodoList[K]
};

type OnlyStringTypeProps<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends (string | string[]) ? K : never }[keyof T]
>;

type TodoListStringProps = OnlyStringTypeProps<TodoList>;
