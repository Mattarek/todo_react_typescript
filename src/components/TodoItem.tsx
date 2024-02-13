import { TodoItemProps } from '../types/todo';

export const TodoItem = ({ title, completed }: TodoItemProps) => {
    return (
        <div>
            <label className='flex items-center gap-2 border rounded-md p-2 border-grey-700 bg-white hover:bg-slate-50'>
                <input
                    type='checkbox'
                    className='scale-125'
                />
                <span
                    className={
                        completed ? 'line-through text-gray-400' : ''
                    }></span>
            </label>
        </div>
    );
};
