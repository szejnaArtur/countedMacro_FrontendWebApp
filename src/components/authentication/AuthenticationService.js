import axios from 'axios';

import {API_URL} from "../../Constans";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {

    createJwtToken(token){
        return 'Bearer ' + token;
    }

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/api/login`, {
            username,
            password
        });
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token;
                }
                return config;
            }
        )
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return user !== null;
    }
}

export default new AuthenticationService();