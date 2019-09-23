const conversion = (text: string): DocumentFragment => {
  const result: DocumentFragment = document.createDocumentFragment();
  const lineArray: string[] = text.split(/\n/);

  lineArray.forEach((line: string) => {
    if (/^# (.+)/.test(line)) {
      const h1Match = <RegExpExecArray>/^# (.+)/.exec(line);

      const h1 = document.createElement('h1');
      h1.classList.add('markdown-h1');
      h1.textContent = h1Match[1];
      result.appendChild(h1);
    } else {
      const div = document.createElement('div');
      div.textContent = line;
      result.appendChild(div);
    }
  });

  return result;
};

export default conversion;
