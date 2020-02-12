import Conversion from "./markdown-conversion";

const textareaChange = (): void => {
  const r = conversion.change(textarea.value);

  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  output.appendChild(r);
};

const textarea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("textarea");
const output: HTMLOutputElement = <HTMLOutputElement>document.getElementById("output");
const conversion: Conversion = new Conversion();

conversion.register(/^(#{1,6})\s(.+)$/gm, (exec: RegExpExecArray) => {
  console.log(exec);

  const stage: number = exec[1].length;
  return `<h${stage} id="m-${exec[2]}" class="markdown-h${stage}">${exec[2]}</h${stage}>`;
});

textarea.addEventListener("input", textareaChange);

textareaChange(); //debug
