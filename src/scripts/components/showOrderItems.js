import clearDom from '../helpers/auth/clearDom';

const showOrderItems = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div id="menuItemView">
  </div>`;
  console.warn(obj.menuItemObj);

  obj.menuItemObj.forEach((item) => {
    // console.warn();
    document.querySelector('#menuItemView').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
       <h5 class="card-title">${item.menuItem}
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.itemPrice}</li>
      </ul>
        <div class="card-body">
          <button type="button" id="edit-MenuItem--${item.firebaseKey}" class="btn btn-outline-info">Edit</button>
          <button type="button" id="delete-menuItem--${item.firebaseKey}" class="btn btn-outline-danger">Delete</button>
        </div>
    </div>`;
  });
};

export default showOrderItems;
