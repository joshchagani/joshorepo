import { render } from '@testing-library/react';

import SpellingBeeSolverUi from './spelling-bee-solver-ui';

describe('SpellingBeeSolverUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpellingBeeSolverUi />);
    expect(baseElement).toBeTruthy();
  });
});
