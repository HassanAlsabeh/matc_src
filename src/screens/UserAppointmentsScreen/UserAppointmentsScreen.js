import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import Menu2 from '../Menu/Menu2';
import styles from './UserAppointmentsScreen.style';
import {Icon} from 'react-native-elements';
const UserAppointmentsScreen = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [userData] = useState(useSelector(state => state.usr.userData));
  console.log('appointment user', userData.token);
  const [userAppointments, setUserAppointments] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [list, setList] = useState({});
  const instance = axios.create({
    baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get('/appointments');

        const userAppointmentsViews =
          response.data.data &&
          response.data.data.map((appointmentDay, idx) => {
          
              const appointmentList =
              
            appointmentDay.appointments &&
              appointmentDay.appointments.map((item, idx2) => {
                if(!item.is_canceled){
                return (
                  
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('TwilioVideoChat', {
                        appointmentId: item.id,
                        doctorfullname:item.doctor.full_name
                      })
                    }
                    key={idx2}
                    style={{
                      backgroundColor: '#cacccc',
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      margin: 5,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Paragraph style={{fontSize: 12}}>
                          {item.clinic && item.clinic.name
                            ? item.clinic.name
                            : 'Clinic Name'}
                        </Paragraph>
                        <Paragraph style={{fontSize: 18}}>
                          {item.timing.from} - {item.timing.to}
                        </Paragraph>
                        <Paragraph style={{fontSize: 12}}>
                          Dr.{item.doctor.full_name}
                        </Paragraph>
                      </View>
                      <View
                        style={{
                          width: '50%',
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <Image
                          style={styles.image}
                          source={{
                            uri: `${item.doctor.image_url}`,
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
              );}
              else{
                return (
                  
                  <TouchableOpacity
                  disabled={true}
                    onPress={() =>
                      navigation.navigate('TwilioVideoChat', {
                        appointmentId: item.id,
                        doctorfullname:item.doctor.full_name
                      })
                    }
                    key={idx2}
                    style={{
                      backgroundColor: '#E58B6B',
                      marginTop: 10,
                      marginBottom: 10,
                      padding: 10,
                      margin: 5,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Paragraph style={{fontSize: 12}}>
                          {item.clinic && item.clinic.name
                            ? item.clinic.name
                            : 'Clinic Name'}
                        </Paragraph>
                        <Paragraph style={{fontSize: 18}}>
                          {item.timing.from} - {item.timing.to}
                        </Paragraph>
                        <Paragraph style={{fontSize: 12}}>
                          Dr.{item.doctor.full_name}
                        </Paragraph>
                      </View>
                      <View
                        style={{
                          width: '50%',
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <Image
                          style={styles.image}
                          source={{
                            uri: `${item.doctor.image_url}`,
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
              )
              }
              });
            const date = new Date(appointmentDay.date);
            // console.log('datttettetete', appointmentDay.appointments[0]);

            return (
              <View key={idx} style={{margin: 10}}>
                <Text
                  style={{fontSize: 20, marginLeft: '5%', fontWeight: 'bold'}}>
                  {appointmentDay.date}
                  {/* {appointmentDay.date.substring(
                    0,
                    appointmentDay.date.length - 6,
                  )} */}
                </Text>
                <Card.Content>{appointmentList}</Card.Content>
              </View>
            );
          });

        setUserAppointments(userAppointmentsViews);
        setSpinner(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [userData]);

  return (
    <>
    
      <Spinner
        visible={spinner}
        textContent={'Fetching your appointments...'}
        color={'#5bd8cc'}
        overlayColor={'#fff'}
        animation={'fade'}
      />
      <View style={styles.header}>
      <TouchableOpacity
        style={{position: 'absolute', left: '0%', top: '5%', zIndex: 1}}
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
        <Image style={styles.logo} source={require('../MATC-colored.png')} />

        <Text style={styles.name}>My Appointments</Text>
      </View>
      <ScrollView>{userAppointments}</ScrollView>
    </>
  );
};

export default UserAppointmentsScreen;
