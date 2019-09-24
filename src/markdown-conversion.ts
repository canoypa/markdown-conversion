const RegExpHeading: RegExp = new RegExp(/^(#+) (.+)/);

class _Conversion {
  constructor() {}
  change(text: string): DocumentFragment {
    const result: DocumentFragment = document.createDocumentFragment();
    const lineArray: string[] = text.split(/\n/);

    lineArray.forEach((line: string) => {
      if (RegExpHeading.test(line)) {
        const match = <RegExpExecArray>RegExpHeading.exec(line);
        const stage: number = match[1].length;

        const heading = document.createElement(`h${stage}`);
        heading.id = `m-${match[2]}`;
        heading.classList.add(`markdown-h${stage}`);
        heading.textContent = match[2];
        result.appendChild(heading);
      } else {
        const p = document.createElement('p');
        p.classList.add('markdown-body-text');
        p.textContent = line;
        result.appendChild(p);
      }
    });

    return result;
  }
}

export { _Conversion };
