import clearDom from '../helpers/auth/clearDom';

const showOrderDetails = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#shop').innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${item.customerName}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.menuitem}</li>
          <li class="list-group-item">${item.itemprice}</li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-outline-info">Edit Item</button>
          <button type="button" class="btn btn-outline-danger">Delete Item</button>
        </div>
    </div>`;
  });

  document.querySelector('#button-container').innerHTML = '<button type="button" class="btn btn-outline-success btn-lg" id="add-items-btn">Add Items</button><button type="button" class="btn btn-outline-primary btn-lg" id="payment-btn">Go To Payment</button>';
};

export default showOrderDetails;
