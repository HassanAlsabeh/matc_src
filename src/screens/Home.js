import React from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import Organizationhome from './MyOrganizationScreen/Organizationhome';

export default function Home({toggle}) {
console.log("ewwwwwwwwww")
  
  return <View>

      <HomeScreen/>
      <Organizationhome/>
  </View>;
}
