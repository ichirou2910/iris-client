import axios, { AxiosResponse } from "axios";

export interface BaseIrisResponse<T> {
    status: string;
    message: string;
    data: T[];
}

export const callApi = async <T>(url: string, method: string, params: object, body: object): Promise<BaseIrisResponse<T>> => {
    const apiKey = getApiKey();
    try {
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
        return err.response;
    }
}

const getApiKey = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error('Missing API key');
    }
    return apiKey;
}
