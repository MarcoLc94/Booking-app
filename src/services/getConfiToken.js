

const getConfiToken = () => {
  return {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  }
}

export default getConfiToken