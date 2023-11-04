function rootHexSize(target='', display) {

if(display == null) {
var result = document.createElement("in");
result.id = "hexsize";
document.body.appendChild(result); } else {
var result = document.querySelector(display);
}
function hexSpecTarget(resources) {
const targetDom = document.querySelector(resources); 
let targetTotSize;
const targetImg = targetDom.querySelectorAll('img,video,audio,iframe,embed');
var textLen = targetDom.innerHTML
var textSize = unescape(encodeURIComponent(textLen)).length;
var textIntS = Number(textSize);

var totalSizeInMB = (textIntS / 1024).toFixed(2);

var oldSizeMB = result.innerText;
var passOldSize = Number(oldSizeMB); 

result.innerText = Number(totalSizeInMB) + passOldSize; 
result.value = Number(totalSizeInMB) + passOldSize; 


for (var x = 0; x < targetImg.length; x++) {
const targetSrc = targetImg[x].src;
const tarGate = checkFileSize(targetSrc, function(tarFileSize){ enterSize(tarFileSize);});
}

}

function enterSize(resources) {
thesize = resources;
showTotSize(thesize);
}
function calculateSize(resources){
let totalSize = 0; resources.forEach((resource) => {
          totalSize += resource.encodedBodySize;
        });
totalSize = parseInt(totalSize);
var totalSizeInMB = (totalSize / 1024).toFixed(2);
result.innerText = totalSizeInMB;
result.value = totalSizeInMB;

}

function checkFileSize(resources, callback) {
let tarFileSize; 
var xhr = new XMLHttpRequest();
xhr.open('HEAD', resources, true);
xhr.onreadystatechange = function(){
  if ( xhr.readyState == 4 ) {
    if ( xhr.status == 200 ) {
tarFileSize =  xhr.getResponseHeader('Content-Length');
callback(tarFileSize);
    } else {
      alert('Hex Error: Trouble Getting DOM size');
    }
  }
};
xhr.send(null);


}
if (performance && performance.getEntriesByType) {
const resources = performance.getEntriesByType('resource');
let totalSize;
if (target) {

 const targetElement = document.querySelector(target);
 if (targetElement) {
totalSize = hexSpecTarget(target);
} else {

result.innerHTML = 'Target element not found.';
result.value = 'Target element not found.';
return;
}
} else {
calculateSize(resources);
        }
function showTotSize(resources){
var thesource = resources;
if(thesource == null) {
var thesource = "0";
}
var totalSizeInMB = (thesource / 1024).toFixed(2);

var oldSizeMB = result.innerText;
var passOldSize = Number(oldSizeMB); 

result.innerText = Number(totalSizeInMB) + passOldSize; 
result.value = Number(totalSizeInMB) + passOldSize; 

}

} else {
console.error('Hex Error: Unsupported Browser - Cannot Track Page Size');
}}

// http get method 

function $GET(urlh, linkh) {
var url = "";
var thelink = linkh;
if(thelink == null) {
var url = window.location;   
} else {
var url = thelink; 
}
var urlParams = new URLSearchParams(new URL(url).search);
var hexget = urlParams.get(urlh);
return hexget; 
}


// data binding 

function rootHexApp(initialData){
return function (targetSelector){
const targetElement = document.querySelector(targetSelector);
if (targetElement) {
const template = targetElement.innerHTML;
// Function to render the template with data
function render(data) {
const renderedContent = template.replace(/\{\{ (.*?) \}\}/g, (match, variable) => {
const key = variable.trim();
return data[key] || '';
});
return renderedContent;}
// Update the content
targetElement.innerHTML = render(initialData);
        } else {
console.log("Hex Error: Target element not found!"); 
}};
}

// form validation

