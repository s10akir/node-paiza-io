/**
 * paizaIOの対応言語
 * https://paiza.io/help?locale=ja-jp
 * last update: 2021-06-30
 */
export type Language =
  | "java"
  | "php"
  | "ruby"
  | "python"
  | "perl"
  | "c"
  | "cpp"
  | "csharp"
  | "javascript"
  | "objective-c"
  | "scala"
  | "go"
  | "haskell"
  | "coffeescript"
  | "bash"
  | "erlang"
  | "r"
  | "cobol"
  | "vb"
  | "fsharp"
  | "python3"
  | "clojure"
  | "d"
  | "swift"
  | "kotlin"
  | "elixir"
  | "rust"
  | "scheme"
  | "nadesiko"
  | "typescript"
  | "mysql"
  | "commonlisp"
  | "plain";

/**
 * runner/get_detailsの返す内容
 */
export type RunnerDetail = {
  id: string;
  language: Language;
  note: string;
  status: "running" | "completed";
  buildStdout: string;
  buildStderr: string;
  buildExitCode: number;
  buildTime: number;
  buildMemory: number;
  buildResult: "success" | "failure" | "error";
  stdout: string;
  stderr: string;
  exitCode: number;
  time: number;
  memory: number;
  result: "success" | "failure" | "error";
};
