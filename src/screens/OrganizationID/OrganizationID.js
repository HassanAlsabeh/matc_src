import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Menu2 from '../Menu/Menu2';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
export default function OrganizationID({navigation}) {
  const [showMenu, setShowMenu] = useState(false);
  const [userData] = useState(useSelector(state => state.usr.userData));
  // console.log("ussssssssseeerrr",userData)
  return (
    <>
      <TouchableOpacity
        style={{position: 'absolute', left: '0%', top: '3%', zIndex: 1}}
        onPress={() => {
          navigation.goBack(); // setProps(initialState);
        }}>
        <Icon
          name="arrow-back"
          type="FontAwsome"
          color="#111"
          size={30}
          width={60}
          // zIndex={2}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginTop: '80%'}}>
        <Text style={{fontSize: 20, marginBottom: 20}}>Your Code :</Text>
        <Text
          selectable
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            backgroundColor: '#5bd8cc',
          }}>
          {userData.join_organization_code}
        </Text>
      </View>
    </>
  );
}
