import axios from '@/utils/axios'

export default {
  login(data: { username: string; password: string }): Promise<Object> {
    return axios.request({ url: '/api', method: 'POST', data })
  },
}
