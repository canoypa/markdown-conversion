class Conversion {
  private process: Array<{ regexp: RegExp; callback: Function }> = [];

  constructor() {}

  change(text: string): DocumentFragment {
    const result: DocumentFragment = document.createDocumentFragment();

    this.process.forEach(process => {
      if (process.regexp.test(text)) {
        process.regexp.lastIndex = 0;

        let exec: RegExpExecArray | null = null;
        while ((exec = process.regexp.exec(text))) {
          console.log(exec);
          result.appendChild(process.callback(exec));
        }
      }
    });

    return result;
  }

  register(regexp: RegExp, callback: Function) {
    this.process.push({ regexp, callback });
  }
}

export default Conversion;
