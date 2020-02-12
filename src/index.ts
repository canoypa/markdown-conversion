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

conversion.register(/^(?<stage>#{1,6})\s(?<body>.+)$/gm, (exec: RegExpExecArray) => {
  console.log(exec);

  const groups = exec.groups as { [key: string]: string };
  const stage: number = exec[1].length;
  return `<h${stage} id="m-${groups.body}" class="markdown-h${stage}">${groups.body}</h${stage}>`;
});

textarea.addEventListener("input", textareaChange);

textareaChange(); //debug
