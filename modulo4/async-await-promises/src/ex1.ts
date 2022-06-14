import axios from 'axios'
import {baseURL} from './baseURL'

//a - get
//b - 
//c
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };