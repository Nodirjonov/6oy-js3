
const btn = document.querySelector("button")
const h1 = document.getElementById("h");


btn.addEventListener('click',()=>{
    const inp = document.getElementById("inp").value
    localStorage.setItem("name",inp)
    h1.textContent=inp;
});
h1.textContent=localStorage.getItem('name')




  
  




