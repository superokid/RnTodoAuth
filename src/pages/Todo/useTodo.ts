import {useState} from 'react';

export interface TodoItem {
  id: string;
  text: string;
}

interface useTodoReturn {
  addTodo: (val: string) => void;
  todoList: TodoItem[];
}

function useTodo(): useTodoReturn {
  const [todoList, setTodo] = useState<TodoItem[]>([]);

  const addTodo: useTodoReturn['addTodo'] = newVal => {
    setTodo(prev => [
      ...prev,
      {
        id: new Date().getTime().toString(),
        text: newVal,
      },
    ]);
  };
  return {todoList, addTodo};
}

export default useTodo;
