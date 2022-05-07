import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { AddTask } from '../components/AddTask';
import { useSelectedProjectValue } from '../context';

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(() => ({ selectedProject: '1' })),
  useProjectsValue: jest.fn(() => ({ projects: [] })),
}));

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve('Never mock firebase')),
      })),
    })),
  },
}));

beforeEach(cleanup);

describe('<AddTask />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Success', () => {
    it('renders the AddTask component', () => {
      const { queryByTestId } = render(<AddTask />);
      expect(queryByTestId('add-task-comp')).toBeTruthy();
    });

    it('renders the AddTask quick overlay', () => {
      const setShowQuickAddTask = jest.fn();

      const { queryByTestId } = render(
        <AddTask
          showAddTaskMain
          shouldShowMain={false}
          showQuickAddTask
          setShowQuickAddTask={setShowQuickAddTask}
        />
      );

      expect(queryByTestId('quick-add-task')).toBeTruthy();
    });
  });
});
