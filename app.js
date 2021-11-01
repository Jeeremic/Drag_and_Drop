const btnAdd = document.querySelectorAll('.addItem');
const btnSave = document.querySelectorAll('.saveItem');
const list = document.querySelector('.list');

btnAdd.forEach( btn => {
    btn.addEventListener('click', () => {
        console.log('add');
        btnSave.classList.add('visibleButton');
    })
})



// btnAdd.addEventListener('click', newItem);

// function newItem() {
//     console.log('add');
//     list.style.display = "none";
// }



// btnAdd.onclick = function(e) {
//     btnSave.style.display = "block";
//     e.preventDefault();
//   }

//   <div id="myModal" class="modal">
// let modal = document.querySelector('.modal');
