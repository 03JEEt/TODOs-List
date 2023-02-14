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
        <td><button type="button" class="btn btn-primary" onclick=edit(${index})>Edit</button>
        <button type="button" class="btn btn-primary" onclick=del(${index})>Delete</button></td>
        <td>Date:- ${element[2]} <br> Time:- ${element[3]}</td>
      </tr>`
    });
    tablebody.innerHTML=str;
}
function edit(i){
    x=localStorage.getItem('item')
    arr=JSON.parse(x);
    j=arr.splice(i,1);
    localStorage.setItem('item',JSON.stringify(arr))
    document.getElementById('tittle').value=j[0][0]
    document.getElementById('description').value=j[0][1]
    update();
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
    d=new Date();
    t=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    p=d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear();
    
    if(tit==='' && doc===''){
        
        document.getElementById('err').innerHTML='You have to enter something!!!!!';
        return;
    }
    document.getElementById('err').innerHTML='';
    if(localStorage.getItem('item')==null){
        arr=[]
        arr.push([tit,doc,p,t])
        localStorage.setItem('item',JSON.stringify(arr))
    }
    else{
        x=localStorage.getItem('item')
        arr=JSON.parse(x);
        arr.push([tit,doc,p,t])
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
t=false
function show(){
    
    if(t===false){
        document.getElementById('table').style.display='table';
        t=true;
    }
    else{
        document.getElementById('table').style.display='none';
        t=false;
    }
}
window.onload=function(){
    document.getElementById('add').addEventListener('click', insert);
    document.getElementById('clear').addEventListener('click', cleaR);
    document.getElementById('toggle').addEventListener('click',show);
    
}

   
