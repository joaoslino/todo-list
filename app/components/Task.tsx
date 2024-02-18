import { ITask } from '@/types/tasks';
import React from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi';

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task}) => {
  return (
    <tr key={task.id} className='hover cursor-pointer'>
      <td>{task.text}</td>
      <td className='flex gap-5'>
        <FiEdit size={25}/>
        <FiTrash size={25}/>
      </td>
    </tr>
  )
}

export default Task