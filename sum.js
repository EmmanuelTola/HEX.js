const sumhead = document.getElementsByTagName('HEAD')[0];
const sumcss = document.createElement('link');
sumcss.rel = 'stylesheet';
sumcss.type = 'text/css';
sumcss.href = '/Sum/sum.css';
const calcjs = document.createElement('script');
calcjs.src = '/Sum/calc.sum.js';
const popcss = document.createElement('link');
popcss.rel = 'stylesheet';
popcss.type = 'text/css';
popcss.href = 'https://fonts.googleapis.com/css?family=Poppins';
const rubcss = document.createElement('link');
rubcss.rel = 'stylesheet';
rubcss.type = 'text/css';
rubcss.href = 'https://fonts.googleapis.com/css?family=Rubik';
const chacss = document.createElement('link');
chacss.rel = 'stylesheet';
chacss.type = 'text/css';
chacss.href = 'https://fonts.googleapis.com/css?family=Charm';
sumhead.appendChild(calcjs);
sumhead.appendChild(sumcss);  
sumhead.appendChild(popcss);  
sumhead.appendChild(rubcss);  
sumhead.appendChild(chacss);  



const hasAttr = (el, attr) => el.getAttribute(attr) != null;
const divs = document.querySelectorAll('size'); for(var i = 0; i < divs.length;i++){const esize = divs[i];const upsize = esize.getAttribute("up");const downsize = esize.getAttribute("down");const parent = divs[i].parentElement;const parentsize = window.getComputedStyle(parent, null).getPropertyValue('font-size');const pfontSize = parseFloat(parentsize);const oldsize = parseInt(pfontSize);const upex = hasAttr(esize, 'up');if(upex == true){if(upsize > 0) {const addsize = parseInt(upsize);const newsize = oldsize + addsize;esize.style.fontSize = newsize+'px';}else{esize.style.fontSize = (pfontSize + 5) + 'px';
    }}     
const downex = hasAttr(esize, 'down');if(downex == true) { 
if(downsize > 0){const subsize = parseInt(downsize);const newsize = oldsize - subsize;esize.style.fontSize = newsize + 'px';}else{esize.style.fontSize = (pfontSize - 5) + 'px';}}}
const salert = document.getElementsByTagName('*'); for(var i = 0; i < salert.length;i++) {const alerts = salert[i];
  const yesalert = hasAttr(alerts, 'alert');if(yesalert == true) {
      alerts.style.display='none';
      const alertval = alerts.getAttribute("alert");
      const alerttxt = alerts.innerHTML; 
if(alertval > 0){const alertvap = parseInt(alertval); const alertva = alertvap*1000; setTimeout(function() {alert(alerttxt);}, alertva);}else{alert(alerttxt);}}  
}
const imgr = document.querySelectorAll('img'); for(var i = 0; i < imgr.length;i++) {const rimg = imgr[i];const sround = hasAttr(rimg, 'round');if(sround == true){rimg.style.borderRadius = '50%';}}
const squo = document.getElementsByTagName('*'); for(var i = 0; i < squo.length;i++) {const quos = squo[i];const hasquo = hasAttr(quos, 'quote');if(hasquo == true){quos.classList.add("quote");}}
const shide = document.getElementsByTagName('*'); for(var i = 0; i < shide.length;i++) {const hides = shide[i];const hashide = hasAttr(hides, 'hidden');if(hashide == true){hides.style.display = 'none';}}
const formno = document.querySelectorAll('form'); for(var i = 0; i < formno.length;i++) {const rformno = formno[i];const sformno = hasAttr(rformno, 'nosubmit');if(sformno == true){
    rformno.onsubmit = function(evt){evt.preventDefault();};
}}
const imgf = document.querySelectorAll('img'); for(var i = 0; i < imgf.length;i++) {const fimg = imgf[i];const sfallimg = hasAttr(fimg, 'fallback');if(sfallimg == true){const simgfall = fimg.getAttribute("fallback"); fimg.onerror = function() { fimg.src = simgfall;  };}}
const abs = document.getElementsByTagName('*'); for(var i = 0; i < abs.length;i++) {const abso = abs[i];const yabs = hasAttr(abso, 'absolute');if(yabs == true){abso.style.position = 'absolute';}}
const fabs = document.getElementsByTagName('*'); for(var i = 0; i < fabs.length;i++) {const fabso = fabs[i];const fyabs = hasAttr(fabso, 'fixed');if(fyabs == true){fabso.style.position = 'fixed';}}
const rabs = document.getElementsByTagName('*'); for(var i = 0; i < rabs.length;i++) {const rabso = rabs[i];const ryabs = hasAttr(rabso, 'relative');if(ryabs == true){rabso.style.position = 'relative';}}
const cens = document.getElementsByTagName('*'); for(var i = 0; i < cens.length;i++) {const censo = cens[i];const rcens = hasAttr(censo, 'center');if(rcens == true){censo.style.textAlign = 'center';}}
const cenls = document.getElementsByTagName('*'); for(var i = 0; i < cenls.length;i++) {const cenlso = cenls[i];const rcenls = hasAttr(cenlso, 'left');if(rcenls == true){cenlso.style.textAlign = 'left';}}
const cenrs = document.getElementsByTagName('*'); for(var i = 0; i < cenrs.length;i++) {const cenrso = cenrs[i];const rcenrs = hasAttr(cenrso, 'right');if(rcenrs == true){cenrso.style.textAlign = 'right';}}
const locens = document.getElementsByTagName('*'); for(var i = 0; i < locens.length;i++) {const locenso = locens[i];const rlocens = hasAttr(locenso, 'lowercase');if(rlocens == true){locenso.style.textTransform = 'lowercase';}}
const cacens = document.getElementsByTagName('*'); for(var i = 0; i < cacens.length;i++) {const cacenso = cacens[i];const rcacens = hasAttr(cacenso, 'capital');if(rcacens == true){cacenso.style.textTransform = 'capitalize';}}

