/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {View, Image, ImageBackground} from 'react-native';
import HomeScreen from './HomeScreen';
import {useSelector} from 'react-redux';
import MyHealthScreen from './MyHealthScreen/MyHealthScreen';
import BlogDetailsScreen from './blog/BlogDetailsScreen';
const HomeScreenRoute = toggle => <HomeScreen toggle={toggle} />;
const MyHealthRoute = () => <MyHealthScreen />;
const News = () => <BlogDetailsScreen />;
const BottomNav = ({route}) => {
  const toggle = route.params && route.params.toggle;
  // console.log('toggle', toggle);
  const [userData] = useState(useSelector(state => state.usr.userData));
  const exists = userData.organization;
  // const [exists,setExists] = useState ({userData.organization});
  // const exists =
  // console.log('exissss', exists);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      toggle: {toggle},
      key: 'home',
      title: 'HOME',
      icon: 'home-outline',
      function: HomeScreen,
    },
    {
      key: 'myHealth',
      title: 'MY HEALTH',
      icon: 'clipboard-pulse-outline',
      function: MyHealthRoute,
    },

    {
      key: 'news',
      title: 'News',
      icon: 'newspaper',
      function: News,
    },
  ]);
  // : React.useState([
  //     {
  //       key: 'home',
  //       title: 'HOME',
  //       icon: 'home-outline',
  //       function: HomeScreen,
  //     },
  //     {
  //       key: 'myHealth',
  //       title: 'MY HEALTH',
  //       icon: 'clipboard-pulse-outline',
  //       function: MyHealthRoute,
  //     },
  //     {
  //       key: 'news',
  //       title: 'News',
  //       icon: 'newspaper',
  //       function: News,
  //     },
  //   ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreenRoute,
    toggle: toggle,
    myHealth: MyHealthRoute,
    news: News,
  });

  return (
    <BottomNavigation
      shifting={false}
      sceneAnimationEnabled={true}
      inactiveColor="#77787b"
      activeColor="#5bd8cc"
      barStyle={{backgroundColor: 'white', paddingBottom: 20}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
