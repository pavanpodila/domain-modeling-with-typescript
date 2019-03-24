import React from 'react';

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

class Authenticated extends React.Component<Props> {
  public render() {
    return this.props.isAuthenticated ? this.props.children : null;
  }
}

function fetchFromAPI<T>(endPoint: string) {
  return new Promise<T>(resolve => ({} as T));
}
