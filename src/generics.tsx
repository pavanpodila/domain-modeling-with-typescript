import React from 'react';
import { scaleLinear, ScaleLinear } from 'd3-scale';

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

interface User {
  name: string;
  email: string;
  id: string;
}

(async () => {
  const user = await fetchFromAPI<User>('/users/123');
  return user;
})();

// D3 scales
const xScale: ScaleLinear<number, number> = scaleLinear()
  .domain([0, 100])
  .range([200, 300]);

// Redux reducer
interface Action {
  payload: any;
  type: string;
}

type Reducer<TState extends object, TAction extends Action> = (
  currentState: TState,
  action: TAction,
) => TState;
