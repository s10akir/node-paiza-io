import axios from "axios";
import { BASE_URL } from "../constants";
import { RunnerDetail } from "../types";

export class Runner {
  id: string;
  apiKey: string;
  completed = false;

  constructor(args: { id: string; apiKey: string }) {
    this.id = args.id;
    this.apiKey = args.apiKey;
  }

  async checkRunning(): Promise<boolean> {
    return (await this.getStatus()) === "running";
  }

  async checkCompleted(): Promise<boolean> {
    return (await this.getStatus()) === "completed";
  }

  async getStatus(): Promise<"running" | "completed"> {
    const url = `${BASE_URL}/runners/get_status`;
    const res = await axios.get(url, {
      params: { id: this.id, api_key: this.apiKey },
    });

    return res.data.status;
  }

  async getDetails(): Promise<RunnerDetail> {
    const url = `${BASE_URL}/runners/get_details`;
    const res = await axios.get(url, {
      params: { id: this.id, api_key: this.apiKey },
    });

    return {
      id: res.data.id,
      language: res.data.language,
      note: res.data.note,
      status: res.data.status,
      buildStdout: res.data.build_stdout,
      buildStderr: res.data.build_stderr,
      buildExitCode: res.data.build_exit_code,
      buildTime: res.data.build_time,
      buildMemory: res.data.build_memory,
      buildResult: res.data.build_result,
      stdout: res.data.stdout,
      stderr: res.data.stderr,
      exitCode: res.data.exit_code,
      time: res.data.time,
      memory: res.data.memory,
      result: res.data.result,
    };
  }
}
