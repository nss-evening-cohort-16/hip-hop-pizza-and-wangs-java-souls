import clearDom from '../helpers/auth/clearDom';

const showOrderItems = (array) => {
  console.warn(array);
  clearDom();
  document.querySelector('#view').innerHTML += `
  <div id="menuItemView">
  </div>`;

  const buttons = () => {
    array.orderMenuItemArray.forEach((elm) => {
      console.warn(elm.orderID, 'show id');
      document.querySelector('#menuItemView').innerHTML += `
          <div id="orderId"class=" card del-btn-card card-body btn-div">
                      <button type="button" id="delete-menuItem--${elm.firebaseKey}---${elm.orderID}" class="btn btn-outline-danger">Delete Item</button>              
                    </div>
          `;
    });
  };

  array.orderArray.forEach((item) => {
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
            <div id="orderId"class="card-body btn-div">
            <button type="button" id="edit-MenuItem--${item.firebaseKey}" class="btn btn-outline-warning">Edit Item</button>
          </div>${buttons()}
            </div> 
          </div>
        </div>
      </div>`;
  });
  array.orderMenuItemArray.forEach((elm) => {
    console.warn(elm.orderID, 'show id');
    document.querySelector('#menuItemView').innerHTML += `
        <div id="orderId"class=" card del-btn-card card-body btn-div">
                    <button type="button" id="delete-menuItem--${elm.firebaseKey}---${elm.orderID}" class="btn btn-outline-danger">Delete Item</button>              
                  </div>
        `;
  });
};

export default showOrderItems;
