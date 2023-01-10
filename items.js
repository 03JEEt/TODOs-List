function update(){
    let arr
    if(localStorage.getItem('item')==null){
        arr=[]
        localStorage.setItem('item',JSON.stringify(arr))
    }
    x=localStorage.getItem('item')
    arr=JSON.parse(x);
    tablebody=document.getElementById('tablebody')
    str=""
    arr.forEach((element,index) => {
        str+=`<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td> 
        <td>${element[1]}</td>
        <td><button type="button" class="btn btn-primary" onclick=del(${index})>Delete</button></td>
      </tr>`
    });
    tablebody.innerHTML=str;
}
function del(i){
    x=localStorage.getItem('item')
    arr=JSON.parse(x);
    arr.splice(i,1);
    localStorage.setItem('item',JSON.stringify(arr))
    update();
}
function insert(){
    tit=document.getElementById('tittle').value;
    doc=document.getElementById('description').value;
    if(localStorage.getItem('item')==null){
        arr=[]
        arr.push([tit,doc])
        localStorage.setItem('item',JSON.stringify(arr))
    }
    else{
        x=localStorage.getItem('item')
        arr=JSON.parse(x);
        arr.push([tit,doc])
        localStorage.setItem('item',JSON.stringify(arr))
    }
    update();
    document.getElementById('tittle').value=""
    document.getElementById('description').value=""
}
function cleaR(){
    localStorage.clear();
    update();
}
window.onload=function(){
    document.getElementById('add').addEventListener('click', insert);
    document.getElementById('clear').addEventListener('click', cleaR);
}

   
