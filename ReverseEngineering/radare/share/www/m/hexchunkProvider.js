"use strict";function hexPairToASCII(a){var s=parseInt(a,16);return s>=33&&s<=126?String.fromCharCode(s):"."}function getChunk(a,s,e){if(s<0)return{offset:0,hex:[],ascii:[],flags:[],modified:[]};var n;return r2.cmd("p8 "+a+" @"+s,function(o){n={offset:s,hex:[],ascii:[],flags:[],modified:[]};for(var i=[],r="",t=0;t<a;t++){var f=o[2*t]+o[2*t+1];i.push(f),r+=hexPairToASCII(f),t%e==e-1&&(n.hex.push(i),n.ascii.push(r),i=[],r="")}}),r2.cmdj("fij "+s+" "+(s+a),function(a){n.flags=a;for(var s in n.flags)n.flags[s].size=parseInt(n.flags[s].size)}),n}importScripts("/m/r2.js");var howManyBytes,nbCols,configurationDone=!1;self.onmessage=function(a){if(!configurationDone||a.data.reset)howManyBytes=a.data.howManyBytes,nbCols=a.data.nbCols,configurationDone=!0;else{var s=getChunk(howManyBytes,a.data.offset,nbCols);s.dir=a.data.dir,self.postMessage(s)}};