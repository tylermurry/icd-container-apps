import BaseApi from "@/services/base.api";
import {AxiosError} from "axios";

export class UnknownQuoteServiceError extends AxiosError { }

export default class QuoteApi extends BaseApi {
    public async getRandomQuote(): Promise<Quote>
    {
        const response = await this.get<Quote>('/random-quote');

        if (response instanceof AxiosError || response instanceof Error) {
            throw new UnknownQuoteServiceError();
        }
        else {
            return response as Quote;
        }
    }
}
