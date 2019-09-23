import conversion from './markdown-conversion';

const textareaChange = (_e: Event): void => {
  console.log(conversion(textarea.value));
};

const textarea = <HTMLTextAreaElement>document.getElementById('textarea');

textarea.addEventListener('input', textareaChange);
