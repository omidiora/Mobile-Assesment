import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {HP, WP} from '../utils';
import FormInput from '../component/FormInput';
import FormPassword from '../component/FormPassword';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = ({navigation}) => {
  const [register, setRegister] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setRegister({
      ...register,
      [inputName]: inputValue,
    });
  };
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <View>
          <Image source={require('../assets/X.png')} />
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <FormInput
            value={register.name}
            placeholderText="Name"
            name="name"
            onChangeText={value => handleInputChange('name', value)}
          />
        </View>
        {/* style={{top: 90}} */}
        <View style={styles.emailContainer}>
          <FormInput
            value={register.email}
            placeholderText="Email"
            onChangeText={value => handleInputChange('email', value)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <FormPassword
            value={register.password}
            placeholderText="Password"
            onChangeText={value => handleInputChange('password', value)}
          />
        </View>
      </View>

      <View
        style={{
          bottom: HP(100),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={require('../assets/radio.png')}
          style={{borderWidth: 2, borderColor: '#E8E8E8', left: 5}}
        />
        <View style={{width: WP(90), height: 100, left: WP(5)}}>
          <Text style={{color: 'black'}}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'BgColor',
    flex: 1,
    width: WP(90),
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: WP(13),
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
    bottom: WP(20),
    flexDirection: 'column',
    paddingBottoms: 100,
  },
  emailContainer: {
    bottom: HP(54.5),
  },
  passwordContainer: {
    bottom: HP(95.5),
  },
  buttonContainer: {
    bottom: WP(200),
    backgroundColor: '#5DB075',
    height: HP(8),
    width: WP(80),
    alignSelf: 'center',
    borderRadius: WP(35),
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
    top: HP(73),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: WP(5),
  },
});
