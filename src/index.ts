import { Conversion } from './markdown-conversion';

const textareaChange = (): void => {
  const r = conversion.change(textarea.value);

  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  output.appendChild(r);
};

const textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('textarea');
const output: HTMLOutputElement = <HTMLOutputElement>document.getElementById('output');
const conversion: Conversion = new Conversion();

textarea.addEventListener('input', textareaChange);

textareaChange(); //debug
