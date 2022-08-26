import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Dimensions} from 'react-native';
import {BgColor, HP, placeholderTEXT, WP} from '../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FormInput = ({
  value,
  placeholderText,
  iconType,
  error,
  showIcon,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTEXT}
        {...rest}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {paddingBottom: 400},

  input: {
    padding: 15,
    fontSize: 16,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 2,
    height: HP(9),
    width: WP(90),
    top: 100,
    alignSelf: 'center',
    marginVertical: WP(5),

    lineHeight: 16, //
  },
});

export default FormInput;
