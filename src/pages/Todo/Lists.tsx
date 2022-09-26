import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TodoItem} from './useTodo';
import colors from '../../constants/colors';

interface Props {
  items: TodoItem[];
  onDelete: (val: TodoItem['id']) => void;
  onItemPress: (val: TodoItem['id']) => void;
}

const Lists = ({items, onDelete, onItemPress}: Props) => {
  return (
    <ScrollView style={styles.scroll}>
      {items.map(item => (
        <TouchableOpacity
          style={styles.row}
          key={item.id}
          onPress={() => onItemPress(item.id)}>
          <View style={styles.textContent}>
            <View style={styles.circle} />
            <Text style={styles.textItem} testID="todo-item__text">
              {item.text}
            </Text>
          </View>
          <Text style={styles.textDelete} onPress={() => onDelete(item.id)}>
            REMOVE
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Lists;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 26,
    marginBottom: 20,
    padding: 16,
  },
  textContent: {
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: colors.bluePrimary,
    borderRadius: 25,
    width: 20,
    height: 20,
    marginRight: 12,
  },
  textItem: {
    fontSize: 18,
    color: colors.darkGray,
  },
  textDelete: {
    color: colors.darkGray,
    paddingVertical: 8,
  },
});