function rootHexForm(validationRules) {
function validateForm(formSelector) {
const formElement = document.querySelector(formSelector);
if (formElement) {
const errorhex = document.createElement("div");
errorhex.style.color = "red";
errorhex.id = "errorhex";
formElement.appendChild(errorhex);
formElement.addEventListener('submit', (event) => {
let valid = true;
const errorMessages = [];
for (const fieldName in validationRules) {
const fieldElement = formElement.querySelector(`[name="${fieldName}"]`);
if (fieldElement) {
const value = fieldElement.value;
const rules = validationRules[fieldName];
if (rules.required && value.trim() === '') {
valid = false;
errorMessages.push(`The ${fieldName} field is required.`);
}
if (rules.minLength && value.length < rules.minLength) {
valid = false;
 errorMessages.push(`The ${fieldName} field must be at least ${rules.minLength} characters.`);
}

if (rules.maxLength && value.length > rules.maxLength) {
  valid = false;
  errorMessages.push(`The ${fieldName} field cannot exceed ${rules.maxLength} characters.`);
}

if (rules.minValue && parseFloat(value) < rules.minValue) {
  valid = false;
  errorMessages.push(`The ${fieldName} field must be greater than or equal to ${rules.minValue}.`);
}

if (rules.maxValue && parseFloat(value) > rules.maxValue) {
  valid = false;
  errorMessages.push(`The ${fieldName} field must be less than or equal to ${rules.maxValue}.`);
}

if (rules.isNumber && isNaN(value)) {
  valid = false;
  errorMessages.push(`The ${fieldName} field must be a number.`);
}

if (rules.containsUppercase && !/[A-Z]/.test(value)) {
  valid = false;
  errorMessages.push(`The ${fieldName} field must contain at least one uppercase letter.`);
}

if (rules.containsDigit && !/\d/.test(value)) {
  valid = false;
  errorMessages.push(`The ${fieldName} field must contain at least one digit.`);
}

if (rules.regex && !new RegExp(rules.regex).test(value)) {
valid = false;
errorMessages.push(`The ${fieldName} field does not match the required pattern.`);
}


// You can add more validation rules here

if (!valid) { 
event.preventDefault();
document.getElementById('errorhex').innerHTML = errorMessages.join('<br>'); 
}}}});
} else {
console.log("Hex Error: Form element not found!");
}}
return validateForm;

}

// hexTable - create tables

 function hexTable(targetSelector, config) {
config.forEach(paramObj => {
const tr = document.createElement("tr");
for (const key in paramObj) {
 if (paramObj.hasOwnProperty(key)) {
const value = paramObj[key];
tr.innerHTML += "<td>"+value+"</td>";
     
 }}

        
const targetTr = document.querySelector(targetSelector);
targetTr.appendChild(tr); 
        
    });
}


// rootHexState function
function rootHexState(options) {
const state = {};
const eventBus = {};
const stateTarget = document.querySelector(options.target);
const stateKey = options.state;
function setState(value) {
state[stateKey] = value;
if (eventBus[stateKey]) {
eventBus[stateKey].forEach((callback) => callback(value));
}}
function getState() {
return state[stateKey];
}
function subscribeToState(callback) {
if (!eventBus[stateKey]) {
eventBus[stateKey] = [];
}
eventBus[stateKey].push(callback);}
return function () {
var stateUse = "";
if(options.use == null) {
var stateUse = "innerText"; 
} else {
var stateUse = options.use;
}
const stateEffect = stateUse;

subscribeToState((newValue) => {
stateTarget[stateEffect] = newValue;
});
var newStateVal = "";
if(options.content == "prompt") {
var newStateVal = prompt("Enter a new username:");
} else {
var newStateVal = options.content;
}
setState(newStateVal);
};}


function newHexForm(initialFields) {
const fields = initialFields || [];
function generateForm(target) {
const formElement = document.querySelector(target);
if (!formElement || fields.length === 0) {return;}
const form = document.createElement("div");
fields.forEach((field) => {
const hfitype = Object.keys(field)[0]; 
const hexformInput = document.createElement(hfitype); 
if(hfitype == "select" || hfitype == "datalist") {
hfioptions = field.options.split(",");
for(var x = 0; x < hfioptions.length; x++) {
const hexformSelectOpt = document.createElement("option");
hexformSelectOpt.value = hfioptions[x];
if(hfitype == "select") {
hexformSelectOpt.innerText = hfioptions[x]; }
hexformInput.appendChild(hexformSelectOpt);
}
}


for (const hexformInputAttr in field) {
        if (field.hasOwnProperty(hexformInputAttr)) {
if(!field[hexformInputAttr]) {
 } else {

var hexformInputAttrVal = field[hexformInputAttr];          hexformInput.setAttribute(hexformInputAttr, hexformInputAttrVal);
       }   
        }
      }


form.appendChild(hexformInput);
});
formElement.appendChild(form)
}
return generateForm;

}


