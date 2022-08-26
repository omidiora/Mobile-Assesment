import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BgColor, HP, WP} from '../utils';

const Profile = ({navigation}) => {
  const [page, setNextPage] = useState(0);

  return (
    <ScrollView contentContainerStyle={{paddingBottom: HP(30)}}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{height: WP(50)}}
      />

      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.textColor}>Settings</Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.signUpText}>Profile</Text>
        </View>
        <View style={styles.flexContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textColor}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/human.png')}
          style={{alignSelf: 'center', bottom: WP(25)}}
        />
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: WP(8),
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          Victoria Robertson
        </Text>
        <Text
          style={{
            fontSize: WP(4),
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          A mantra goes here
        </Text>
      </View>
      <View style={styles.subPageContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: page == 0 ? 'white' : '#BDBDBD',
            width: WP(40),
            padding: 14,
            height: 48,
            borderRadius: 9,
            marginLeft: WP(-18),
            position: 'absolute',
            alignSelf: 'center',
            zIndex: page == 0 ? 300 : 0,
            borderWidth: page == 0.1 ? 0 : 1,
            borderColor: page == 0 ? '#DDDDDD' : '#DDDDDD',
            bottom: WP(38),
            opacity: page == 0 ? 1 : 0.4,
          }}
          onPress={() => setNextPage(0)}>
          <Text
            style={{
              textAlign: 'center',
              color: page == 0 ? 'green' : 'rgba(0, 0, 0, 0.5)',
              fontWeight: 'bold',
            }}>
            Posts
          </Text>
        </TouchableOpacity>

        {/* Btn2 */}
        <TouchableOpacity
          onPress={() => setNextPage(1)}
          style={{
            backgroundColor: page == 1 ? 'white' : '#BDBDBD',
            width: WP(50),
            padding: 12,
            height: 50,
            borderRadius: 9,
            marginLeft: WP(17),
            borderWidth: 1,
            borderColor: '#DDDDDD',
            opacity: page == 1 ? 1 : 0.4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: page == 1 ? 'green' : 'rgba(0, 0, 0, 0.5)',
              fontWeight: 'bold',
            }}>
            Photos
          </Text>
        </TouchableOpacity>
      </View>

      {page == 0 && (
        <>
          <>
            <View style={[styles.headerContainer, {top: HP(55)}]}>
              <View>
                <Image
                  source={require('../assets/img.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.flexContainer}>
                <Text style={styles.subText2}>Header</Text>
                <Text style={styles.subText3}>
                  {
                    "He'll want to use your yacht, and I don't want this thing smelling like fish."
                  }
                </Text>
                <Image
                  source={require('../assets/Divider.png')}
                  style={{
                    width: WP(90),
                    height: HP(0.2),
                    backgroundColor: 'red',
                    color: 'red',
                    marginVertical: WP(13),
                    right: WP(22),
                    top: -20,
                  }}
                />
              </View>
              <View style={styles.flexContainer}>
                <Text
                  style={[styles.LoginText, {color: '#BDBDBD', right: HP(20)}]}>
                  8m ago
                </Text>
              </View>
            </View>
            <View style={[styles.headerContainer, {top: HP(72)}]}>
              <View>
                <Image
                  source={require('../assets/img.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.flexContainer}>
                <Text style={styles.subText2}>Header</Text>
                <Text style={styles.subText3}>
                  {
                    "He'll want to use your yacht, and I don't want this thing smelling like fish."
                  }
                </Text>
                <Image
                  source={require('../assets/Divider.png')}
                  style={{
                    width: WP(90),
                    height: HP(0.2),
                    backgroundColor: 'red',
                    color: 'red',
                    marginVertical: WP(13),
                    right: WP(22),
                    top: -20,
                  }}
                />
              </View>
              <View style={styles.flexContainer}>
                <Text
                  style={[styles.LoginText, {color: '#BDBDBD', right: HP(20)}]}>
                  8m ago
                </Text>
              </View>
            </View>
            <View style={[styles.headerContainer, {top: HP(89)}]}>
              <View>
                <Image
                  source={require('../assets/img.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.flexContainer}>
                <Text style={styles.subText2}>Header</Text>
                <Text style={styles.subText3}>
                  {
                    "He'll want to use your yacht, and I don't want this thing smelling like fish."
                  }
                </Text>
              </View>
              <View style={styles.flexContainer}>
                <Text
                  style={[styles.LoginText, {color: '#BDBDBD', right: HP(9)}]}>
                  8m ago
                </Text>
              </View>
            </View>

            {/* <View style={[styles.headerContainer, {top: HP(70)}]}>
              <View>
                <Image
                  source={require('../assets/img.png')}
                  style={styles.img}
                />
              </View>
              <View style={styles.flexContainer}>
                <Text style={styles.subText2}>Header</Text>
                <Text style={styles.subText3}>
                  {
                    "He'll want to use your yacht, and I don't want this thing smelling like fish."
                  }
                </Text>
              </View>

              <View style={styles.flexContainer}>
                <Text
                  style={[styles.LoginText, {color: '#BDBDBD', right: HP(9)}]}>
                  8m ago
                </Text>
              </View>
            </View> */}
          </>
        </>
      )}

      {page == 1 && (
        <View
          style={{
            backgroundColor: 'red',
            color: 'red',
          }}>
          <Image
            source={require('../assets/img.png')}
            style={{
              position: 'absolute',
              width: WP(80),
              height: HP(30),
              top: WP(-50),
              backgroundColor: 'lightgrey',
              color: 'red',
              left: WP(13),
              resizeMode: 'cover',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP(90),
    alignSelf: 'center',
    marginTop: WP(10),
    position: 'absolute',
    marginVertical: 10,
  },
  signUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: WP(7),
    bottom: WP(3),
  },
  subContainer: {
    alignSelf: 'center',
    bottom: WP(30),
  },
  subPageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    top: HP(-13),
    marginLeft: WP(17),
    height: WP(50),
  },
  img: {
    width: WP(15),
    height: HP(8),
    top: 2,
    paddingLeft: WP(3),
    marginHorizontal: WP(3),
    borderRadius: WP(3),
    backgroundColor: 'grey',
    opacity: 1,
  },
  subText2: {
    right: WP(1),
    width: WP(70),
    fontWeight: 'bold',
    color: 'black',
    fontSize: WP(5),
  },
  subText3: {
    right: WP(1),
    width: WP(70),
    color: 'black',
    marginVertical: WP(2),
  },
  subText4: {
    color: '#BDBDBD',
  },
  textColor: {
    color: 'white',
  },
  //  style={styles.textColor}
});
