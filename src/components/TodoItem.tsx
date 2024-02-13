import { TodoItemProps } from '../types/todo';

interface TodoItemFunctionProps {
    todo: TodoItemProps;
}

export const TodoItem = ({
    todo: { completed, onCompletedChange, id },
}: TodoItemFunctionProps) => {
    return (
        <div>
            <label className='flex items-center gap-2 border rounded-md p-2 border-grey-700 bg-white hover:bg-slate-50'>
                <input
                    type='checkbox'
                    checked={completed}
                    className='scale-125'
                    onChange={(e) =>
                        onCompletedChange &&
                        onCompletedChange(id, e.target.checked)
                    }
                />
                <span
                    className={
                        completed ? 'line-through text-gray-400' : ''
                    }></span>
            </label>
        </div>
    );
};
