import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-88892.firebaseio.com/'
});

export default instance;