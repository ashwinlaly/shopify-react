import axios from 'axios';

const baseURL = 'http://localhost:5000/social-app-aa2c4/asia-northeast1/api/';

const request = {
    get : url => {
        return axios.get(`${baseURL}${url}`).then(res => {
            return res;
        }).catch( err => {
            console.log(err);
        });
    },
    post : (url, data) => {
        return axios.post(`${baseURL}${url}`, data).then( res => {
            return res;
        }).catch( err => {
            console.log(err);
        });
    },
    put : (url, data) => {
        return axios.put(`${baseURL}${url}`, data).then( res => {
            return res;
        }).catch( err => {
            console.log(err);
        });
    },
    patch : (url, data) => {
        return axios.patch(`${baseURL}${url}`,data).then( res => {
            return res
        }).catch( err => {
            console.log(err);
        });
    },
    delete : url => {
        return axios.delete(`${baseURL}${url}`).then( res => {
            return res;
        }).catch( err => {
            console.log(err);
        });
    }
}

const Auth = {
    signin : (data) => 
        request.post('signin',data).then( res => res.data ),
    signup : (data) =>
        request.post('signup',data).then( res => res.data )
}

export default {
    Auth
};