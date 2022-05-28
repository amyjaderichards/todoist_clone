import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { IndividualProject } from '../components/IndividualProject';

beforeEach(cleanup);

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          delete: jest.fn(() => Promise.resolve('Never mock firebase!')),
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => 'INBOX'),
  })),
  useProjectsValue: jest.fn(() => ({
    setProjects: jest.fn(),
    projects: [
      {
        name: '👩‍💻 Career',
        projectId: '3',
        userId: '123456',
        docId: 'hello-there',
      },
    ],
  })),
}));

describe('<IndividualProject />', () => {
  const project = {
    name: '👩‍💻 Career',
    projectId: '3',
    userId: '123456',
    docId: 'hello-there',
  };

  describe('Success', () => {
    it('renders our project', () => {
      const { getByText } = render(<IndividualProject project={project} />);
      expect(getByText('TEST PROJECT NAME')).toBeTruthy();
    });

    it('renders the delete overlay and then deletes a project using onClick', () => {
      const { queryByTestId, getByText } = render(<IndividualProject project={project} />);
      fireEvent.click(queryByTestId('delete-project'));
      expect(getByText('Are you sure you want to delete this project?')).toBeTruthy();
      fireEvent.click(getByText('Delete'));
    });

    it('renders the delete overlay and then deletes a project using onKeyDown', () => {
      const { queryByTestId, getByText } = render(<IndividualProject project={project} />);
      fireEvent.keyDown(queryByTestId('delete-project'));
      expect(getByText('Are you sure you want to delete this project?')).toBeTruthy();
      fireEvent.keyDown(getByText('Delete'));
    });

    it('renders the delete overlay and then cancels using onClick', () => {
      const { queryByTestId, getByText } = render(<IndividualProject project={project} />);
      fireEvent.keyDown(queryByTestId('delete-project'));
      expect(getByText('Are you sure you want to delete this project?')).toBeTruthy();
      fireEvent.click(getByText('Cancel'));
    });

    it('renders the delete overlay and then cancels using onKeyDown', () => {
      const { queryByTestId, getByText } = render(<IndividualProject project={project} />);
      fireEvent.keyDown(queryByTestId('delete-project'));
      expect(getByText('Are you sure you want to delete this project?')).toBeTruthy();
      fireEvent.keyDown(getByText('Cancel'));
    });
  });
});
