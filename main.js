let inputField = document.getElementById('inputField');
let addT = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addT.addEventListener('click',function(){
     let  paragraph = document.createElement('input');
     let button = document.createElement('button');
     let button2 = document.createElement('button');
     let button3 = document.createElement('button');
     let tdcontainer1 = document.createElement('div');
     let tdcontainer2 = document.createElement('div');

     

     paragraph.type = 'text'
     paragraph.value = inputField.value;
     paragraph.setAttribute('readonly','readonly')
     button.innerText = 'Delete';
     button2.innerText = "Completed";
     button3.innerText = 'Edit'

     paragraph.classList.add('font-semibold','text-2xl','outline-none');
     button.classList.add('font-semibold','text-white','bg-red-200','px-4');
     button2.classList.add('font-semibold','text-white','bg-amber-200','px-4');
     button3.classList.add('font-semibold','text-white','bg-blue-200','px-4')
     tdcontainer1.classList.add('flex', 'flex-row' ,'justify-between','gap-4','p-4','max-w-md');
     tdcontainer2.classList.add('w-1/2');

     toDoContainer.appendChild(tdcontainer1);
     tdcontainer1.appendChild(tdcontainer2);
     tdcontainer2.appendChild(paragraph);
     tdcontainer1.appendChild(button2);
     tdcontainer1.appendChild(button3);
     tdcontainer1.appendChild(button);
      inputField.value = ''

      button3.addEventListener('click', () =>{
               
         paragraph.removeAttribute('readonly');
         paragraph.focus();
      })     
     
      button2.addEventListener('click',function() {
        paragraph.style.textDecoration = 'line-through'
     }
     )
     button.addEventListener('click',function (){
        toDoContainer.removeChild(tdcontainer1);
     })

     console.log('yoo');
})
