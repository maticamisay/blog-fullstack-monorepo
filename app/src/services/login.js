import axios from "axios";
const baseUrl = 'http://localhost:3001/api/login'
const baseUrlJWT = 'http://localhost:3001/api/login/JWT'


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
export default { login, checkJWT }