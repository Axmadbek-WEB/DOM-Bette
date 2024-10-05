// const h1t = document.getElementsByTagName("h1")[0];
// const h1c = document.getElementsByClassName("hn");
// const h1Teg = document.querySelector("#ism");
const ism = document.getElementById("ism");
const fam = document.getElementById("fam");
const age = document.getElementById("age");
const a = prompt("Isimni Kiriting");
const b = prompt("Familiyangizni Kiriting");
const c = +prompt("Yoshingizni Kiriting");
const j = +prompt("Ism kickina yoki katta \n 1) Katta harif \n 2) Kichkina harif");

if(j==2){
    ism.textContent = a.toLowerCase();
    fam.textContent = b.toLocaleLowerCase();
    age.textContent = c;
}else if(j==1){
    ism.textContent = a.toLocaleUpperCase();
    fam.textContent = b.toLocaleUpperCase();
    age.textContent = c;
}else if(j!==1 || j!==2){
    alert("Mavjud bolmagan raqam terilgan qaytarib boshqattan tering !!" + " " + j);
    prompt("Ism kickina yoki katta \n 1) Katta harif \n 2) Kichkina harif");
}
console.log(ism + fam + age);