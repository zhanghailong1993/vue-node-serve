import http from '../plugins/http'

const createAdmin = (data) => http.post('rest/admin_users', data).then(({ data }) => data)

const getUserList = () => http.get('rest/admin_users').then(({ data }) => data)

export default {
  createAdmin,
  getUserList
}