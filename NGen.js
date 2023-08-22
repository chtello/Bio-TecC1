const express = require("express");
const ejs = require('ejs');


function CGen (CaDG){
    for (let i = 0; i < CaDG.length; i++) {
        if (i == 0) {
              let LA = Math.floor(Math.random() * L.length);
        return L[LA];
            CaDG[i] = CaDG[i] + L[LA];
        
        }
    }
return CGen(CaDG)
}
let L = ["G","T","A"];
    let CaDG = ["A","U","G","0","0","0","0","0","0","0","0","0","0","0","0","U","A","A"];
console.log(CGen (CaDG));
