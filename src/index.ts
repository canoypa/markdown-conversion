import { _Conversion } from './markdown-conversion';

const textareaChange = (): void => {
  const r = _conv.change(textarea.value);

  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  output.appendChild(r);
};

const textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('textarea');
const output: HTMLOutputElement = <HTMLOutputElement>document.getElementById('output');
const _conv: _Conversion = new _Conversion();

textarea.addEventListener('input', textareaChange);

textareaChange(); //debug
