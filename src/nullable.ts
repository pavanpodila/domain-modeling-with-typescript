/// Optional Types ///

interface BoxProps {
  color?: string;
  width: number;
  height: number;
}

function applyProps(props?: BoxProps) {
  if (props) {
    const color = props.color || 'red';
  }
}

/// Nullable Types ///

interface ButtonProps {
  title: string;
  variant?: 'contained' | 'flat' | 'link';
  onClick: () => void | null;
}

function setTitle(title: string | (() => string) | null) {
  if (!title) return;

  let finalTitle = '';
  if (title instanceof Function) {
    finalTitle = title();
  } else {
    finalTitle = title;
  }
}