const upcens = document.getElementsByTagName('*'); for(var i = 0; i < upcens.length;i++) {const upcenso = upcens[i];const rupcens = hasAttr(upcenso, 'uppercase');if(rupcens == true){upcenso.style.textTransform = 'uppercase';}}
const nosels = document.getElementsByTagName('*'); for(var i = 0; i < nosels.length;i++) {const noselso = nosels[i];const rnosels = hasAttr(noselso, 'noselect');if(rnosels == true){noselso.style.setProperty("user-select", "none");}}
const sels = document.getElementsByTagName('*'); for(var i = 0; i < sels.length;i++) {const selso = sels[i];const rsels = hasAttr(selso, 'select');if(rsels == true){selso.style.setProperty("user-select", "auto");}}
const sflex = document.getElementsByTagName('*'); for(var i = 0; i < sflex.length;i++) {const flexso = sflex[i];const flexs = hasAttr(flexso, 'flex');if(flexs == true){flexso.style.display = 'flex';}}
const sflexw = document.getElementsByTagName('*'); for(var i = 0; i < sflexw.length;i++) {const flexwso = sflexw[i];const flexws = hasAttr(flexwso, 'flex-wrap');if(flexws == true){flexwso.style.display = 'flex';flexwso.style.flexWrap = 'wrap';}}
const maqs = document.getElementsByTagName('*'); for(var i = 0; i < maqs.length;i++) {const maqso = maqs[i];const rmaqs = hasAttr(maqso, 'marquee');if(rmaqs == true){maqso.classList.add("marquee");}}
const stheme = document.getElementsByTagName('*'); for(var i = 0; i < stheme.length;i++) {const sthemecurr = stheme[i];const hastheme = hasAttr(sthemecurr, 'theme');if(hastheme == true){sthemepick = sthemecurr.getAttribute("theme"); const themestr = sthemepick.split(' ');sthemecurr.setAttribute("class", themestr[0] + " " + themestr[1] + " " + themestr[2] + " " + themestr[3]);}}
const spush = document.getElementsByTagName('*'); for(var i = 0; i < spush.length;i++) {const pusha = spush[i];
const pushs = hasAttr(pusha, 'push');if(pushs == true){pushv = pusha.getAttribute("push"); 
 const pushstr = pushv.split(' ');
if(pushstr[0] == null) {} else {pusha.style.setProperty(pushstr[0], '0');}  if(pushstr[1] == null) {} else {pusha.style.setProperty(pushstr[1], '0');}}}


const slink = document.getElementsByTagName('*'); for(var i = 0; i < slink.length;i++) {const linka = slink[i];
const links = hasAttr(linka, 'link');if(links == true){linkv = linka.getAttribute("link"); 
const linkstr = linkv.split(' ');
if(linkstr[1] == null) {linka.onclick = function() {location.href = linkstr[0];};}else{linka.onclick = function() {window.open(linkstr[0], linkstr[1]);}}}}  
  
  
const sfont = document.getElementsByTagName('*');for(var i = 0; i < sfont.length;i++) {const fonta = sfont[i];
const sfonts = hasAttr(fonta, 'font');if(sfonts == true){fontv = fonta.getAttribute("font"); 
    fonta.style.fontFamily = fontv;}}
const sbold = document.getElementsByTagName('*');for(var i = 0; i < sbold.length;i++) {const bolda = sbold[i];
const sbolds = hasAttr(bolda, 'bold');if(sbolds == true){boldv = bolda.getAttribute("bold");if(boldv > 0) {if(boldv > 4) {boldv = "4"; } const boldm = boldv*100; const boldf = boldm+600;
    bolda.style.fontWeight = boldf; } else { bolda.style.fontWeight = 650;}}}    
