/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects && projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-test-id="project-action-parent"
        className={active === project.projectId ? 'active sidebar__project' : 'sidebar__project'}
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};
