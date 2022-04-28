import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';

jest.mock('../context', () => ({
  // TODO
}));

beforeEach(cleanup);

describe('<Header />', () => {
  describe('Success', () => {
    it('renders the header component', () => {
      const { queryByTestId } = render(<Header />);
      expect(queryByTestId('header')).toBeTruthy();
    });

    it('renders the header component and activates dark mode using onClick', () => {
      const darkMode = false;
    });
  });
});
