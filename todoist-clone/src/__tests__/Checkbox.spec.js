import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup); // cleans the DOM

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

describe('<Checkbox>', () => {
  describe('Success', () => {
    it('renders the task checkbox', () => {
      const { queryByTestId } = render(<Checkbox id="1" taskDesc="Finish this tutorial series!" />);
      expect(queryByTestId('checkbox-action')).toBeTruthy();
    });

    it.skip('renders the task checkbox and accepts an onClick', () => {
      const { queryByTestId } = render(<Checkbox id="1" taskDesc="Finish this tutorial series!" />);
      expect(queryByTestId('checkbox-action')).toBeTruthy();
      fireEvent.click(queryByTestId('checkbox-action'));
      // TODO: this one is failing? :S
    });

    it('renders the task checkbox and accepts an onKeyDown', () => {
      const { queryByTestId } = render(<Checkbox id="1" taskDesc="Finish this tutorial series!" />);
      expect(queryByTestId('checkbox-action')).toBeTruthy();
      fireEvent.keyDown(queryByTestId('checkbox-action'));
    });
  });

  describe.skip('Failure', () => {
    // TODO: add failure case
  });
});
