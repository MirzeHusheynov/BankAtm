"use strict"
const userName = document.querySelector("#userName")
const balans = document.querySelector("#balans")
const cixarilanMebleg = document.querySelector("#cixarilanMebleg")
const getCash = document.querySelector("#getCash")
const cixaris = document.querySelector("#cixaris")
const payments = document.querySelector("#payments")
const input = document.querySelector("#input")
const credit = document.querySelector("#credit")
const account = document.querySelector("#account")
const other = document.querySelector("#other")
let name = prompt("Ad daxil edin")
userName.innerHTML = `${name}`

const myObj = {
 balance: 0,
    add: function(){
        const value = input.value
        if((value == "") || (value < 0)) {
            alert("Zehmet olmasa duzgun elave edin");
            return
        }
        else{
            this.balance += parseFloat(value)
            balans.innerHTML = `Senin balansin ${this.balance}`
            input.value = "";
            cixarilanMebleg.innerHTML = "0"
        }
    },
      cixariS: function () {
    if (input.value === "" || input.value < 0 || this.balance < parseFloat(input.value)) {
      alert(`Zehmet olmasa duzgun mebleg yazin: Max ${this.balance}`);
      return;
    } else {
      this.balance -= parseFloat(input.value);
      cixarilanMebleg.innerHTML = `${input.value}`;
      balans.innerHTML = `Senin balansin ${this.balance}`;
      input.value = "";
      return;
    }
  },

    }
getCash.addEventListener("click",function(event){
    event.preventDefault();
    myObj.add();
});
cixaris.addEventListener("click",function(event){
event.preventDefault();
myObj.cixariS();

})
credit.addEventListener("click",function(){
    alert("Bu hisseler hele hazir deyil Serxan muellim")
})
payments.addEventListener("click",function(){
    alert("Bu hisseler hele hazir deyil Serxan muellim")
})
account.addEventListener("click",function(){
    alert("Bu hisseler hele hazir deyil Serxan muellim")
})
other.addEventListener("click",function(){
    alert("Bu hisseler hele hazir deyil Serxan muellim")
})

















