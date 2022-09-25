import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {TodoItem} from './useTodo';

interface Props {
  items: TodoItem[];
}

const Lists = ({items}: Props) => {
  return (
    <ScrollView style={styles.scroll}>
      {items.map(item => (
        <Text key={item.id} style={styles.title} testID="todo-item__text">
          {item.text}
        </Text>
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