const scol = document.getElementsByTagName('*');for(var i = 0; i < scol.length;i++) {const cola = scol[i];
const scols = hasAttr(cola, 'color');if(scols == true){colv = cola.getAttribute("color"); 
    cola.style.color = colv;}}
const sblend = document.getElementsByTagName('*');for(var i = 0; i < sblend.length;i++) {const blenda = sblend[i];
const sblends = hasAttr(blenda, 'blend');if(sblends == true){blendv = blenda.getAttribute("blend"); 
    blenda.style.setProperty("mix-blend-mode", blendv);}}
const spadw = document.getElementsByTagName('*');for(var i = 0; i < spadw.length;i++) {const padwa = spadw[i];
const spadws = hasAttr(padwa, 'padding');if(spadws == true){var padwvv = padwa.getAttribute("padding"); const padstr = padwvv.split(' '); var padwv = padstr[0]; if(padstr[1]) {padwa.style.setProperty("padding-"+padstr[1], padwv); } else {
    padwa.style.padding = padwv; }}}
const smarw = document.getElementsByTagName('*');for(var i = 0; i < smarw.length;i++) {const marwa = smarw[i];
const smarws = hasAttr(marwa, 'margin');if(smarws == true){var marwvv = marwa.getAttribute("margin"); const marstr = marwvv.split(' '); var marwv = marstr[0]; if(marstr[1]) {marwa.style.setProperty("margin-"+marstr[1], marwv); } else {
    marwa.style.margin = marwv; }}}
const scolw = document.getElementsByTagName('*');for(var i = 0; i < scolw.length;i++) {const colwa = scolw[i];
const scolws = hasAttr(colwa, 'width');if(scolws == true){var colwvv = colwa.getAttribute("width"); const widstr = colwvv.split(' '); var colwv = widstr[0]; if(widstr[1]) {colwa.style.setProperty(widstr[1]+"-width", colwv); } else {
    colwa.style.width = colwv; }}}
const scolr = document.getElementsByTagName('*');for(var i = 0; i < scolr.length;i++) {const colra = scolr[i];
const scolrs = hasAttr(colra, 'radius');if(scolrs == true){var colrv = colra.getAttribute("radius");
    colra.style.borderRadius = colrv; }}
const scolh = document.getElementsByTagName('*');for(var i = 0; i < scolh.length;i++) {const colha = scolh[i];
const scolhs = hasAttr(colha, 'height');if(scolhs == true){var colhvv = colha.getAttribute("height"); const histr = colhvv.split(' '); var colhv = histr[0]; if(histr[1]) {colha.style.setProperty(histr[1]+"-height", colhv); } else {
    colha.style.height = colhv; }}}
const pophome = document.getElementsByTagName('body')[0];
const spop = document.getElementsByTagName('*');for(var i = 0; i < spop.length;i++) {
const sumpop = spop[i];
const haspop = hasAttr(spop[i], 'pop');if(haspop == true){
const popinput = sumpop.getAttribute("pop");
popray = popinput.split(' ');
poprole = popray[0]; 
const popval = sumpop.innerHTML;
const popbody = document.createElement("div");
popbody.setAttribute("class", "popbody");
popbody.id = poprole;
pophome.appendChild(popbody);
const newpop = document.createElement("div");
newpop.setAttribute("class", "s-pop");
popbody.appendChild(newpop);
const poptext = document.createElement("div");
poptext.setAttribute("class", "poptext");
poptext.innerHTML = popval;
const popdel = document.createElement("button");
popdel.id = "popdel"; 
popdel.setAttribute("class", "smart fill-line pulse shadow");
if(popray[2]) {
popdel.setAttribute("onclick", "location.href='"+popray[2]+"'");   
} else {
popdel.setAttribute("onclick", "sumPop('"+poprole+"');"); }
if(popray[1]) { var popgin = popray[1]; var popkay = popgin.replace(/_/g, " ");} else { var popkay = "OKAY"; }
popdel.innerText = popkay;
newpop.appendChild(poptext);
newpop.appendChild(popdel);
sumpop.style.display='none';
}}

const pagem = document.getElementsByTagName('*'); for(var i = 0; i < pagem.length;i++) {const pagemo = pagem[i];const pagems = hasAttr(pagemo, 'page-middle');if(pagems == true){pagemo.style.position = 'absolute';
      pagemo.style.top = '50%';
      pagemo.style.left = '50%';
      pagemo.style.setProperty('transform', 'translate(-50%, -50%');
  }}
