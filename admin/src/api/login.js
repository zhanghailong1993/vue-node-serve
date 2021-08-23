import http from '../plugins/http'

const login = (data) => http.post('login', data).then(({ data }) => data)

export default {
  login
}