import axios from "axios";
import { useState } from "react";
import getConfiToken from "../services/getConfiToken";

const useCrud = () => {
  const [response, setResponse] = useState("");

  //read
  const getData = (url, withToken) => {
    axios
      .get(url, withToken ? getConfiToken() : {})
      .then((res) => setResponse(res.data))
      .catch((err) => {
        console.error(err);

        if (err?.response?.status === 401 || err?.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userLogged");
        }
      });
  };

  //post
  const postData = (url, data, withToken) => {
    console.log(data)
    axios
      .post(url, data, withToken ? getConfiToken() : [])
      .then((res) => {
        console.log(res.data)
        setResponse(response ? [...response, res.data] : [res.data])
      })
      .catch((err) => {
        console.error(err);

        if (err?.response?.status === 401 || err?.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userLogged");
        }
      });
  };

  //delete

  const deleteData = (url, id, withToken) => {
    axios.delete(url, withToken ? getConfiToken() : {})
    .then((res) => {
        console.log(res.data)
        setResponse(response.filter((element) => {
            return element.id !== id
        } ))
      })
      .catch((err) => {
        console.error(err);

        if (err?.response?.status === 401 || err?.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userLogged");
        }
      });
  };

  // update
  

  return [response, getData, postData, deleteData];
};

export default useCrud;
