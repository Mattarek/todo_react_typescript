import { useState, useEffect } from 'react';
import { dummyData } from '../data/todos';
import { TodoItemProps } from '../types/todo';

export const useTodos = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos: TodoItemProps[] = JSON.parse(
            localStorage.getItem('todos') || '[]',
        );
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const setTodoCompleted = (id: number, completed: boolean) =>
        setTodos((prevState) =>
            prevState.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo,
            ),
        );

    const addToto = (title: string) => {
        setTodos((prevState) => [
            { id: prevState.length + 1, title, completed: false },
            ...prevState,
        ]);
    };

    const deleteTodo = (id: number) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    const deleteTodoCompleted = () => {
        setTodos((prevState) => prevState.filter((todo) => !todo.completed));
    };

    return {
        todos,
        setTodoCompleted,
        addToto,
        deleteTodo,
        deleteTodoCompleted,
    };
};
