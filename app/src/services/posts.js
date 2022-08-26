import axios from "axios";
const baseUrl = '/api/posts'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}
const create = (newObject,  {token} ) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.post(baseUrl, newObject, config)
    return request.then(res => res.data)
}
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(res => res.data)
}

export default { getAll, create, update }