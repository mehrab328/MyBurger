import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-fa210.firebaseio.com/'
});

export default instance;
