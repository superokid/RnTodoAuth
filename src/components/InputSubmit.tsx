import React, {useEffect, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  ViewStyle,
} from 'react-native';
import Button from './Button';

type Props = {
  buttonText: string;
  onSubmit: (val: string) => void;
  inputValue?: string;
  containerStyle?: ViewStyle;
} & TextInputProps;

const InputSubmit = ({
  buttonText,
  onSubmit,
  inputValue,
  containerStyle,
  ...props
}: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(inputValue || '');
  }, [inputValue]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={64}
      style={containerStyle}>
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
            onSubmit(text);
            Keyboard.dismiss();
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
    borderRadius: 26,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});
