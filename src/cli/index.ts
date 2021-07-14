import cac from "cac";

import PaizaIO from "../index";
import { LANGUAGES } from "./constants";
import { Language } from "../types";

export namespace CLI {
  export async function execute() {
    const cli = cac("paiza-io");

    cli
      .command("run <language> <sourceCode>", "Run your code on paizaIO")
      .action(async (language, sourceCode) => {
        const paizaIO = new PaizaIO({
          apiKey: process.env.PAIZA_IO_API_KEY || "guest",
        });

        if (!LANGUAGES.includes(language)) {
          console.error(`'${language}' is not avaliable language in paizaIO.
Please run command to see what's avaliable.

$ paiza-io languages`);
          process.exit(1);
        }

        const runner = await paizaIO.createRunner({
          language: language as Language,
          sourceCode: sourceCode as string,
        });

        while (await runner.checkRunning()) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        const details = await runner.getDetails();
        console.log(details.stdout.trim());
      });

    // $ paiza-io languages
    cli.command("languages", "Show list of languages").action(() => {
      console.log(["Can use any of these languages on paizaIO", ""].join("\n"));
    });

    cli.help();

    const parsed = cli.parse();
    // コマンドが存在しなかった場合にhelpを出す
    if (!cli.matchedCommand && !parsed.options.help) cli.outputHelp();
  }
}

export default CLI;
