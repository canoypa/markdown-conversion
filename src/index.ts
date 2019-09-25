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

conversion.register(/^(#{1,6})\s(.+)$/gm, (exec: RegExpExecArray) => {
  const stage: number = exec[1].length;
  const heading = document.createElement(`h${stage}`);

  heading.id = `m-${exec[2]}`;
  heading.classList.add(`markdown-h${stage}`);
  heading.textContent = exec[2];

  return heading;
});

textarea.addEventListener('input', textareaChange);

textareaChange(); //debug
