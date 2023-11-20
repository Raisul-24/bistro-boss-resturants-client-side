import axios from "axios";


const axiosPublic = axios.create({
   baseURL: 'http://localhost:5007'
})
const UseAxiosPublic = () => {
   return axiosPublic
};

export default UseAxiosPublic;