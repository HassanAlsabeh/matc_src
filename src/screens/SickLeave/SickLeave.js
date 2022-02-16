import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, Modal, TextInput} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import {Icon} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SickLeave = props => {
    const navigation = useNavigation();
  const [userData] = useState(useSelector(state => state.usr.userData));
  const [fullname, setfullname] = useState('');
  const [organization, setorganization] = useState('');
  const [medicalreason, setmedicalreason] = useState('');
  const [rejectionreason, setrejectionreason] = useState('');
  const [height, setHeight] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [document, setDocument] = useState('');
  //   console.log('document', document);
  const instance1 = axios.create({
    baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  });
  //   useEffect(() => {
  //     console.log('data of date and time_id', props.route.params);
  //   }, []);

  //   const appointment_info = new FormData();
  //   appointment_info.append('date', props.route.params.selectedDate);
  //   appointment_info.append('timing_id', props.route.params.timeId);
  //   appointment_info.append('appointment_info[height]', height);
  //   appointment_info.append('appointment_info[weight]', weight);
  //   appointment_info.append('attatchment',document);
  //   async function addappointment() {
  //     instance1.post('/appointments', appointment_info).then(res => {
  //       if (res.status == 200) {
  //         alert('Appointment Added');
  //       } else if (res.status == 500) {
  //         alert('wrong issue');
  //       }
  //     });
  //   }
  //   const handleDocumentPress = async () => {
  //     try {
  //       const res = await DocumentPicker.pick({
  //         type: [
  //           DocumentPicker.types.doc,
  //           DocumentPicker.types.docx,
  //           DocumentPicker.types.images,
  //           DocumentPicker.types.pdf,
  //         ],
  //       });
  // console.log("uri",res[0])
  //       setDocument(res[0]);
  //     } catch (err) {
  //       if (DocumentPicker.isCancel(err)) {
  //         // User cancelled the picker, exit any dialogs or menus and move on
  //       } else {
  //         throw err;
  //       }
  //     }
  //   };

  //   const handleBookPress = async () => {
  //     props.navigation.navigate('UserAppointmentsScreen');
  //   };

  return (
    <>
      <View style={styles.header}>
      <TouchableOpacity
        style={{position: 'absolute', left: '0%', top: '3%', zIndex: 1}}
        onPress={() => {
      navigation.goBack()
          // setProps(initialState);
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
        <Text style={styles.name}>Sick Leave</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput
          value={fullname}
          mode="outlined"
          label="Full Name"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setfullname(val)}
          keyboardType="default"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <TextInput
          style={{marginTop: 40}}
          value={organization}
          mode="outlined"
          label="Organization"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setorganization(val)}
          keyboardType="default"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />
        <TextInput
           multiline={true}
           numberOfLines={3}
          style={{marginTop: 40}}
          value={medicalreason}
          mode="outlined"
          label="Medical Reason"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setmedicalreason(val)}
          keyboardType="default"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />

        <DatePicker
          style={{
            width: '100%',
            marginTop: 40,
            borderRadius: 1,
            borderWidth: 2,
            borderColor: '#5bd8cc',
          }}
          date={from}
          placeholder="Select Date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          value={from}
          onDateChange={d => setFrom(d)}
        />
        <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
          Till
        </Text>
        <DatePicker
          style={{
            width: '100%',
            marginTop: 20,
            borderRadius: 1,
            borderWidth: 2,
            borderColor: '#5bd8cc',
          }}
          date={to}
          placeholder="Select Date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          value={to}
          onDateChange={d => setTo(d)}
        />

        <TextInput
          multiline={true}
          numberOfLines={5}
          style={{marginTop: 40}}
          value={rejectionreason}
          mode="outlined"
          label="Reason for Rejection (optional)"
          selectionColor={'#5bd8cc'}
          underlineColor={'#5bd8cc'}
          activeUnderlineColor={'#5bd8cc'}
          outlineColor={'#5bd8cc'}
          activeOutlineColor={'#5bd8cc'}
          onChangeText={val => setrejectionreason(val)}
          keyboardType="default"
          theme={{
            colors: {
              placeholder: '#cccccc',
              primary: '#5bd8cc',
            },
          }}
        />

        <Text style={styles.docNameText}>{document.name}</Text>
        <Button
            onPress={() => {
         alert("okaayyyy")
            }}
          style={styles.button}
          style={!fullname || !organization || !medicalreason || !from || !to ? styles.disabledButton : styles.button}
          disabled={!fullname || !organization || !medicalreason || !from || !to}>
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </ScrollView>
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
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 10,
    marginHorizontal: 30,
  },
  button: {
    margin: 30,
    alignSelf: 'center',
    backgroundColor: '#5bd8cc',
    width: windowWidth * 0.6,
    height: windowHeight * 0.07,
    borderRadius: 3,
    justifyContent: 'center',
  },
  disabledButton: {
    margin: 30,
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

export default SickLeave;
