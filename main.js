let inputField = document.getElementById('inputField');
let addT = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addT.addEventListener('click',function(){
     let  paragraph = document.createElement('p');
     let button = document.createElement('button');
     let button2 = document.createElement('button');
     let tdcontainer1 = document.createElement('div');
     

     paragraph.innerText = inputField.value;
     button.innerText = 'Delete';
     button2.innerText = "Completed";

     paragraph.classList.add('font-semibold','text-2xl');
     button.classList.add('font-semibold','text-white','bg-red-200','px-4');
     button2.classList.add('font-semibold','text-white','bg-amber-200','px-4');
     tdcontainer1.classList.add('flex', 'flex-row' ,'justify-between','gap-4','p-4');

     toDoContainer.appendChild(tdcontainer1);
     tdcontainer1.appendChild(paragraph);
     tdcontainer1.appendChild(button);
     tdcontainer1.appendChild(button2);
      inputField.value = ''
     
     
      button2.addEventListener('click',function() {
        paragraph.style.textDecoration = 'line-through'
     }
     )
     button.addEventListener('click',function (){
        toDoContainer.removeChild(tdcontainer1);
     })
console.log('yoo');

})
