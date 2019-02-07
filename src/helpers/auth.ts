import axios from 'axios';

export function registerUser(credentials: any) {
    return new Promise((res, rej) => {
        axios.post('https://www.pagebuilder.ultrabold.de/api/auth/register', credentials)
            .then((response: any) => {
                res(response.data);
            })
            .catch((err: any) => {
                rej('An error occured.. try again later.')
            })
    })
}

export function login(credentials: any) {
     let header: any ={
         'Access-Control-Allow-Origin': '*',
     };


    return new Promise((res, rej) => {
        axios.post('https://www.pagebuilder.ultrabold.de/api/auth/login', credentials, header)
            .then((response: any) => {
                res(response.data);
            })
            .catch((err: any) => {
                rej('Wrong Email/Password combination.')
            })
    })
}

export function getLoggedinUser() {
    const userStr = localStorage.getItem('user');

    if (!userStr) {
        return null
    }

    return JSON.parse(userStr);
}
