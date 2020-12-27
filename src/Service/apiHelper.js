// import axios from 'axios';

// export function getAPI(url, params) {

//   // fetch(`${url}?${params}`)
//   //   .then(response => response.json())
//   //   .then(data => data)
//   //   .catch(err => {throw err;});

//   axios
//     .get(`${url}?${params}`)
//     .then((response) => {
//       console.log('response ', response)
//       return response;
//     })
//     .catch((error) => {
//       throw error;
//     });

// } 

import Axios from 'axios';

const callApiHelper = (url, params, requestMethod, requestBody, headers) => {
    const axiosInstance = Axios.create({
      
        baseURL: url,
    });

    switch (requestMethod) {
        case 'GET':
            return axiosInstance
                .get(url, { params })
                .then((response) => response)
                .catch((error) => {
                    throw error;
                });
        case 'POST':
            return axiosInstance
                .post(url, requestBody)
                .then((response) => response)
                .catch((error) => {
                    throw error;
                });
        case 'PUT':
            return axiosInstance
                .put(url, requestBody)
                .then((response) => response)
                .catch((error) => {
                    throw error;
                });
        case 'DELETE':
            return axiosInstance
                .delete(url)
                .then((response) => response)
                .catch((error) => {
                    throw error;
                });

        default:
            return '';
    }
};



export default callApiHelper;
