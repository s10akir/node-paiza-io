import Greet from "../index";

export namespace CLI {
  export function execute(target: string) {
    console.log(Greet(target));
  }
}

export default CLI;
