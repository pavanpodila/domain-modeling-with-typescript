type VoidCallback = () => void;

function fireCallback(cb: VoidCallback) {
  cb();
}

type ColorValue = null | undefined | string | number | (() => string);

function destructure1({ color: string, width: number }) {}

function destructure2({ color, width }: { color: string; width: number }) {}
