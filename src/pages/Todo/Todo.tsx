import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import InputSubmit from '../../components/InputSubmit';
import colors from '../../constants/colors';
import Lists from './Lists';
import useTodo, {TodoItem} from './useTodo';

const Todo = () => {
  const {todoList, addTodo, deleteTodo, getTodo, updateTodo} = useTodo();
  const [selectedItemId, setSelectedItemId] = useState<TodoItem['id'] | null>(
    null,
  );

  const handleSubmit = (val: string) => {
    if (!val) {
      Alert.alert('type something');
      return;
    }
    if (selectedItemId) {
      updateTodo(selectedItemId, val);
      setSelectedItemId(null);
    } else {
      addTodo(val);
    }
  };

  const handleDelete = (val: string) => {
    deleteTodo(val);
    setSelectedItemId(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <Lists
        items={todoList}
        onDelete={handleDelete}
        onItemPress={setSelectedItemId}
      />
      <InputSubmit
        containerStyle={styles.inputContainer}
        placeholder={selectedItemId ? 'Update Todo' : 'Add Todo'}
        buttonText={selectedItemId ? 'UPDATE' : 'ADD'}
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
    backgroundColor: colors.gray,
  },
  title: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.bluePrimary,
  },
  inputContainer: {
    marginHorizontal: 24,
    marginVertical: 10,
  },
});
