import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {placeholderTEXT} from '../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FormPassword = ({
  labelValue,
  placeholderText,
  iconType,
  error,
  showIcon,
  ...rest
}) => {
  const [showPass, setshowPass] = React.useState(false);
  const _toggleIcon = () => {
    if (showPass) {
      setshowPass(false);
    } else {
      setshowPass(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={200}
        secureTextEntry={showPass ? false : true}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTEXT}
        {...rest}
      />
      <TouchableOpacity
        style={{right: WP(12), top: WP(2)}}
        onPress={() => setshowPass(true)}>
        {<Text style={{color: '#5DB075', fontWeight: '600'}}>Show</Text>}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: WP(94),
    height: windowHeight / 15,
    borderColor: '#707070',
    borderRadius: 3,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 3,
    paddingTop: 2,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
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
    top: 10,
    alignSelf: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 12.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default FormPassword;
