<h1 align="center">Welcome to @s10akir/node-paiza-io 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/s10akir/node-paiza-io#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/s10akir/node-paiza-io/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/s10akir/node-paiza-io/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/s10akir/node-paiza-io" />
  </a>
</p>

> paizaIO を Node.js プロジェクトから簡単に利用できるようにする API ラッパーとその CLI ツール

### 🏠 [paizaIO](https://paiza.io)

## Install

```sh
# Install
$ npm install -g @s10akir/node-paiza-io
```

## Getting Started

### CLI

```sh
$ paiza-io run typescript 'console.log("Hello PaizaIO!");'
# Hello PaizaIO!

# Or without install
$ npx @s10akir/node-paiza-io run typescript 'console.log("Hello PaizaIO!");'
```

For more advanced usage, see `paiza-io --help`.

### In Your Project

```
npm install --save-dev @s10akir/node-paiza-io

```

```javascript
const PaizaIO = require("@s10akir/node-paiza-io");

const paizaIO = new PaizaIO({
  apiKey: process.env.PAIZA_IO_API_KEY || "guest",
});

(async () => {
  const runner = await paizaIO.createRunner({
    language: "ruby",
    sourceCode: "puts 'Hello PaizaIO!'",
  });

  while (await runner.checkRunning()) {
    // sleep 1000ms
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const details = await runner.getDetails();

  // build error
  if (details.buildResult && details.buildResult !== "success") {
    console.error("[!] build error");

    if (details.buildStdout)
      console.error(`buildStdout: ${details.buildStdout.trim()}`);
    if (details.buildStderr)
      console.error(`buildStderr: ${details.buildStderr.trim()}`);
    return;
  }

  // runtime error
  if (details.result !== "success") {
    console.error("[!] runtime error");
    if (details.stdout) console.error(`stdout: ${details.stdout.trim()}`);
    if (details.stderr) console.error(`stderr: ${details.stderr.trim()}`);
    return;
  }

  console.log(details.stdout.trim());
})();
```

## Author

👤 **Akira Shinohara <akira.shinohara@mojamoja.cloud>**

- Github: [@s10akir](https://github.com/s10akir)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/s10akir/node-paiza-io/issues). You can also take a look at the [contributing guide](#TODO).

## 📝 License

Copyright © 2021 [Akira Shinohara <akira.shinohara@mojamoja.cloud>](https://github.com/s10akir).<br />
This project is [MIT](https://github.com/s10akir/node-paiza-io/blob/main/LICENSE) licensed.
