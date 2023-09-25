import axios, { AxiosRequestConfig } from "axios";
import { getUserLocal, removeLocalItem } from "./helper";

export const contentType = (type:string) => {
    return { "Content-Type": type };
};

async function reloadToLogin() {
    await window.localStorage.clear();
    await window.location.replace("/admin/login");
}

export const METHOD = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    HEAD: "head",
    DELETE: "delete",
};

export const EContentType = {
    JSON: "application/json",
    BINARY: "multipart/form-data",
    TEXT: "plain/text",
    URLENCODED: "application/x-www-form-urlencoded",
};

const API_BASE_URL = "http://localhost:8000"

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: { Accept: EContentType.JSON, ...contentType(EContentType.JSON) },
    withCredentials: true,
});

const userLocal:any= getUserLocal();

function execApi(method:string, url:string, data:any, params:any, headers:any) {
    return API.request({
        method: method,
        url: url,
        data: data,
        params: params,
        headers: { Authorization: ` Bear ${userLocal?.access_token}`, ...headers },
    })
        .then((response) => {
            if ("access_token" in response.headers) {
                // if (getLocalItem('access_token')) {
                //     let access_token  = getLocalItem('access_token')
                //     let access_token = response.headers.get("user-token")
                //     setLocalItem('access_token' , access_token)
                // }
            }
            const result = {
                status:200,
                data: null,
                success: false,
                headers: null,
                errors: {},
            };

            try {
                result.success = Math.floor(response.status / 200) === 1;
                if (result.success) {
                    result.status = response.status;
                    result.data = response.data;
                    result.success = true;
                    result.errors = [];
                    // result.headers = response.headers;
                } else {
                    result.errors = response.data.errors ?? "ON_RESPONSE_ERROR";
                }
            } catch (e) {
                result.errors = e ?? "ON_RESPONSE_ERROR";
            }

            return result;
        })
        .catch((error) => {
            // console.log('api catch error', error);
            if (error.response && error.response.data) {
                if (Math.floor(error.response.status / 500) === 1) {
                    // message.error("SERVER ERROR. PLEASE WAIT SOME MIMUTES");
                }
                if (error.response.status === 403) {
                    // message.error("AUTHENTICATION PERMISSION DENINE");
                    if (error.response.data.error_code ==="INVALID_TOKEN_OR_EXPIRE"){
                        removeLocalItem("userToken");
                        setTimeout(reloadToLogin, 2000);
                    }
                }
                if (error.response.status === 401) {
                    removeLocalItem("userToken")
                } 
                return error.response;
            } else {
                return {
                    success: false,
                    data: null,
                    errors: "ON_FETCH_ERROR",
                    status_code: 500,
                };
            }
        });
}

export function api(method:string, url:string, data?:any, params?:any, headers?:any) {
    return execApi(method, url, data, params, headers);
}