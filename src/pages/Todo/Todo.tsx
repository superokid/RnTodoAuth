import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputSubmit from '../../components/InputSubmit';
import Lists from './Lists';
import useTodo, {TodoItem} from './useTodo';

const Todo = () => {
  const {todoList, addTodo, deleteTodo, getTodo, updateTodo} = useTodo();
  const [selectedItemId, setSelectedItemId] = useState<TodoItem['id'] | null>(
    null,
  );

  const handleSubmit = (val: string) => {
    if (selectedItemId) {
      updateTodo(selectedItemId, val);
      setSelectedItemId(null);
    } else {
      addTodo(val);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <Lists
        items={todoList}
        onDelete={deleteTodo}
        onItemPress={setSelectedItemId}
      />
      <InputSubmit
        placeholder={selectedItemId ? 'Update Todo' : 'Add Todo'}
        buttonText={selectedItemId ? 'Update' : 'Add'}
        inputValue={selectedItemId ? getTodo(selectedItemId)?.text : ''}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginBottom: 20,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000',
  },
});