const sumhead = document.getElementsByTagName('HEAD')[0];
const sumcss = document.createElement('link');
sumcss.rel = 'stylesheet';
sumcss.type = 'text/css';
sumcss.href = 'https://pixelcorp.000webhostapp.com/Sum/hex.css';
const calcjs = document.createElement('script');
calcjs.src = 'https://pixelcorp.000webhostapp.com/Sum/calc.hex.js';
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


   
const hexuse = document.getElementsByTagName('use'); 
if(hexuse.length > 0) {
for(var i = 0; i < hexuse.length; i++) { 
const theuse = hexuse[i];
const usesrc = theuse.getAttribute("src"); 
if(usesrc.includes("js")) {
const uscript = document.createElement("script"); uscript.src = usesrc; uscript.type = "text/javascript"; sumhead.appendChild(uscript); } 
else { 
if(usesrc.includes("css")) {
const ustyle = document.createElement("link"); ustyle.rel = "stylesheet"; ustyle.type = "text/css"; ustyle.href = usesrc; sumhead.appendChild(ustyle); } else {
let xhr = new XMLHttpRequest(); xhr.open("POST", usesrc, true); xhr.onload = ()=>{ if(xhr.readyState === XMLHttpRequest.DONE){ if(xhr.status === 200){ let data = xhr.response; if(data == "") { } else { 
var newidd = makeid(5);
function sendIt(){
var newuse = document.createElement("div");
newuse.id = newidd;
newuse.innerHTML = data;
theuse.parentNode.replaceChild(newuse, theuse);
}
sendIt();
rootHex('yes');
typeText('#'+newidd);
}}}}; 
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); xhr.send("sess=hex8080");}} 
    
}
} 


document.addEventListener("DOMContentLoaded", function() { 
    rootHex(); });

    

function newPlayer() {
const pscript = document.createElement("script"); 
pscript.src = "/Sum/player.hex.js";
document.body.appendChild(pscript); 
newAud();
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}



const hasAttr = (el, attr) => el.getAttribute(attr) != null;


