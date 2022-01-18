import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('will render accurate current values for corresponding targets within the App view', () => {
    render(<App />);

    const date = screen.getByLabelText(/date-input/i);
    const undo = screen.getByLabelText('undo');
    const redo = screen.getByLabelText('redo');

    // From README:

    fireEvent.change(date, { target: { value: '2022-01-01' } });
    screen.getByText(/2022-01-01/i);

    fireEvent.change(date, { target: { value: '2022-02-22' } });
    screen.getByText(/2022-02-22/i);

    fireEvent.change(date, { target: { value: '2022-03-14' } });
    screen.getByText(/2022-03-14/i);

    fireEvent.click(undo);
    screen.getByText(/2022-02-22/i);

    fireEvent.click(undo);
    screen.getByText(/2022-01-01/i);

    fireEvent.click(redo);
    screen.getByText(/2022-02-22/i);

    fireEvent.change(date, { target: { value: '2022-04-04' } });
    screen.getByText(/2022-04-04/i);

    fireEvent.click(undo);
    screen.getByText(/2022-02-22/i);

    fireEvent.click(undo);
    screen.getByText(/2022-01-01/i);

    fireEvent.click(redo);
    screen.getByText(/2022-02-22/i);

    fireEvent.click(redo);
    screen.getByText(/2022-04-04/i);

    fireEvent.click(redo);
    screen.getByText(/2022-03-14/i);
  });
});
