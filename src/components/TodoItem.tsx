import { TodoItemProps } from '../types/todo';
import { Trash2 } from 'lucide-react';

interface TodoItemFunctionProps {
    todo: TodoItemProps;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export const TodoItem = ({
    todo: { title, completed, id },
    onCompletedChange,
    onDelete,
}: TodoItemFunctionProps) => {
    return (
        <div className='flex items-center gap-1'>
            <label className='flex items-center gap-2 border rounded-md p-2 border-grey-700 bg-white hover:bg-slate-50 grow'>
                <input
                    type='checkbox'
                    checked={completed}
                    className='scale-125'
                    onChange={(e) => onCompletedChange(id, e.target.checked)}
                />
                {title}
                <span
                    className={
                        completed ? 'line-through text-gray-400' : ''
                    }></span>
            </label>
            <button
                className='p-2'
                onClick={() => onDelete(id)}>
                <Trash2
                    size={20}
                    className='text-gray-500'
                />
            </button>
        </div>
    );
};
