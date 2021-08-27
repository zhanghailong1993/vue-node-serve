import http from '../plugins/http'

const createAdmin = (data) => http.post('rest/admin_users', data).then(({ data }) => data)

const getUserList = () => http.get('rest/admin_users').then(({ data }) => data)

const deleteUser = (data) => http.delete(`rest/admin_users/${data.id}`).then(({ data }) => data)

const createCategoy = (data) => http.post('rest/categories', data).then(({ data }) => data)

const getParents = () => http.get('rest/categories').then(({ data}) => data)

const getCateGoryList = () => http.get('rest/categories').then(({ data }) => data)

export default {
  createAdmin,
  deleteUser,
  getUserList,
  createCategoy,
  getParents,
  getCateGoryList
}