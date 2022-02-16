// import axios from 'axios';

// export const getToken = (username) =>
//   axios.post(`https://demo.ucheed.com/matc/wp-json/ucheed-json/v1/twilio/token/?identity=${username}`).then((twilioUser) => console.log("tokeeeeeeeeee",twilioUser.data.jwt));


  import axios from 'axios';

export const getToken = username =>
  axios
    .post(
      `https://demo.ucheed.com/matc/wp-json/ucheed-json/v1/twilio/token/?identity=${username}`,
    ) 
    .then(twilioUser => twilioUser.data.data.token);
// const instance1 = axios.create({
//   baseURL: 'https://demo.ucheed.com/matc/wp-json/ucheed-json/v1',
//   timeout: 10000,
//   headers: {
//     Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby51Y2hlZWQuY29tXC9tYXRjIiwiaWF0IjoxNjQ0NTc4NTIzLCJuYmYiOjE2NDQ1Nzg1MjMsImV4cCI6MTY0NTE4MzMyMywiZGF0YSI6eyJ1c2VyIjp7ImlkIjo4LCJkZXZpY2UiOiIiLCJwYXNzIjoiYTc3YTMwOWQ0ZTFjZTA3ZjE0MmZlNjljYmYxNTdkMTAifX19.ADfbcFpCEzZ_DWW7rJHJQCSOMSX-OB8vc9d07XMj0eM`,
//   },
// });
//   export const getToken = (username) =>

//     const response =  instance1.get(`/token/?identity=${username}`).then((res) => console.log("hellllllll",res.data));

//   ;

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {useSelector} from 'react-redux';
// export default function (){
//    [userData] = useState(useSelector(state => state.usr.userData));
//   console.log("token",userData.token)
//   }
// export const getToken = username =>

//   axios
//     .get(`https://demo.ucheed.com/matc/wp-json/ucheed-json/v1/twilio/token/`)
//     .then(twilioUser => twilioUser.data.jwt);
