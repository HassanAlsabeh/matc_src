import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Menu from './Menu/Menu';
import Spinner from 'react-native-loading-spinner-overlay';
import {Icon} from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = props => {
  const navigation = useNavigation();
  const toggleData = useSelector(state => state.togg.toggleData);
  const [spinner, setSpinner] = useState(true);
  const [userData] = useState(useSelector(state => state.usr.userData));
  const [data, setData] = useState({});
  console.log('data', toggleData && toggleData);
  // const [toggleData] = useState(useSelector(state => state.togg.toggleData));
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    const instance1 = axios.create({
      baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1',
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    const response = await instance1.get(`/patients/self`).then(res => {
      setData(res.data.data);
      setSpinner(false);
    });
  };

  return (
    <>
      <StatusBar hidden={true} />
      <Spinner
        visible={spinner}
        textContent={'Logging in...'}
        color={'#5bd8cc'}
        overlayColor={'#fff'}
        animation={'fade'}
      />
      <View style={{display: showMenu ? 'flex' : 'none'}}>
        <Menu
          handleCloseMiniCart={() => setShowMenu(false)}
          visible={showMenu}></Menu>
      </View>
      {data.organization && data.organization && toggleData && toggleData ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <IconButton
              icon="menu"
              color={'black'}
              size={25}
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                verify();
                setShowMenu(true);
              }}
            />
            <Image style={styles.logo} source={require('./MATC-colored.png')} />
            <Text style={styles.name}>
              {userData.organization &&
                userData.organization.name.toUpperCase()}
            </Text>
            <Text style={styles.welcome}>How can we take care of you?</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => navigation.navigate('OrganizationBooking')}>
              <Image style={styles.icon} source={require('./Icon-128.png')} />
              <Text style={styles.text}>SCHEDULE AN APPOINTMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => navigation.navigate('UserAppointmentsScreen')}>
              <Image
                style={[
                  styles.icon,
                  {height: windowHeight / 14, marginBottom: 5},
                ]}
                source={require('./Icon-196-2.png')}
              />
              {/* <IconButton icon="message-plus" size={40} /> */}
              <Text style={styles.text}>MY APPOINTMENTS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => navigation.navigate('Hotline')}>
              <Image style={styles.icon} source={require('./Icon-100.png')} />
              <Text style={styles.text}>HOTLINE/EMERGENCY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => navigation.navigate('SickLeave')}>
              <Image style={styles.icon} source={require('./Icon-114.png')} />
              <Text style={styles.text}>SICK LEAVE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => navigation.navigate('BlogDetailsScreen')}>
              <Image style={styles.icon} source={require('./Icon-100.png')} />
              <Text style={styles.text}>BLOGS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_container}>
              <Image style={styles.icon} source={require('./Icon-114.png')} />
              <Text style={styles.text}>HELP/SUPPORT</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <IconButton
              icon="menu"
              color={'black'}
              size={30}
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                verify();
                setShowMenu(true);
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 28, height: 28}}
                source={require('./coin.png')}
              />
              <Text style={{fontSize: 19, fontWeight: 'bold'}}>15</Text>
            </View>
            <Image style={styles.logo} source={require('./MATC-colored.png')} />
            <Text style={styles.name}>
              HELLO {userData.first_name && userData.first_name.toUpperCase()}
            </Text>
            <Text style={styles.welcome}>How can we take care of you?</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() =>
                navigation.navigate('DoctorsScreen', {isOrganization: false})
              }>
              <Image style={styles.icon} source={require('./Icon-128.png')} />
              <Text style={styles.text}>SCHEDULE AN APPOINTMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon_container}
              onPress={() => navigation.navigate('UserAppointmentsScreen')}>
              <Image
                style={[
                  styles.icon,
                  {height: windowHeight / 14, marginBottom: 5},
                ]}
                source={require('./Icon-196-2.png')}
              />
              {/* <IconButton icon="message-plus" size={40} /> */}
              <Text style={styles.text}>MY APPOINTMENTS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.icon_container}>
              <Image style={styles.icon} source={require('./Icon-100.png')} />
              <Text style={styles.text}>TREAT ME NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TimerForVideoCall')}
              style={styles.icon_container}>
              <Image style={styles.icon} source={require('./Icon-114.png')} />
              <Text style={styles.text}>NEWS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.icon_container}>
              <Image style={styles.icon} source={require('./Icon-100.png')} />
              <Text style={styles.text}>HOW CAN I HELP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_container}>
              <Image style={styles.icon} source={require('./Icon-114.png')} />
              <Text style={styles.text}>PRICING</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5bd8cc',
    width: '100%',
    height: windowHeight * 0.36,
    flexDirection: 'column',
  },
  logo: {
    resizeMode: 'contain',
    width: windowWidth * 0.3,
    height: windowHeight * 0.2,
    alignSelf: 'center',
  },
  name: {
    marginTop: -10,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  welcome: {
    marginTop: 5,
    alignSelf: 'center',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  icon: {
    padding: 10,
    width: windowWidth / 4.5,
    height: windowHeight / 13,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  icon_container: {
    width: windowWidth / 3,
    height: windowHeight / 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
