let url='https://jsonplaceholder.typicode.com/todos/'

function getElement()
{fetch(url).then(res=>res.json()).then(data=>console.log(data))}
getElement()

function getElementByUserId(){
    fetch(url).then(res=>res.json()).then(data=>{
        let filtered=data.filter(item=>item.completed)
        console.log(filtered);
    })
}
getElementByUserId()

function getElementTrue(){
    fetch(url).then(res=>res.json()).then(data=>{
        let filtered=data.filter(item=>item.userId==2)
        console.log(filtered);
    })
}
getElementTrue()