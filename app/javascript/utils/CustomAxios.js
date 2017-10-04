import Axios from 'axios'

const CustomAxios = Axios.create({
  baseURL: '/api/v1/',
  timeout: 10000
})

export default CustomAxios