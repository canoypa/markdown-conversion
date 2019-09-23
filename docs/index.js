"use strict";
exports.__esModule = true;
var markdown_conversion_1 = require("./markdown-conversion");
var textareaChange = function (_e) {
    console.log(markdown_conversion_1["default"](textarea.value));
};
var textarea = document.getElementById('textarea');
textarea.addEventListener('input', textareaChange);
