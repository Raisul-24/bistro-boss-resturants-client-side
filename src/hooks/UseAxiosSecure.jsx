import axios from "axios";

const axiosSecure = axios.create({
   baseURL: 'http://localhost:5007'
})
const UseAxiosSecure = () => {
   return axiosSecure
};

export default UseAxiosSecure;