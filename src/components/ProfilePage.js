import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Button, Modal, TextInput} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProfilePage = props => {
  const [userData] = useState(useSelector(state => state.usr.userData));
  console.log('tokkkeeennn', userData.token);
  const [first_name, setfirst_name] = useState(userData.first_name);
  const [last_name, setlast_name] = useState(userData.last_name);
  const [email, setemail] = useState(userData.email);
  const [mobile, setmobile] = useState(userData.mobile);
  const [height, setheight] = useState(userData.user_info.height);
  const [weight, setweight] = useState(userData.user_info.weight);

  const handleSubmitPress = async () => {
    const instance1 = axios.create({
      baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1/',
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    instance1
      .put('patients/self', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        mobile: mobile,
        user_info: {
          height: height,
          weight: weight,
        },
      })
      .then(res => {
        console.log('rsrsrrsr', res.data);
        if (res.data.status == 200) {
          alert('success');
        } else {
          alert('failed');
        }
      })
      .catch(err => {
        alert('Wrong inputs');
      });
  };
  //   console.log("toekkekekekeken",userData.token)
  //   const instance1 = axios.create({
  //     baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1',
  //     timeout: 10000,
  //     headers: {
  //         Authorization: `Bearer ${userData.token}`,
  //     },
  //   });

  //   const verify = async () => {
  //     try {
  //         // console.log("pressed")
  //         const response = await   instance1
  //         .post('/patients/verify', {
  //             verification_code: verification_code ,

  //         })
  //     .then(res => {
  //         console.log("verifeireddd successs",res)
  //     if (res.data.status == 200) {
  //         alert("success");
  //         if (res.data.data.user_info === null) {
  //                 props.navigation.replace('Signup2Screen');
  //               } else {
  //                 props.navigation.replace('BottomNav');
  //               }

  //     } else if(res.data.status == 400)  {
  //       alert("Wrong Verification Code");
  //     }
  //   }).catch(err=> {alert("Wrong Verification code")})

  // }
  //   catch (error) {
  //     console.log(error);
  //     setModalText('Something went wrong.');
  //     showModal();
  //   }
  // };

  //   const handleBookPress = async () => {
  //     props.navigation.navigate('PaymentScreen', {
  //       selectedDate: props.route.params.selectedDate,

  //     });
  //   };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../screens/auth/MATC-colored.png')}
        />
        <Text style={styles.name}>Profile Page</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={{marginTop: 40}}
          value={first_name}
          mode="outlined"
          label="First Name"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setfirst_name(val)}
          keyboardType="numeric"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />

        <TextInput
          style={{marginTop: 40}}
          value={''}
          mode="outlined"
          label="Last Name"
          value={last_name}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setlast_name(val)}
          keyboardType="numeric"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <TextInput
          style={{marginTop: 40}}
          value={mobile}
          mode="outlined"
          label="Mobile"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setmobile(val)}
          keyboardType="numeric"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <TextInput
          style={{marginTop: 40}}
          value={email}
          mode="outlined"
          label="Email"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setemail(val)}
          keyboardType="numeric"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <TextInput
          style={{marginTop: 40}}
          value={height}
          mode="outlined"
          label="Height"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setheight(val)}
          keyboardType="numeric"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <TextInput
          style={{marginTop: 40}}
          value={weight}
          mode="outlined"
          label="Weight"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setweight(val)}
          keyboardType="numeric"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <Button onPress={handleSubmitPress} style={styles.button}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </Button>
      </View>
    </ScrollView>
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
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 10,
    marginHorizontal: 40,
  },
  button: {
    marginTop: 60,
    alignSelf: 'center',
    backgroundColor: '#5bd8cc',
    width: windowWidth * 0.6,
    height: windowHeight * 0.07,
    borderRadius: 3,
    justifyContent: 'center',
  },
  disabledButton: {
    marginTop: 60,
    alignSelf: 'center',
    backgroundColor: '#cccccc',
    width: windowWidth * 0.6,
    height: windowHeight * 0.07,
    borderRadius: 3,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
  },
  docNameText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#000',
  },
});

export default ProfilePage;
