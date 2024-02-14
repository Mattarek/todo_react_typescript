import { useState } from 'react';
import { TodoItem } from './TodoItem';
import { dummyData } from '../data/todos';
import { TodoItemProps } from '../types/todo';

interface TodoListProps {
    todos: TodoItemProps[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export const TodoList = ({
    todos,
    onCompletedChange,
    onDelete,
}: TodoListProps) => {
    const todosSorted = todos.toSorted((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    });

    return (
        <div className='space-y-2'>
            {todosSorted.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onCompletedChange={onCompletedChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
