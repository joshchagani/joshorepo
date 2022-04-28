import styles from './spelling-bee-solver-ui.module.scss';

/* eslint-disable-next-line */
export interface SpellingBeeSolverUiProps {}

export function SpellingBeeSolverUi(props: SpellingBeeSolverUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SpellingBeeSolverUi!</h1>
    </div>
  );
}

export default SpellingBeeSolverUi;
