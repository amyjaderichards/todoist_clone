import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Sidebar } from '../components/layout/Sidebar';

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => 'INBOX'),
  })),
  useProjectsValue: jest.fn(() => ({
    setProjects: jest.fn(),
    projects: [
      {
        name: '🙌 THE OFFICE',
        projectId: '1',
        userId: '123456',
        docId: 'michael-scott',
      },
    ],
  })),
}));

beforeEach(cleanup);

describe('<Sidebar />', () => {
  describe('Success', () => {
    it('renders the sidebar component', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
    });

    it('changes the active project to Inbox in collated tasks', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
      fireEvent.click(queryByTestId('inbox-action'));

      expect(queryByTestId('inbox').classList.contains('active')).toBeTruthy();
      expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
    });

    it('changes the active project to Today in collated tasks', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
      fireEvent.click(queryByTestId('today-action'));

      expect(queryByTestId('today').classList.contains('active')).toBeTruthy();
      expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
    });

    it('changes the active project to Next 7 in collated tasks', () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();
      fireEvent.click(queryByTestId('next_7-action'));

      expect(queryByTestId('next_7').classList.contains('active')).toBeTruthy();
      expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
      expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
    });

    it('hides and shows the sidebar projects using an onClick', () => {
      const { queryByTestId, queryByText, getByText } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();

      fireEvent.click(getByText('Projects'));
      expect(queryByText('Add Project')).toBeFalsy();

      fireEvent.click(getByText('Projects'));
      expect(queryByText('Add Project')).toBeTruthy();
    });

    it('hides and shows the sidebar projects using an onKeyDown', () => {
      const { queryByTestId, queryByText, getByText } = render(<Sidebar />);
      expect(queryByTestId('sidebar')).toBeTruthy();

      fireEvent.keyDown(getByText('Projects'));
      expect(queryByText('Add Project')).toBeFalsy();

      fireEvent.keyDown(getByText('Projects'));
      expect(queryByText('Add Project')).toBeTruthy();
    });
  });
});
