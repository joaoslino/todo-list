import { ITask } from '@/types/tasks';
import React from 'react'

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task}) => {
  return (
    <tr key={task.id} className='hover cursor-pointer'>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  )
}

export default Task