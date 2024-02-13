export interface TodoItemProps {
    id: number;
    title: string;
    completed: boolean;
    onCompletedChange?: (id: number, completed: boolean) => void;
}
