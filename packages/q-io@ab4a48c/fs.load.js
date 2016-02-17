montageDefine("ab4a48c","fs",{dependencies:["fs","q","./reader","./writer","./fs-common","./fs-mock","./fs-root"],factory:function(e,t){function n(e,t){var n=function(){var r=arguments,a=u?i.delay(u):i.resolve();return a.then(function(){return i.when(e.apply(t,r),function(e){return u=Math.max(0,u-1),e},function(e){if("EMFILE"===e.code)return u=(u+1)*h,n.apply(null,r);throw e})})};return n}var r=e("fs"),i=e("q"),a=e("./reader"),s=e("./writer"),o=e("./fs-common"),l=e("./fs-mock"),c=e("./fs-root");o.update(t,process.cwd),t.Mock=l,t.Root=c;var u=0,h=1.0001;t.open=n(function(e,t,n,i){"object"==typeof t&&(i=t,t=i.flags,n=i.charset),i=i||{},t=t||"r";var o=t.replace(/b/g,"")||"r",l={flags:o};if("bufferSize"in i&&(l.bufferSize=i.bufferSize),"mode"in i&&(l.mode=i.mode),"begin"in i&&(l.start=i.begin,l.end=i.end-1),t.indexOf("b")>=0){if(n)throw Error("Can't open a binary file with a charset: "+n)}else n=n||"utf-8";if(t.indexOf("w")>=0||t.indexOf("a")>=0){var c=r.createWriteStream(e+"",l);return s(c,n)}var c=r.createReadStream(e+"",l);return a(c,n)}),t.remove=function(e){e+="";var t=i.defer();return r.unlink(e,function(n){n?(n.message="Can't remove "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve()}),t.promise},t.rename=function(e,t){return e+="",t+="",i.ninvoke(r,"rename",e,t).fail(function(n){throw"EXDEV"===n.code&&(n.message="source and target are on different devices: "+n.message,n.crossDevice=!0),n.message="Can't move "+JSON.stringify(e)+" to "+JSON.stringify(t)+" because "+n.message,n})},t.makeDirectory=function(e,t){e+="";var n=i.defer();return"string"==typeof t?t=parseInt(t,8):void 0===t&&(t=parseInt("755",8)),r.mkdir(e,t,function(r){r?("EISDIR"===r.code&&(r.exists=!0,r.isDirectory=!0,r.message="directory already exists: "+r.message),"EEXIST"===r.code&&(r.exists=!0,r.message="file exists at that path: "+r.message),r.message="Can't makeDirectory "+JSON.stringify(e)+" with mode "+t+": "+r.message,n.reject(r)):n.resolve()}),n.promise},t.removeDirectory=function(e){e+="";var t=i.defer();return r.rmdir(e,function(n){n?(n.message="Can't removeDirectory "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve()}),t.promise},t.list=n(function(e){e+="";var t=i.defer();return r.readdir(e,function(n,r){return n?(n.message="Can't list "+JSON.stringify(e)+": "+n.message,t.reject(n)):(t.resolve(r),void 0)}),t.promise}),t.stat=function(e){var t=this;e+="";var n=i.defer();try{r.stat(e,function(r,i){r?(r.message="Can't stat "+JSON.stringify(e)+": "+r,n.reject(r)):n.resolve(new t.Stats(i))})}catch(a){n.reject(a)}return n.promise},t.statLink=function(e){e+="";var t=i.defer();try{r.lstat(e,function(n,r){n?(n.message="Can't statLink "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve(r)})}catch(n){t.reject(n)}return t.promise},t.statFd=function(e){e=Number(e);var t=i.defer();try{r.fstat(e,function(n,r){n?(n.message="Can't statFd file descriptor "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve(r)})}catch(n){t.reject(n)}return t.promise},t.link=function(e,t){e+="",t+="";var n=i.defer();try{r.link(e,t,function(r){r?(r.message="Can't link "+JSON.stringify(e)+" to "+JSON.stringify(t)+": "+r.message,n.reject(r)):n.resolve()})}catch(a){n.reject(a)}return n.promise};var p={file:"file",directory:"dir",junction:"junction"};t.symbolicLink=function(e,t,n){p.hasOwnProperty(n)||console.warn(Error('For Windows compatibility, symbolicLink must be called with a type argument "file", "directory", or "junction"')),n=p[n],e+="",t+="";var a=i.defer();try{r.symlink(t,e,n||"file",function(n){n?(n.message="Can't create symbolicLink "+JSON.stringify(e)+" to relative location "+JSON.stringify(t)+": "+n.message,a.reject(n)):a.resolve()})}catch(s){a.reject(s)}return a.promise},t.chown=function(e,t,n){e+="";var a=i.defer();try{r.chown(e,t,n,function(r){r?(r.message="Can't chown (change owner) of "+JSON.stringify(e)+" to user "+JSON.stringify(t)+" and group "+JSON.stringify(n)+": "+r.message,a.reject(r)):a.resolve()})}catch(s){a.reject(s)}return a.promise},t.chmod=function(e,t){e+="",t+="";var n=i.defer();try{r.chmod(e,t,function(r){r?(r.message="Can't chmod (change permissions mode) of "+JSON.stringify(e)+" to (octal number) "+t.toString(8)+": "+r.message,n.reject(r)):n.resolve()})}catch(a){n.reject(a)}return n.promise},t.canonical=function(e){var t=i.defer();return r.realpath(e,function(n,r){n?(n.message="Can't get canonical path of "+JSON.stringify(e)+" by way of C realpath: "+n.message,t.reject(n)):t.resolve(r)}),t.promise},t.readLink=function(e){var t=i.defer();return r.readlink(e,function(e,n){e?(e.message="Can't get link from "+JSON.stringify(n)+" by way of C readlink: "+e.message,t.reject(e)):t.resolve(n)}),t.promise},t.mock=function(e){return l.mock(this,e)}}});