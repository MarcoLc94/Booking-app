import axios from "axios"

const useAuth = () => {

    const createUser = (data) => {
      const url = "https://hotels-api.academlo.tech/users"
      axios.post(url, data)
      .then((res) => console.log(res.data))
      .catch(err => console.error(err))
    }
    
    const loginUser = (data) => {
        const url = "https://hotels-api.academlo.tech/users/login"
        axios.post(url, data)
        .then((res) => console.log(res.data))
        .catch(err => console.error(err))
      }
 
      return { createUser, loginUser}
}

export default useAuth
