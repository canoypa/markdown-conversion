import conversion from './markdown-conversion';

const textareaChange = (): void => {
  const r = conversion(textarea.value);
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  output.appendChild(r);
};

const textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('textarea');
const output: HTMLOutputElement = <HTMLOutputElement>document.getElementById('output');

textarea.addEventListener('input', textareaChange);

textareaChange(); //debug
