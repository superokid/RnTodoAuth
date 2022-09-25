import {useState} from 'react';

export interface TodoItem {
  id: string;
  text: string;
}

interface useTodoReturn {
  todoList: TodoItem[];
  addTodo: (val: TodoItem['text']) => void;
  deleteTodo: (id: TodoItem['id']) => void;
  getTodo: (id: TodoItem['id']) => TodoItem | undefined;
  updateTodo: (id: TodoItem['id'], text: TodoItem['text']) => void;
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

  const deleteTodo: useTodoReturn['deleteTodo'] = id => {
    setTodo(prev => prev.filter(item => item.id !== id));
  };

  const getTodo: useTodoReturn['getTodo'] = id => {
    return todoList.find(item => item.id === id);
  };

  const updateTodo: useTodoReturn['updateTodo'] = (id, text) => {
    setTodo(prev =>
      prev.map(item => (item.id === id ? {id: item.id, text} : item)),
    );
  };

  return {todoList, addTodo, deleteTodo, getTodo, updateTodo};
}

export default useTodo;
