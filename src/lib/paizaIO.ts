import axios from "axios";
import { BASE_URL } from "../constants";
import { Language } from "../types";
import { Runner } from "./runner";

export class PaizaIO {
  apiKey: string;

  constructor(args: { apiKey: string }) {
    this.apiKey = args.apiKey;
  }

  async createRunner(args: {
    sourceCode: string;
    language: Language;
    input?: string;
    longpoll?: boolean;
    lonpollTimeout?: number;
  }): Promise<Runner> {
    const url = `${BASE_URL}/runners/create`;
    const res = await axios.post(url, {
      api_key: this.apiKey,
      source_code: args.sourceCode,
      language: args.language,
      input: args.input,
      longpoll: args.longpoll,
      longpoll_timeout: args.lonpollTimeout,
    });

    return new Runner({ id: res.data.id, apiKey: this.apiKey });
  }
}
