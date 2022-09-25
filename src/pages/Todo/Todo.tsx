import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputSubmit from '../../components/InputSubmit';
import Lists from './Lists';
import useTodo from './useTodo';

const Todo = () => {
  const {addTodo, todoList} = useTodo();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <Lists items={todoList} />
      <InputSubmit placeholder="Add Todo" buttonText="Add" onSubmit={addTodo} />
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
