import {isAxiosError, type AxiosInstance, AxiosError} from "axios";

// This class is responsible for handling the lower-level interactions with axios and providing
// clean input/output channels for sending or getting data.

// The responsibility of the children of this class will be to expose a clean business-friendly interface for
// sending and getting data. They will interpret the errors and provide clear exceptions that can be understood
// by the components using function calls to display the correct response.
export default class BaseApi {
    private client: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.client = axios
    }

    public async get<T>(url: string): Promise<T | AxiosError | Error>
    {
        try {
            return (await this.client.get<T>(url)).data as T;
        }
        catch (error) {
            console.error(error);

            return isAxiosError(error)
                ? error as AxiosError
                : error as Error;
        }
    }
}