import axios, { AxiosResponse } from "axios";

export interface BaseIrisResponse<T> {
    status: string;
    message: string;
    data: T[];
}

export const callApi = async <T>(url: string, method: string, params: object, body: object): Promise<BaseIrisResponse<T>> => {
    try {
        const apiKey = getApiKey();
        const response: AxiosResponse<BaseIrisResponse<T>> = await axios({
            method: method,
            url: url,
            params: params,
            data: body,
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })

        return response.data;
    } catch (err: any) {
        if (err.response) {
            return err.response.data;
        }
        else {
            return {
                status: 'error',
                message: err.message,
                data: [],
            }
        }
    }
}

const getApiKey = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error('Missing API key');
    }
    return apiKey;
}
