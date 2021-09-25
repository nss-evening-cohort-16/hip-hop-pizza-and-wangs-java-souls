import clearDom from '../helpers/auth/clearDom';

const showOrders = (array) => {
  clearDom();

  array.forEach((item) => {
    if (item.orderStatus === true) {
      document.querySelector('#shop').innerHTML += `
        <div class="card outside-card">
          <div class="card middle-card">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${item.customerName}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Order Status: ${item.orderStatus}</li>
                <li class="list-group-item">Customer Phone: ${item.customerPhoneNumber}</li>
                <li class="list-group-item">Customer Email: ${item.customerEmail}</li>
                <li class="list-group-item">Order Type: ${item.orderType}</li>
                <li class="list-group-item">OrderTotal: $${item.orderTotal}</li>
                <li class="list-group-item">Tip: $${item.tipTotal}</li>
              </ul>
              <div class="card-body">
                <button type="button" id="details-btn--${item.firebaseKey}" class="btn btn-outline-success">Details</button>
                <button type="button" id="edit-btn--${item.firebaseKey}" class="btn btn-outline-warning">Edit</button>
                <button type="button" id="delete-order--${item.firebaseKey}" class="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
          <button type="button" id="close-order--${item.firebaseKey}" class="btn btn-outline-info">Close Order</button>
        </div>`;
    } else {
      document.querySelector('#shop').innerHTML += `
        <div class="card outside-card">
          <div class="card middle-card">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.customerName}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Order Status: ${item.orderStatus}</li>
              <li class="list-group-item">Customer Phone: ${item.customerPhoneNumber}</li>
              <li class="list-group-item">Customer Email: ${item.customerEmail}</li>
              <li class="list-group-item">Order Type: ${item.orderType}</li>
              <li class="list-group-item">OrderTotal: $${item.orderTotal}</li>
              <li class="list-group-item">Tip: $${item.tipTotal}</li>
            </ul>
            <div class="card-body">
              <button type="button" id="details-btn--${item.firebaseKey}" class="btn btn-outline-success">Details</button>
              <button type="button" id="edit-btn--${item.firebaseKey}" class="btn btn-outline-warning">Edit</button>
            </div>
          </div>
        </div>`;
    }
  });
};

export default showOrders;
