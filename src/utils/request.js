import axios from 'axios';

const instance=axios.create({
  baseURL:'http://127.0.0.1:8888',
  timeout:1000
})

instance.interceptors.request.use(function(config){
  return config;
},function(error){
  return Promise.reject(error);
})

instance.interceptors.request.use(function(reponse){
  return reponse;
},function(error){
  return Promise.reject(error);
})

export default instance;
