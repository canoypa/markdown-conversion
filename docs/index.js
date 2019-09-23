import conversion from './markdown-conversion';
var textareaChange = function (_e) {
    console.log(conversion(textarea.value));
};
var textarea = document.getElementById('textarea');
textarea.addEventListener('input', textareaChange);
