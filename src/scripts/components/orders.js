import clearDom from '../helpers/auth/clearDom';

const showOrders = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#shop').innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${item.customerName}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.orderStatus}</li>
          <li class="list-group-item">${item.customerPhoneNumber}</li>
          <li class="list-group-item">${item.customerEmail}</li>
          <li class="list-group-item">${item.orderType}</li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-outline-primary">Details</button>
          <button type="button" class="btn btn-outline-info">Edit</button>
          <button type="button" id="delete-order--${item.firebaseKey}" class="btn btn-outline-danger">Delete</button>
        </div>
      </div>`;
  });
};

export default showOrders;
