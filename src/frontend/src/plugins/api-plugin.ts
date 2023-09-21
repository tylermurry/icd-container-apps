import axios from 'axios'
import type {App} from 'vue'
import QuoteApi from "@/services/quote.api";

export type Api = {
    quote: QuoteApi
}

interface ApiOptions {
    baseUrl?: string
}

export default {
    install: async (app: App, options: ApiOptions) => {
        app.config.globalProperties.$axios = axios.create({ baseURL: options.baseUrl });
        app.config.globalProperties.$api = {
            quote: new QuoteApi(app.config.globalProperties.$axios),
        } as Api;
    },
};