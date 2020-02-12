type CallBackFunction = (exec: RegExpExecArray) => string;

class Conversion {
  private process: Array<{ regexp: RegExp; callback: CallBackFunction }> = [];

  constructor() {}

  change(text: string): DocumentFragment {
    const result: DocumentFragment = document.createDocumentFragment();

    this.process.forEach(process => {
      if (process.regexp.test(text)) {
        process.regexp.lastIndex = 0;

        let exec: RegExpExecArray | null = null;
        while ((exec = process.regexp.exec(text))) {
          const tmp = document.createElement("div");
          tmp.innerHTML = process.callback(exec);
          result.appendChild(tmp.firstChild as HTMLElement);
        }
      }
    });

    return result;
  }

  register(regexp: RegExp, callback: CallBackFunction) {
    this.process.push({ regexp, callback });
  }
}

export default Conversion;
