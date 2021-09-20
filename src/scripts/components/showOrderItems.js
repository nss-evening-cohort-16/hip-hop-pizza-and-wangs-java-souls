import clearDom from '../helpers/auth/clearDom';

const showOrderItems = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#shop').innerHTML += `
    <div class="card" style="width: 30rem;">
        <div class="card-body">
         <h5 class="card-title">${item.menuItem}</h5>
             <h6 class="card-subtitle mb-2 text-muted">${item.itemPrice}</h6>
             <a href="#" class="card-link">Card link</a>
             <a href="#" class="card-link">Another link</a>
        </div>
    </div>`;
  });

  document.querySelector('#button-container').innerHTML = '<button type="button" class="btn btn-outline-success btn-lg" id="add-items-btn">Add Items</button><button type="button" class="btn btn-outline-primary btn-lg" id="payment-btn">Go To Payment</button>';
};

export default showOrderItems;
