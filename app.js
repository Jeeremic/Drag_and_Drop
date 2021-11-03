const listItems = document.querySelectorAll('.list-item');
const listContainer = document.querySelectorAll('.list-container');

listItems.forEach(item => {
    item.addEventListener('dragstart', () => {
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging'); 
    });
});

listContainer.forEach(list => {
  list.addEventListener('dragover', e => {
      e.preventDefault()
      console.log(list);
      const afterElement = getDragAfterElement(list, e.clientY);
      const draggable = document.querySelector('.dragging');
      if (afterElement == null) {
        list.appendChild(draggable);
      } else {
        console.log(false)
        list.insertBefore(draggable, afterElement)
      }
    });
  });

  function getDragAfterElement(list , y) {
    const draggableElements = [...list.querySelectorAll('.list-item:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

const addBtn = document.querySelector('.addItem');
const saveBtn = document.querySelector('.saveItem');
const text = document.querySelector('.text');

addBtn.addEventListener('click', () => {
  text.style.display = "block";
  saveBtn.style.display = "block";
  addBtn.style.visible = "hidden";
});

saveBtn.addEventListener('click', addNewItem);

function addNewItem () {
  const input = document.querySelector('.text');
  const list = this.parentElement.previousElementSibling;
  if (input.value != ''){
      const newItem = document.createElement('div');
      newItem.classList.add('list-item');
      newItem.setAttribute('draggable', "true");
      newItem.innerHTML = input.value;
      list.appendChild(newItem);
      input.value = '';
  }
  text.style.display = "none";
  saveBtn.style.display = "none";
  addBtn.style.visible = "hidden";
}