import { Todo } from '../types/todo';

export const TodoItem = ({ title }: Todo) => {
    return <div>{title}</div>;
};
