import Conversion from './markdown-conversion';

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
  const a = document.createElement('a');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  heading.id = `m-${exec[2]}`;
  heading.classList.add(`markdown-h${stage}`);
  heading.textContent = exec[2];

  a.classList.add('markdown-anchor');
  a.href = `#m-${exec[2]}`;

  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');

  path.setAttribute(
    'd',
    'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'
  );

  svg.appendChild(path);
  a.appendChild(svg);
  heading.appendChild(a);

  return heading;
});

textarea.addEventListener('input', textareaChange);

textareaChange(); //debug
