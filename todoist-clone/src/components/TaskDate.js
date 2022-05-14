/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => showTaskDate && (
  <div className="task-date" data-testid="task-date-overlay">
    <ul className="task-date__list">
      <li data-testid="task-date-today">
        <div
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format('DD/MM/YYYY'));
          }}
          onKeyDown={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format('DD/MM/YYYY'));
          }}
          tabIndex={0}
          aria-label="Select today as the task date"
          role="button"
        >
          <div>
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </div>
        </div>
      </li>
      <li data-testid="task-date-tomorrow">
        <div
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
          }}
          onKeyDown={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
          }}
          tabIndex={0}
          aria-label="Select tomorrow as the task date"
          role="button"
        >
          <div>
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </div>
        </div>
      </li>
      <li data-testid="task-date-next-week">
        <div
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
          }}
          onKeyDown={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
          }}
          tabIndex={0}
          aria-label="Select next week as the task date"
          role="button"
        >
          <div>
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next Week</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