function typeText(elementh) {
var typeele = document.querySelector(elementh);

const stype = typeele.getElementsByTagName('*'); for(var i = 0; i < stype.length;i++) {const typea = stype[i];
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

    
}




function rootHex(typehh) {
var hastype = typehh;
    
const hexnav = document.querySelectorAll('nav');
for(var i = 0; i < hexnav.length;i++) {
var thenavv = hexnav[i];
const navtype = thenavv.getAttribute("type");
const navicon = thenavv.getAttribute("logo");
const navname = thenavv.getAttribute("name");

var thenav = document.createElement("div");
document.body.appendChild(thenav); 
if(navtype == "footer") {
const naval = thenavv.innerHTML;
thenav.innerHTML = naval;
thenav.id = "footer-nav";
thenav.style.width = '100vw';
thenavv.innerHTML = '';
thenavv.remove();
}
if(navtype == "header") {
var hasnavh = document.getElementById('header-nav'); 
if(hasnavh !== null) {} else {
const naval = thenavv.innerHTML;
thenavv.innerHTML = '';
const navhead = document.createElement("div");
navhead.id = "navhead";
navhead.classList.add("navhead");
thenav.appendChild(navhead);
const navlogo = document.createElement("div");
navlogo.classList.add("navlogo");
navlogo.innerHTML = '<img id="logonav" src="'+navicon+'" width="40"><p typetext>'+navname+'</p><img id="imgnav" src="https://hexjs.vercel.app/Sum/files/navlist.png" width="40" class="opennav" onclick="togNav();">';
navhead.appendChild(navlogo);
var logonav = document.getElementById('logonav'); 
if(logonav !== null) {
logonav.onerror = function() {
 logonav.remove(); }
 }
var imgnav = document.getElementById('imgnav');
if(imgnav !== null) {
var parnav = imgnav.parentElement; 
imgnav.onerror = function() {
 imgnav.remove();
 const newimgnav = document.createElement("p"); 
 newimgnav.classList.add("opennav");
 newimgnav.style.marginRight = '20px';
 newimgnav.setAttribute("onclick", "togNav()")
 newimgnav.innerHTML = "&hearts;";
 parnav.appendChild(newimgnav);
}; }
const headernav = document.createElement("div");
headernav.id = "header-nav";
headernav.style.setProperty("user-select", "none");
thenav.appendChild(headernav);
const closenav = document.createElement("div");
closenav.classList.add("navlogo");
closenav.innerHTML = '<img src="'+navicon+'" width="40"><p typetext>'+navname+'</p><p class="closenav" style="font-weight: 100;"  margin="20px right" onclick="togNav();">&times;</p>';
headernav.appendChild(closenav);
const innernav = document.createElement("div");
innernav.classList.add("navinner");
innernav.innerHTML = naval;
headernav.appendChild(innernav);
thenavv.remove();
} }
}

const hexdrop = document.querySelectorAll('drop'); for(var i = 0; i < hexdrop.length;i++) {
const thedropp = hexdrop[i];
dropid = makeid(9);
const dropname = thedropp.getAttribute("name");
const thedrop = document.createElement("div");
const dropval = thedropp.innerHTML;
thedropp.innerHTML = '';
thedropp.parentNode.replaceChild(thedrop, thedropp);
const drophead = document.createElement("div");
drophead.innerHTML = '<div style="position: relative; display: flex;"><p style="margin: 0px">'+dropname+'</p><p id="drop'+dropid+'" style="position: absolute; right: 0; margin: 0 10px 0 0;">+</p></div><hr>';
drophead.setAttribute("onclick", "togDrop('"+dropid+"')");
thedrop.appendChild(drophead);
const sdrop = document.createElement("div");
sdrop.classList.add("sdrop");
sdrop.style.height = '0';
sdrop.id = dropid; 
sdrop.innerHTML = dropval; 
thedrop.appendChild(sdrop);

}

if(hastype !== "yes") {
    
 
const stype = document.getElementsByTagName('*'); for(var i = 0; i < stype.length;i++) {const typea = stype[i];
const types = hasAttr(typea, 'typetext');if(types == true){
typev = typea.getAttribute("typetext"); 
const typestr = typev.split(' ');
var sTin = parseInt(typestr[0]);
if(typestr[0] > 0){ } else {var sTin = parseInt("100");} 
const words = typea.innerHTML;
let charIndex = 0;
typea.removeAttribute("typetext"); 
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

}
 
    
const divs = document.querySelectorAll('size'); for(var i = 0; i < divs.length;i++){const esize = divs[i];const upsize = esize.getAttribute("up");const downsize = esize.getAttribute("down");const parent = divs[i].parentElement;const parentsize = window.getComputedStyle(parent, null).getPropertyValue('font-size');const pfontSize = parseFloat(parentsize);const oldsize = parseInt(pfontSize);const upex = hasAttr(esize, 'up');if(upex == true){if(upsize > 0) {const addsize = parseInt(upsize);const newsize = oldsize + addsize;esize.style.fontSize = newsize+'px';}else{esize.style.fontSize = (pfontSize + 5) + 'px';
    }}     
const downex = hasAttr(esize, 'down');if(downex == true) { 
if(downsize > 0){const subsize = parseInt(downsize);const newsize = oldsize - subsize;esize.style.fontSize = newsize + 'px';}else{esize.style.fontSize = (pfontSize - 5) + 'px';}}}



const imgr = document.querySelectorAll('img'); for(var i = 0; i < imgr.length;i++) {const rimg = imgr[i];const sround = hasAttr(rimg, 'round');if(sround == true){rimg.style.borderRadius = '50%';}}
const squo = document.getElementsByTagName('*'); for(var i = 0; i < squo.length;i++) {const quos = squo[i];const hasquo = hasAttr(quos, 'quote');if(hasquo == true){quos.classList.add("quote");}}
const shide = document.getElementsByTagName('*'); for(var i = 0; i < shide.length;i++) {const hides = shide[i];const hashide = hasAttr(hides, 'hidden');if(hashide == true){hides.style.display = 'none';}}
const formno = document.querySelectorAll('form'); for(var i = 0; i < formno.length;i++) {const rformno = formno[i];const sformno = hasAttr(rformno, 'nosubmit');if(sformno == true){
    rformno.onsubmit = function(evt){evt.preventDefault();};
}}
const imgf = document.querySelectorAll('img'); for(var i = 0; i < imgf.length;i++) {const fimg = imgf[i];const sfallimg = hasAttr(fimg, 'fallback');if(sfallimg == true){const simgfall = fimg.getAttribute("fallback"); fimg.onerror = function() { fimg.src = simgfall;  };}}
const hexgrad = document.querySelectorAll('*'); for(var i = 0; i < hexgrad.length;i++) {const gradh = hexgrad[i];const hasgrad = hasAttr(gradh, 'gradient');if(hasgrad == true){
 const gradtype = gradh.getAttribute("gradient"); 
gradh.classList.add("gradient");
gradh.style.backgroundImage = 'linear-gradient('+gradtype+')';  
}}

const hexbgrad = document.querySelectorAll('*'); for(var i = 0; i < hexbgrad.length;i++) {const bgradh = hexbgrad[i];const hasbgrad = hasAttr(bgradh, 'back-gradient');if(hasbgrad == true){
 const bgradtype = bgradh.getAttribute("back-gradient"); 
bgradh.style.backgroundImage = 'linear-gradient('+bgradtype+')';  
}}


const hexbord = document.querySelectorAll('*'); for(var i = 0; i < hexbord.length;i++) {const bordh = hexbord[i];const hasbord = hasAttr(bordh, 'noborder');if(hasbord == true){
bordh.style.border= 'none';  
}}


const hexopac = document.querySelectorAll('*'); for(var i = 0; i < hexopac.length;i++) {const opach = hexopac[i];const hasopac = hasAttr(opach, 'opacity');if(hasopac == true){const opacval = opach.getAttribute("opacity"); 
opach.style.opacity = opacval;
    
}}


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

const nosc = document.getElementsByTagName('*'); for(var i = 0; i < nosc.length;i++) {const thenosc = nosc[i];const hasnosc = hasAttr(thenosc, 'noscroll');if(hasnosc == true){thenosc.classList.add("noscroll");}}  

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
  
const behex = document.getElementsByTagName('*');for(var i = 0; i < behex.length;i++) {const behind = behex[i];
const hasbehind = hasAttr(behind, 'back');if(hasbehind == true){behexv = behind.getAttribute("back"); 
    behind.style.background = behexv;}}
    
  const bohex = document.getElementsByTagName('*');for(var i = 0; i < bohex.length;i++) {const bordhex = bohex[i];
const hasbordhex = hasAttr(bordhex, 'border');if(hasbordhex == true){bohexv = bordhex.getAttribute("border"); 
    bordhex.style.border = bohexv;}}
    

   
const beflow = document.getElementsByTagName('*');for(var i = 0; i < beflow.length;i++) {const flowhex = beflow[i];
const hasbeflow = hasAttr(flowhex, 'flow');if(hasbeflow == true){beflowv = flowhex.getAttribute("flow"); 
    flowhex.style.overflow = beflowv;}}
    
      
    
const zdex = document.getElementsByTagName('*');for(var i = 0; i < zdex.length;i++) {const dexin = zdex[i];
const hasdex= hasAttr(dexin, 'index');if(hasdex == true){dexv = dexin.getAttribute("index"); 
    dexin.style.zIndex = dexv;}}

const disp = document.getElementsByTagName('*');for(var i = 0; i < disp.length;i++) {const currdis = disp[i];
const hasdisp = hasAttr(currdis, 'display');if(hasdisp == true){dispv = currdis.getAttribute("display"); 
    currdis.style.display = dispv;}}
  
 
const hsize = document.getElementsByTagName('*');for(var i = 0; i < hsize.length;i++) {const sizehe = hsize[i];
const hashsize = hasAttr(sizehe, 'size');if(hashsize == true){sizehev = sizehe.getAttribute("size"); 
    sizehe.style.fontSize = sizehev;}} 

    
const srat = document.getElementsByTagName('*');for(var i = 0; i < srat.length;i++) {const rata = srat[i];
const srats = hasAttr(rata, 'ratio');if(srats == true){ratv = rata.getAttribute("ratio"); 
    rata.style.setProperty("aspect-ratio", ratv);}}


const sblend = document.getElementsByTagName('*');for(var i = 0; i < sblend.length;i++) {const blenda = sblend[i];
const sblends = hasAttr(blenda, 'blend');if(sblends == true){blendv = blenda.getAttribute("blend"); 
    blenda.style.setProperty("mix-blend-mode", blendv);}}
const spadw = document.getElementsByTagName('*');for(var i = 0; i < spadw.length;i++) {const padwa = spadw[i];
const spadws = hasAttr(padwa, 'padding');if(spadws == true){var padwvv = padwa.getAttribute("padding"); const padstr = padwvv.split(' '); var padwv = padstr[0]; var padhex = padwv.replace(/,/g, ' '); if(padstr[1]) {padwa.style.setProperty("padding-"+padstr[1], padwv); } else {
    padwa.style.padding = padhex; }}}
const smarw = document.getElementsByTagName('*');for(var i = 0; i < smarw.length;i++) {const marwa = smarw[i];
const smarws = hasAttr(marwa, 'margin');if(smarws == true){var marwvv = marwa.getAttribute("margin"); const marstr = marwvv.split(' '); var marwv = marstr[0]; var marhex = marwv.replace(/,/g, ' '); if(marstr[1]) {marwa.style.setProperty("margin-"+marstr[1], marwv); } else {
    marwa.style.margin = marhex; }}}
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
const popcan = document.createElement("div");
popcan.id = "popcan";
popcan.classList.add("popcan");
popcan.innerHTML = `<in onclick="hexPop('`+poprole+`')">&times;</in>`;
newpop.appendChild(popcan);
const poptext = document.createElement("div");
poptext.setAttribute("class", "poptext");
poptext.innerHTML = popval;
const popdel = document.createElement("button");
popdel.id = "popdel"; 
popdel.setAttribute("class", "smart fill-line pulse shadow");
if(popray[2]) {
popdel.setAttribute("onclick", "location.href='"+popray[2]+"'");   
} else {
popdel.setAttribute("onclick", "hexPop('"+poprole+"');"); }
if(popray[1]) { var popgin = popray[1]; var popkay = popgin.replace(/_/g, " ");} else { var popkay = "OKAY"; }
popdel.innerText = popkay;
newpop.appendChild(poptext);
newpop.appendChild(popdel);
sumpop.innerHTML = '';
sumpop.style.display='none';
}}


const aspop = document.getElementsByTagName('*');for(var i = 0; i < aspop.length;i++) {
const asumpop = aspop[i];
const ahaspop = hasAttr(aspop[i], 'alert');if(ahaspop == true){
var apoprole = asumpop.getAttribute("alert");
if(apoprole == null) {
var apoprole = "0";
} else {
var apoprole = apoprole*1000;
}
const apopval = asumpop.innerHTML;
const apopbody = document.createElement("div");
apopbody.setAttribute("class", "popbody");
const alertid = makeid(7);
apopbody.id = alertid;
pophome.appendChild(apopbody);
const anewpop = document.createElement("div");
anewpop.setAttribute("class", "s-pop");
apopbody.appendChild(anewpop);
const apopcan = document.createElement("div");
apopcan.id = "popcan";
apopcan.classList.add("popcan");
apopcan.innerHTML = `<in onclick="hexPop('`+alertid+`')">&times;</in>`;
anewpop.appendChild(apopcan);
const apoptext = document.createElement("div");
apoptext.setAttribute("class", "poptext");
apoptext.innerHTML = apopval;
const apopdel = document.createElement("button");
apopdel.id = "popdel"; 
apopdel.setAttribute("class", "smart fill-line pulse shadow");
var apopkay = "OKAY"; 
apopdel.innerText = apopkay;
apopdel.setAttribute("onclick", "hexPop('"+alertid+"');");
anewpop.appendChild(apoptext);
anewpop.appendChild(apopdel);
asumpop.innerHTML = '';
asumpop.style.display='none';
setTimeout(function() {
  hexPop(alertid); 
}, apoprole);
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
const sran = document.getElementsByTagName('*'); for(var i = 0; i < sran.length;i++) {const srano = sran[i]; const srp = srano.parentElement; const scon = srano.cloneNode(true);  const srans = hasAttr(srano, 's-range');if(srans == true){const sranv = srano.getAttribute("s-range");  
}}

}




// end of rootHex


 const clickhex = document.getElementsByTagName('*');for(var i = 0; i < clickhex.length;i++) {const hexclick = clickhex[i];
const hasclick = hasAttr(hexclick, 'click');if(hasclick == true){clickhexv = hexclick.getAttribute("click"); 
const eachclick = clickhexv.split(";");
hexclick.addEventListener("click", function() { 
  
  for (var i = 0; i < eachclick.length; i++) {  
    
    eval(eachclick[i]);

  }  
    
})}}



    
 function hexIfText(sumifh, typeh, wordh) {const sum = sumifh;const stype = typeh;const stext = wordh;var element = document.querySelector(`[s-if="${sum}"]`);var ogtext = element.innerText;if(ogtext == stext){if(stype == "hide"){element.style.display='none';}if(stype == "show"){
     element.style.display='block';}}}
     
     
    
HTMLElement.prototype.show = show;
HTMLElement.prototype.hide = hide;
HTMLElement.prototype.load = load;
HTMLElement.prototype.toggle = toggle;
HTMLElement.prototype.reload = reload;


function toggle(elem) {
let togele;
var ele = elem;

if (ele !== undefined) {
 togele = document.querySelector(ele);
} else {
 togele = this;    
}

var stat = togele.getAttribute("toghex");
if(stat !== null) {
if(togele.style.display !== 'none') {
togele.setAttribute("toghex", "show"); 

} else {
togele.setAttribute("toghex", "hide"); 

}  
}

if(togele.style.display !== 'none') {
if(stat !== null) {
if(stat == "show") {
 togele.style.display='none';
togele.setAttribute("toghex", "hide");  
   
}   
} else {
togele.style.display='none';
togele.setAttribute("toghex", "hide");  
}
} else {
if(stat !== null) {
if(stat == "hide") {
togele.style.display = 'block';
togele.setAttribute("toghex", "show");  }
} else {
togele.style.display = 'block';
togele.setAttribute("toghex", "show"); 
}
}
}



function show(elem) {
let showele;
var ele = elem;

if (ele !== undefined) {
 showele = document.querySelector(ele);
} else {
 showele = this;    
}

showele.style.display = 'block';

}


function hide(elem) {
        
let showele;
var ele = elem;

if (ele !== undefined) {
 showele = document.querySelector(ele);
} else {
 showele = this;    
}


showele.style.display='none';
    
}


function reload(elem) {
let showele;
var ele = elem;
if (ele !== undefined) {
showele = ele;
} 
else {
if (this.id) {
showele = "#" + this.id; 
} else {
showele = "." + this.className; } 
}
var url = window.location.href;
load(url, showele, showele);
}






function load(linkh, innerh, placeh){
var locateh = linkh;
if(locateh.includes("?")) { 
var locateh = locateh + "&v=" + makeid(7);
} else {
var locateh = locateh + "?v=" + makeid(7);
}
let pend;
fetch(locateh).then(function(response) {
response.text().then(function(text) {
var data = text;
if(placeh !== undefined){
var parser = new DOMParser();
var doc = parser.parseFromString(data, 'text/html');
var findit = doc.querySelector(placeh);
if(findit)  {
var data = findit.innerHTML;   
 } else {
var data = data;
 }  
} 
if(data == null) { 
 } else {
if(data == "") {
  } else {
if (innerh !== undefined) {
if(locateh.includes("txt")) {
document.querySelector(innerh).innerText = data;
} else {    
document.querySelector(innerh).innerHTML = data;
}} 
else {
pend = this; 
alert(pend);
if(locateh.includes("txt")) {
pend.innerText = data;
 } else {
pend.innerHTML = data;
}}
rootHex();      
} } });});}



 
function getHTML(elementh) {
var ele = document.querySelector(elementh);
var elehtml = ele.innerHTML; 
return elehtml; 
}
    
     

 
 
 
 
     
function hexIfNum(sumifh, typeh, wordh) {const sum = sumifh; const stype = typeh;const ostext = wordh; const stext = parseInt(ostext);var element = document.querySelector(`[s-if="${sum}"]`);var rogtext = element.innerText;var ogtext = parseInt(rogtext);
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

function hexPop(elementh) {
const popid = elementh;
const thepop = document.getElementById(popid);
if(thepop.style.display == 'block') {
    thepop.style.display='none';
} else {
    thepop.style.display='block';
    
}
}
 
function togNav() {
const upnav = document.getElementById('header-nav'); 
if(upnav.style.height == '100vh'){
upnav.style.height = '0'; 
upnav.style.width = '0'; 
} else {
upnav.style.height = '100vh';
upnav.style.width = '100vw';
}
}

function togDrop(elementh) {
var plusele = "drop"+elementh;
const upnav = document.getElementById(elementh);
const plusnav = document.getElementById(plusele);
if(upnav.style.height == 'auto'){
upnav.style.height = '0'; 
plusnav.innerText = '+';
} else {
upnav.style.height = 'auto';
plusnav.innerText = '-';
}
}


