montageDefine("ab4a48c","http-apps/status",{dependencies:["./negotiate","./html"],factory:function(e,t){var n=e("./negotiate"),r=e("./html");t.statusCodes={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Request Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",507:"Insufficient Storage"},t.statusMessages={};for(var i in t.statusCodes)t.statusMessages[t.statusCodes[i]]=+i;t.statusWithNoEntityBody=function(e){return e>=100&&199>=e||204==e||304==e},t.appForStatus=function(e){return function(n){return t.responseForStatus(n,e,n.method+" "+n.path)}},t.responseForStatus=function(e,r,i){if(void 0===t.statusCodes[r])throw"Unknown status code";var a=t.statusCodes[r];if(t.statusWithNoEntityBody(r))return{status:r,headers:{}};var o={};o["text/plain"]=t.textResponseForStatus,e.handleHtmlFragmentResponse&&(o["text/html"]=t.htmlResponseForStatus);var s=n.negotiate(e,o)||t.textResponseForStatus;return s(e,r,a,i)},t.textResponseForStatus=function(e,t,n,r){var i=n+"\n";r&&(i+=r+"\n");var a=i.length;return{status:t,statusMessage:n,headers:{"content-length":a},body:[i]}},t.htmlResponseForStatus=function(e,t,n,i){return{status:t,statusMessage:n,headers:{},htmlTitle:n,htmlFragment:{forEach:function(e){e("<h1>"+r.escapeHtml(n)+"</h1>\n"),e("<p>Status: "+t+"</p>\n"),i&&e("<pre>"+r.escapeHtml(i)+"</pre>\n")}}}},t.badRequest=t.appForStatus(400),t.notFound=t.appForStatus(404),t.methodNotAllowed=t.appForStatus(405),t.noLanguage=t.notAcceptable=t.appForStatus(406)}});