const searchInput = document.querySelector(".search-input");
const listContainer = document.querySelector(".main-bottom-container");
const addButton = document.querySelector(".addButton");


let list = [];
let listItem;

searchInput.addEventListener('input', (e) => {
    listItem = e.target.value
})

addButton.addEventListener("click", () => {
  if (!listItem) {
    return;
  }

  addItem();
});

const addItem = () => {

  
  let item = document.createElement("div");
  let ltc = document.createElement("div");
  let lt = document.createElement("p");
  let deletexContainer = document.createElement("div");
  let deletex = document.createElement("button");

  item.className = "list-item";

  lt.className = "list-text";
  lt.textContent = listItem;
  ltc.className = "list-text-container";
  ltc.append(lt);

  deletex.className = "deleteButton";
  deletex.textContent = "-";

  deletex.addEventListener('click', () => {
    deleteItem(deletex.id)
  })


 

  deletexContainer.className = "list-delete-container";
  deletexContainer.append(deletex);

  item.append(ltc);
  item.append(deletexContainer);

  list.push(item);

  searchInput.value = '';
  listItem = ''

  


  showList()
};




const deleteItem = (itemId) => {

  for(let i = 0; i < list.length; i++) {
    if(list[i].id === itemId) {
      list.splice(i, 1)
    }
  }


  showList();



}


const showList = () => {
  listContainer.textContent = '';


  for(let i = 0; i < list.length; i++) {
    list[i].id = 'item' + i
    list[i].querySelector('.deleteButton').id = list[i].id
  }



  for (let i = list.length - 1; i >= 0; i--) {
    listContainer.append(list[i])
    console.log(list[i])
  }


  
};
