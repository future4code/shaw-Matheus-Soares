import axios from 'axios'
import {baseURL} from './baseURL'

//a
//b
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };