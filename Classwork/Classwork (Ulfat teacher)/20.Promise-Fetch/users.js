import { url } from "./api.js";
const tBody=document.querySelector('tbody')

function tableUsers(){
    fetch(url).then(res=>res.json()).then(data=>{
        data.forEach((item)=>{
            let tr=document.createElement('tr')
            tr.innerHTML=`
            <td>${item.id}</td>
            <td>${item.companyName}</td>
            <td>${item.address?.city}</td>
            <td>${item.address?.country}</td>
            <td>${item.address?.phone}</td>
            <td><button>Delete</button></td>
            `
            tBody.append(tr)
            tr.style.padding='8px 20px'
        })
    })
}tableUsers()

let delBtn=document.querySelector('button')

delBtn.addEventListener('click',function(){
    
})
