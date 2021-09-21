import clearDom from '../helpers/auth/clearDom';

const showOrderItems = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div id="menuItemView">
  </div>`;

  obj.menuItemObj.forEach((item) => {
    document.querySelector('#menuItemView').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
       <h5 class="card-title">${item.description}
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.itemPrice}</li>
      </ul>
        <div class="card-body">
          <button type="button" id="edit-btn" class="btn btn-outline-info">Edit</button>
          <button type="button" id="delete-menuItem--${item.firebaseKey}" class="btn btn-outline-danger">Delete</button>
        </div>
    </div>`;
  });
};

export default showOrderItems;
