import axios from "axios";
const baseUrl = '/api/login'
const baseUrlJWT = '/api/login/JWT'


const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}
const checkJWT = async (user, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    return await axios.post(baseUrlJWT, user, config)
}
export { login, checkJWT }