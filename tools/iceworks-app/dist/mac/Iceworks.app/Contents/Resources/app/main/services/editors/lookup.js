const{ExternalEditorError:r}=require("./shared"),{getAvailableEditors:e}=require("./darwin"),{getAvailableEditors:t}=require("./win32"),n=require("electron-is"),i=require("../../logger");let o=null;const a=async function(){return o&&o.length>0?o:n.osx()?o=await e():n.windows()?o=await t():(i.warn(`Platform not currently supported for resolving editors: ${process.platform}`),[])};exports.findEditorOrDefault=async function(e){const t=await a();if(0===t.length)throw new r("\u6ca1\u6709\u5408\u9002\u7684\u7f16\u8f91\u5668\u4f9b iceworks \u542f\u52a8\uff0c\u63a8\u8350\u5b89\u88c5 Visual Studio Code \u91cd\u542f\u540e\u5c1d\u8bd5\u3002");if(e){const n=t.find(r=>r.name===e)||null;if(!n)throw new r(`\u65e0\u6cd5\u67e5\u627e\u5230 '${e}, \u6253\u5f00\u8bbe\u7f6e\u9762\u677f\u9009\u62e9\u53ef\u7528\u7684\u7f16\u8f91\u5668\u3002`);return n}return t[0]};