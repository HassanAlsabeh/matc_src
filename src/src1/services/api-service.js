import axios from 'axios';

export const getToken = (username) =>
  axios.get(`http://10.0.2.2:3001/token/${username}`).then((twilioUser) => twilioUser.data.jwt);
