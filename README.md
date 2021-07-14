# node-paiza-io

paizaIO を JavaScript/TypeScript 開発で利用するためのライブラリ && CLI ツール

## usage

### typescript

```bash
$ yarn add @s10akir/node-paiza-io
```

```typescript
import PaizaIO from "@s10akir/node-paiza-io";

const paizaIO = new PaizaIO({
  apiKey: process.env.PAIZA_IO_API_KEY || "guest",
});

(async () => {
  const runner = await paizaIO.createRunner({
    language: "typescript",
    sourceCode: 'console.log("Hello PaizaIO!");',
  });

  while (await runner.checkRunning()) {
    // sleep 1000ms
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const details = await runner.getDetails();
  console.log(details.stdout.trim());
})();
```

### CLI

```bash
$ npm i -g @s10akir/node-paiza-io
```

```bash
$ paiza-io run typescript 'console.log("Hello PaizaIO!");'
Hello PaizaIO!
```
