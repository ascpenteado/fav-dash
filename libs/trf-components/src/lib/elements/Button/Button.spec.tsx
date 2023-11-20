import { render } from '@testing-library/react';

import Button from './Button.component';

describe('Button component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
