import React from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoItem} from './useTodo';

interface Props {
  items: TodoItem[];
  onDelete: (val: TodoItem['id']) => void;
  onItemPress: (val: TodoItem['id']) => void;
}

const Lists = ({items, onDelete, onItemPress}: Props) => {
  return (
    <ScrollView style={styles.scroll}>
      {items.map(item => (
        <TouchableOpacity key={item.id} onPress={() => onItemPress(item.id)}>
          <Text style={styles.title} testID="todo-item__text">
            {item.text}
          </Text>
          <Text onPress={() => onDelete(item.id)}>Remove</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Lists;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000',
  },
});
