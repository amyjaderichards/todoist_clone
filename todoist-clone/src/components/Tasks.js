/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useTasks } from '../hooks';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { AddTask } from './AddTask';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue() || {};
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';

  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!', projects); // Array of length 1
  // console.log('################', selectedProject); // was 1 now INBOX

  // console.log('GET TITLE OUTPUT:', getTitle(projects, '1'));
  // console.log('GET COLLATED TITLE OUTPUT:', getCollatedTitle(projects, '1'));

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects
    && projects.length > 0
    && selectedProject
    && !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
};
