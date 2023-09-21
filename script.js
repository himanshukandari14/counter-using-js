const minus=document.querySelector("#negative");
const plus=document.querySelector("#positive");
const value=document.querySelector("#counter");

minus.addEventListener("click",()=>{
    value.textContent--;
    value.style.fontSize="40px";
})
plus.addEventListener("click",()=>{
    value.textContent++;
    value.style.fontSize="40px";
})

