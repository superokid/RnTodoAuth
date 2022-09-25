import React, {useEffect, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import Button from './Button';

type Props = {
  buttonText: string;
  onSubmit: (val: string) => void;
  inputValue?: string;
} & TextInputProps;

const InputSubmit = ({buttonText, onSubmit, inputValue, ...props}: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (inputValue) {
      setText(inputValue);
    }
  }, [inputValue]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={64}>
      <View style={styles.border}>
        <TextInput
          testID="input-submit__input"
          onChangeText={setText}
          style={styles.input}
          autoCorrect={false}
          value={text}
          {...props}
        />
        <Button
          testID="input-submit__button"
          text={buttonText}
          onPress={() => {
            setText('');
            if (text) {
              onSubmit(text);
            }
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputSubmit;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    padding: 20,
    flex: 1,
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 26,
    paddingRight: 10,
  },
});
