/* Variables*/
let Title = document.getElementById('title') , 
Author = document.getElementById('author') ,
NumOfPages = document.getElementById('pages') , 
SubmitButton = document.getElementById('submit') , 
InfoArea = document.getElementById('InfoArea') , 
Details = document.getElementById('details') ;  

function CreateCard(){
if(!Validation())
console.log(`Please Continue Steps`) ; 
else 
{

    let newDiv = document.createElement('div')  , 
    H3 = document.createElement('h3') , 
    H5 = document.createElement('h5') , 
    h6 = document.createElement('h6') , 
    DeleteButton = document.createElement('button');
    newDiv.className = `shadow p-3 mb-5   col-lg-4 text-center card_info` ; 
    DeleteButton.className=`btn btn-danger delete` ;
    
    H3.textContent = `Title : ${Title.value}` ;
    H5.textContent = `Author : ${Author.value}` ;
    h6.textContent=  `Pages : ${NumOfPages.value}` ; 
    DeleteButton.textContent = `Delete` ; 
DeleteButton.addEventListener('click' , function(){
    this.parentElement.remove();
    AvaliablePragraph();
})
newDiv.appendChild(H3) ; 
newDiv.appendChild(H5) ; 
newDiv.appendChild(h6) ; 
newDiv.appendChild(DeleteButton) ; 
InfoArea.appendChild(newDiv) ;
AvaliablePragraph(); 
}
}
function Validation(){
if(Title.value=='' || Author.value=='' ||NumOfPages =='')
return false ; 
else 
return true ;     
}
function AvaliablePragraph(){
if(InfoArea.childElementCount>0)
Details.style.display ='none' ;    
else 
Details.style.display ='block' ;
}
SubmitButton.addEventListener('click' , CreateCard) ; 