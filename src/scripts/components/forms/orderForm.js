// import clearDom from '../../helpers/data/clearDom';
// import selectAuthor from './selectAuthor';

const addBookForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-order-form" class="mb-4">
      <div class="form-group">
        <label for="orderName">Order Name</label>
        <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter your Name" value="${obj.customerName || ''}" required>
        </div>
        <div class="form-group">
        <label for="phone">Description</label>
        <input type="number" class="form-control" placeholder="Phone Number - enter numbers only" id="phone" style="height: 100px">${obj.customerPhoneNumber || ''}" required>
        </div>
        <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Enter Email" id="email" style="height: 100px">${obj.customerEmail || ''}" required>
        </div>
        <div class="dropdown form-group form-group">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="orderType" data-bs-toggle="dropdown" aria-expanded="false">
          Select Order type
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button id="methodphone" class="dropdown-item" type="button">Phone</button></li>
          <li><button id="methodperson" class="dropdown-item" type="button">In-person</button></li>
        </ul>
      </div>

      <button type="submit" 
        id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Submit Order
      </button>
    </form>`; 
};

export default addBookForm;
