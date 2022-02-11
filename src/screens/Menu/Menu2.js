import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import styles from './Menu.style';
import * as actionTypes from '../../store/actions';
import axios from 'axios';
import LoginScreen from '../auth/LoginScreen';
function Menu2(props) {
  const navigation = useNavigation();
  // const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleData = useSelector(state => state.togg.toggleData);
  //   const [isSwitchOn, setIsSwitchOn] = React.useState(toggleData);

  //   const [userData] = useState(useSelector(state => state.usr.userData));
  //   // console.log('verifeireddd successs', userData);
  //   const [data, setData] = useState({});
  //   props.storetoggledata(isSwitchOn);
  //   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  //   // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (err) {
      console.log(err);
    }
  };

  // const togglesave =  () => {
  //   const instance2 = axios.create({
  //     baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1/',
  //     timeout: 10000,
  //     headers: {
  //       Authorization: `Bearer ${userData.token}`,
  //     },
  //   });

  //    instance2
  //     .put('patients/self', {
  //       user_info:{
  //       // toggle:toggleData.toString(),
  //      }
  //     })
  //     .then(response => {

  //       console.log("ewwww",response.data.data)
  //     });
  //   //   }
  //   useEffect(() => {
  //     verify();
  //     // togglesave();
  //   }, []);

  // const switchhandler = () => {
  //   if (isSwitchOn == true) {
  //     props.handleCloseMiniCart();
  //     navigation.navigate('BottomNav');
  //     setIsSwitchOn(!isSwitchOn);
  //   } else {
  //     props.handleCloseMiniCart();
  //     navigation.navigate('BottomNavOrganization');
  //     setIsSwitchOn(!isSwitchOn);
  //   }
  // };
  //   const verify = async () => {
  //     const instance1 = axios.create({
  //       baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1',
  //       timeout: 10000,
  //       headers: {
  //         Authorization: `Bearer ${userData.token}`,
  //       },
  //     });
  //     const response = await instance1.get(`/patients/self`).then(res => {
  //       setData(res.data.data);
  //       // console.log('verifeireddd successs', res.data);
  //     });
  //   };
  return (
    <View style={{height: '100%', width: '100%'}}>
      <IconButton
        icon="menu"
        color={'black'}
        size={30}
        style={{alignSelf: 'flex-end'}}
        onPress={() => {
          props.handleCloseMiniCart();
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          margin: 40,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomNav');
            props.handleCloseMiniCart();
          }}>
          <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.handleCloseMiniCart();
            navigation.navigate('ProfilePage');
          }}>
          <Text style={styles.menuItem}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.handleCloseMiniCart();
            navigation.navigate('OrganizationID');
          }}>
          <Text style={styles.menuItem}>Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.handleCloseMiniCart();
            // props.clearUserData();
            navigation.navigate('LoginScreen');
            logoutUser();
          }}>
          <Text style={styles.menuItem}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     storetoggledata: toggleData =>
//       dispatch({
//         type: actionTypes.STORE_TOGGLE,
//         toggleData,
//       }),
//     storeUserData: userData =>
//       dispatch({
//         type: actionTypes.STORE_USER_DATA,
//         userData,
//       }),
//   };
// };

export default Menu2;
