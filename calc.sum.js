document.addEventListener("DOMContentLoaded", function() {
 document.getElementById('s-one').onclick = function(){
             document.sumcalc.sumdisplay.value += 1;
           };
document.getElementById('s-two').onclick= function(){
             document.sumcalc.sumdisplay.value += 2;
           };
document.getElementById('s-three').onclick = function(){
             document.sumcalc.sumdisplay.value += 3;
           };
document.getElementById('s-four').onclick = function(){
             document.sumcalc.sumdisplay.value += 4;
           };
document.getElementById('s-five').onclick = function(){
             document.sumcalc.sumdisplay.value += 5;
           };
document.getElementById('s-six').onclick = function(){
             document.sumcalc.sumdisplay.value += 6;
           };
document.getElementById('s-seven').onclick = function(){
             document.sumcalc.sumdisplay.value += 7;
           };
document.getElementById('s-eight').onclick = function(){
             document.sumcalc.sumdisplay.value += 8;
           };
document.getElementById('s-nine').onclick = function(){
             document.sumcalc.sumdisplay.value += 9;
           };
document.getElementById('s-zero').onclick = function(){
             document.sumcalc.sumdisplay.value += 0;
           };
document.getElementById('s-add').onclick = function(){
             document.sumcalc.sumdisplay.value += '+';
           };
document.getElementById('s-subs').onclick = function(){
             document.sumcalc.sumdisplay.value += '-';
           };
document.getElementById('s-multi').onclick = function(){
             document.sumcalc.sumdisplay.value += '*';
           };
document.getElementById('s-divide').onclick = function(){
             document.sumcalc.sumdisplay.value += '/';
           };
document.getElementById('s-dot').onclick = function(){
             document.sumcalc.sumdisplay.value += '.';
           };
document.getElementById('s-equal').onclick = function(){
             if (sumdisplay.value == "") {
               
             }else{
               document.sumcalc.sumdisplay.value =
               eval(document.sumcalc.sumdisplay.value);
             }
           };
document.getElementById('s-clear').onclick = function(){
             document.sumcalc.sumdisplay.value = "";
           };
});      