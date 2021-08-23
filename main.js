const myForm = document.querySelector('#addNew');
const nameInput = document.querySelector('#tasks');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const btnRem = document.querySelector('#removeAll')
divList = document.querySelector('.container')

/* add and remove items */
myForm.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' ) {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'; // innerHTML puts the value inside the original tags
        // disappear after 3 seconds (3000ms)
        setTimeout(()=> msg.remove(),3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value}`
        ));

        userList.appendChild(li);
        createBtn(li);
        /// clear fields
        nameInput.value = '';

    }

}

btnRem.addEventListener('click', onRemove);

/* delete all button action */
function onRemove(a) {
    const allUsers = document.querySelector('#users')
    a.preventDefault();
    console.log(allUsers)
    console.log(allUsers.children.length)
    allUsers.innerHTML=''
    console.log(allUsers)
}

/* add delete button */
function createBtn(li) {
  // create remove button
  const remove = document.createElement('button');
  remove.className = 'btn-icon remove';
  li.appendChild(remove);
}

/* add action to delete button*/
divList.addEventListener('click', (event) => {
    if (event.target.className === 'btn-icon remove') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
    ul.removeChild(li);
      
    }
  });