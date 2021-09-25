import clearDom from '../helpers/auth/clearDom';

const showOrderItems = (orderArray) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
  <div id="menuItemView">
  </div>`;

  orderArray.forEach((item) => {
    document.querySelector('#menuItemView').innerHTML += `
      <div class="card outside-card">
        <div class="card middle-card">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${item.menuItem}
            </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">$ ${item.itemPrice}</li>
            </ul>
              <div class="card-body btn-div">
                <button type="button" id="edit-MenuItem--${item.firebaseKey}" class="btn btn-outline-warning">Edit Item</button>
                <button type="button" id="delete-menuItem--${item.firebaseKey}" class="btn btn-outline-danger">Delete Item</button>              
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
};

export default showOrderItems;
