import { useMachine } from '@xstate/react';
import { dbMachine } from '@joshorepo/spelling-bee-solver/machine';

export function App() {
  const [current, send] = useMachine(dbMachine);
  return (
    <>
      <p>Spelling Bee Solver App</p>
    </>
  );
}

export default App;
