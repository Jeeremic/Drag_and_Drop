// const listItems = document.querySelectorAll('.list-item');
// const lists = document.querySelectorAll('.list');

// let draggedItem = null;
// for (let i = 0; i < listItems.length; i++) {
//     const item = listItems[i];
//     item.addEventListener('dragstart', function () {
//         draggedItem = item;
//         setTimeout(function() {
//             item.style.display = 'none';
//         }, 0);
//     });

//     item.addEventListener('dragend', function () {
//         setTimeout(function () {
//             draggedItem.style.display = 'block';
//             draggedItem = null;
//         }, 0);
//     }); 

//     for (let j = 0; j < lists.length; j++) {
//         const list = lists[j];
//         list.addEventListener('dragover', function (e) {
//             e.preventDefault();
//         });
//         list.addEventListener('dragenter', function (e) {
//             e.preventDefault();
//             this.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
//         })
//         list.addEventListener('dragleave', function (e) {
//             this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//         })
//         list.addEventListener('drop', function (e) {
//             this.append(draggedItem);
//             this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//         });
//     }
// }






const listItems = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

listItems.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

lists.forEach(list => {
    list.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        list.appendChild(draggable)
      } else {
        list.insertBefore(draggable, afterElement)
      }
    })
  })
  

  function getDragAfterElement(list, y) {
    const draggableElements = [...list.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }





































// const btnAdd = document.querySelectorAll('.addItem');
// const btnSave = document.querySelectorAll('.saveItem');
// const list = document.querySelector('.list');

// btnAdd.forEach( btn => {
//     btn.addEventListener('click', () => {
//         console.log('add');
//         btnSave.classList.add('visibleButton');
//     })
// })



// // btnAdd.addEventListener('click', newItem);

// // function newItem() {
// //     console.log('add');
// //     list.style.display = "none";
// // }



// // btnAdd.onclick = function(e) {
// //     btnSave.style.display = "block";
// //     e.preventDefault();
// //   }

// //   <div id="myModal" class="modal">
// // let modal = document.querySelector('.modal');
