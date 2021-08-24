import http from '../plugins/http'

const createAdmin = (data) => http.post('rest/admin_users', data).then(({ data }) => data)

export default {
  createAdmin
}