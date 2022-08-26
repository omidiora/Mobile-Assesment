import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {HP, WP} from '../utils';
import FormInput from '../component/FormInput';
import FormPassword from '../component/FormPassword';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setLogin({
      ...login,
      [inputName]: inputValue,
    });
  };
  return (
    <View
      style={styles.container}
      contentContainerStyle={{paddingBottom: WP(90)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.signUpText}>Log In</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <FormInput
            value={login.name}
            placeholderText="Email"
            name="email"
            onChangeText={value => handleInputChange('email', value)}
          />
        </View>
        {/* style={{top: 90}} */}
        <View style={styles.emailContainer}>
          <FormInput
            value={login.password}
            placeholderText="Password"
            onChangeText={value => handleInputChange('password', value)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.btnText}>Log in</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: 500,
    width: 500,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: WP(13),
    alignSelf: 'center',
  },
  signUpText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: WP(10),
    bottom: WP(3),
  },
  LoginText: {
    color: '#5DB075',
    fontSize: WP(5),
    fontWeight: '500',
  },
  flexContainer: {height: 100},
  inputContainer: {
    top: WP(11),
    flexDirection: 'column',
    paddingBottoms: 100,
  },
  emailContainer: {
    top: HP(11.5),
  },
  passwordContainer: {
    top: HP(38.5),
  },
  buttonContainer: {
    top: WP(93),
    backgroundColor: '#5DB075',
    height: HP(8),
    width: WP(93),
    alignSelf: 'center',
    borderRadius: WP(12),
  },
  btnText: {
    textAlign: 'center',
    fontSize: WP(5),
    color: 'white',
    fontWeight: 'bold',
    top: WP(4),
  },
  forgotText: {
    color: '#5DB075',
    height: WP(50),
    top: HP(53),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: WP(5),
  },
});
