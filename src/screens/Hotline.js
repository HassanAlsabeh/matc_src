import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Menu2 from './Menu/Menu2';
import {Icon} from 'react-native-elements';
import TwilioChat from '../src1/TwilioChat.js';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Hotline = props => {
  const navigation = useNavigation();
//   const [userData] = useState(useSelector(state => state.usr.userData));
  const [showMenu, setShowMenu] = useState(false);
  const [userData] = useState(useSelector(state => state.usr.userData));
  return (
    <>
      <StatusBar hidden={true} />
      <View style={{display: showMenu ? 'flex' : 'none'}}>
        <Menu2
          handleCloseMiniCart={() => setShowMenu(false)}
          visible={showMenu}></Menu2>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton
            icon="menu"
            color={'black'}
            size={30}
            style={{alignSelf: 'flex-end'}}
            onPress={() => setShowMenu(true)}
          />
          <Text style={styles.name}>How can we Help you?</Text>
        </View>
        <View style={styles.column}>
        <Button style={styles.button} onPress={()=>navigation.navigate('TwilioChat')}>
          <Text style={styles.buttonText}>CHAT</Text>
        </Button>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>VIDEO CALL</Text>
        </Button>
        </View>
      
      </View>
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
  button: {
    marginTop: 60,
    alignSelf: 'center',
    backgroundColor: '#5bd8cc',
    width: windowWidth * 0.4,
    height: windowHeight * 0.07,
    borderRadius: 3,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
  },
  logo: {
    resizeMode: 'contain',
    width: windowWidth * 0.3,
    height: windowHeight * 0.2,
    alignSelf: 'center',
  },
  name: {
    marginTop:50,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  welcome: {
    marginTop: 5,
    alignSelf: 'center',
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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

export default Hotline;
