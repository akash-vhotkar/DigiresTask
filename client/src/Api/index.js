import axios from 'axios'
const API=  axios.create({baseURL: "http://localhost:5000"})
API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      }
      return req;
})

export const login  =  (formdata)=> API.post('/auth/login', formdata);
export const loginagain = (token)=> API.post('/verifytoken', {token});
export const register = (formdata)=> API.post('/auth/register', formdata);
export const createrecord = (formdata)=> API.post('/dashboard/createrecord', formdata);
export const getrecords = ()=> API.get('/dashboard/getrecords');
export const createanalysis = (data)=> API.post('/analysis/analysisrecord', data)