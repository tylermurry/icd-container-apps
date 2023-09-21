/// <reference types="vite/client" />
import type {AxiosInstance} from "axios";
import type {Api} from "@/plugins/api-plugin";

export {}

// This is here to ensure that the global properties are defined as a type.
// Otherwise, vue will not recognize it as a variable: https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
declare module 'vue' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
        $api: Api;
    }
}