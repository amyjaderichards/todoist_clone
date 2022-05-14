import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { useProjectsValue } from '../context';
import { ProjectOverlay } from '../components/ProjectOverlay';

beforeEach(cleanup);

jest.mock('../context', () => ({
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: 'TEST PROJECT NAME',
        projectId: '1',
        userId: '123456',
        docId: 'hello-there',
      }
    ]
  }))
}));

describe('<ProjectOverlay />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('Success', () => {
    it('renders the project overlay and calls setShowProjectOverlay using onKeyDown', () => {
      const showProjectOverlay = true;
      const setProject = jest.fn();
      const setShowProjectOverlay = jest.fn(() => !showProjectOverlay);

      const { queryByTestId } = render(
        <ProjectOverlay
          showProjectOverlay
          setProject={setProject}
          setShowProjectOverlay={setShowProjectOverlay}
        />
      );

      expect(queryByTestId('project-overlay')).toBeTruthy();
      fireEvent.keyDown(queryByTestId('project-overlay-action'));
      expect(setProject).toHaveBeenCalled();
    });
  });

  describe('Failure', () => {
    it('does not render the project overlay with any projects', () => {
      useProjectsValue.mockImplementation(() => ({
        projects: [],
      }));

      const { queryByTestId } = render(<ProjectOverlay showProjectOverlay />);
      expect(queryByTestId('project-overlay')).toBeTruthy();
      expect(queryByTestId('project-overlay-action')).toBeFalsy();
    });
  });
});
