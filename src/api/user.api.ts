import axios from "axios";
import { configData } from "../config";

export const getAllUserListApi = async () => {

    let apiURL = configData.BACKEND_BASE_URL + configData.GET_ALL_USER;
    let userToken = sessionStorage.getItem("LASID");
    let url = userToken ? apiURL.replace(":userToken", userToken) : apiURL.replace(":userToken", "");
    let responseData = null;
    await axios
        .get(url, { withCredentials: true })
        .then((response) => {
            const { status, data } = response;
            let resultData = data

            responseData = {
                status,
                data: resultData.data ? resultData.data : resultData,
            };
        }).catch((err) => {
            responseData = {
                status: err.response.status,
                data: {},
            };
            console.log("[Error] - getAllUserListApi API error : ", err.response.status);
        });
    return responseData
};