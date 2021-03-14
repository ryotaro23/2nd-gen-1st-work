'use strict'

var r_p_btn =document.getElementById("r_p_btn");
var popup=document.getElementById("popup");

r_p_btn.onclick =function(){
  popup.animate([{opacity: '0'}, {opacity: '1'}], 1500)
  console.log("aa")
};