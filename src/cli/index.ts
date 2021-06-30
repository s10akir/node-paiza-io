import PaizaIO from "../index";

export namespace CLI {
  export async function execute() {
    const paizaIO = new PaizaIO({ apiKey: "guest" });

    const runner = await paizaIO.createRunner({
      sourceCode: 'puts "HelloPaizaIo!"',
      language: "ruby",
    });

    // code running on paizaIO
    while (await runner.checkRunning()) {
      // sleep 1000ms
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // result
    const details = await runner.getDetails();
    console.log(details.stdout.trim());
  }
}

export default CLI;