const pagehm = document.getElementsByTagName('*'); for(var i = 0; i < pagehm.length;i++) {const pagehmo = pagehm[i];const pagehms = hasAttr(pagehmo, 'page-middle-h');if(pagehms == true){pagehmo.style.display = 'table';
      pagehmo.style.marginLeft = 'auto';
      pagehmo.style.marginRight = 'auto';
  }}
const pagevm = document.getElementsByTagName('*'); for(var i = 0; i < pagevm.length;i++) {const pagevmo = pagevm[i];const pagevms = hasAttr(pagevmo, 'page-middle-v');if(pagevms == true){pagevmo.style.position = 'absolute';
      pagevmo.style.top = '50%';
      pagevmo.style.setProperty('transform', 'translate(0, -50%');
  }}
const sran = document.getElementsByTagName('*'); for(var i = 0; i < sran.length;i++) {const srano = sran[i]; const srp = srano.parentElement; const scon = srano.cloneNode(true);  const srans = hasAttr(srano, 's-range');if(srans == true){const sranv = srano.getAttribute("s-range");   }}
const stype = document.getElementsByTagName('*'); for(var i = 0; i < stype.length;i++) {const typea = stype[i];
const types = hasAttr(typea, 'typetext');if(types == true){
typev = typea.getAttribute("typetext"); 
const typestr = typev.split(' ');
var sTin = parseInt(typestr[0]);
if(typestr[0] > 0){ } else {var sTin = parseInt("100");} 
const words = typea.innerHTML;
let charIndex = 0;
setInterval(function(){
var sdText = typea;
var formertext = sdText.innerHTML;
sdText.innerText = "";
var currentWord = words;
var currentChar = currentWord.substring(0, charIndex);
sdText.innerHTML = currentChar;
if(sdText.innerHTML == formertext) {sdText.classList.remove("is-blinking");      
} else {
if(typestr[1] == "") {
 sdText.classList.add("is-blinking");   
} else {
if(typestr[1] == "noblink") { } else {
  sdText.classList.add("is-blinking");      
    }}}
charIndex++;
}, sTin);
}}
function sumIfText(sumifh, typeh, wordh) {const sum = sumifh;const stype = typeh;const stext = wordh;var element = document.querySelector(`[s-if="${sum}"]`);var ogtext = element.innerText;if(ogtext == stext){if(stype == "hide"){element.style.display='none';}if(stype == "show"){
     element.style.display='block';}}}
function sumIfNum(sumifh, typeh, wordh) {const sum = sumifh; const stype = typeh;const ostext = wordh; const stext = parseInt(ostext);var element = document.querySelector(`[s-if="${sum}"]`);var rogtext = element.innerText;var ogtext = parseInt(rogtext);
if(stype == "more"){
if(ogtext > stext){element.style.display='block';}else{element.style.display='none'; }}
if(stype == "less"){
if(ogtext < stext){element.style.display='block';}else{element.style.display='none'; }}}     
 function newCalc(headh) {
if(headh) {
var targetid = headh;
var target = document.querySelector(targetid);} else {
  var target = document.querySelector('body');}
const calc = document.createElement("form");
calc.setAttribute("class", "sum-calc");
calc.setAttribute("name", "sumcalc"); 
target.appendChild(calc);
const calcre = document.createElement("input");
calcre.setAttribute("class", "result");
calcre.setAttribute("type", "text");
calcre.id = "sumdisplay";
calcre.setAttribute("name", "sumdisplay");
calc.appendChild(calcre);
const calcray = ["s-zero", "s-one", "s-two", "s-three", "s-four", "s-five", "s-six", "s-seven", "s-eight", "s-nine"]; 
for(var i = 0; i < calcray.length; i++) {
var calcnum = document.createElement("input");
calcnum.setAttribute("class", "num");
calcnum.setAttribute("type", "button");
calcnum.id = calcray[i];
calcnum.value = i;
calc.appendChild(calcnum);}
const charay = ["+", "-", "×", ".", "/", "C"]; 
const charid = ["s-add", "s-subs", "s-multi", "s-dot", "s-divide", "s-clear"]; 
for(var x = 0; x < charay.length; x++) {
var calcar = document.createElement("input");
calcar.setAttribute("class", "char num");
calcar.setAttribute("type", "button");
calcar.id = charid[x];
calcar.value = charay[x];
calc.appendChild(calcar);}
const calcreq = document.createElement("input");
calcreq.setAttribute("class", "equal");
calcreq.setAttribute("type", "button");
calcreq.id = "s-equal";
calcreq.value = "=";
calc.appendChild(calcreq);
}

function sumPop(elementh) {
const popid = elementh;
const thepop = document.getElementById(popid);
if(thepop.style.display == 'block') {
    thepop.style.display='none';
} else {
    thepop.style.display='block';
    
}
}
 
