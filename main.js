let inputField = document.getElementById('inputField');
let addT = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addT.addEventListener('click',function(){
     let  paragraph = document.createElement('p');
     paragraph.innerText = inputField.value;
     paragraph.classList.add('font-semibold','text-2xl');
     toDoContainer.appendChild(paragraph);
     inputField.value = ''
     paragraph.addEventListener('click',function() {
        paragraph.style.textDecoration = 'line-through'
     }
     )
     paragraph.addEventListener('dblclick',function (){
        toDoContainer.removeChild(paragraph);
     })
console.log('yoo');

})
