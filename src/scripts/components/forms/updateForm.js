import clearDom from '../../helpers/auth/clearDom';

const addUpdateForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <div class="card order-card">
    <form id="submit-menu-form" class="mb-4">
    <div class="form-group">
      <label for="orderName">Order Name</label>
      <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter your Name" value="${obj.customerName || ''}" required>
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="number" class="form-control" id="phone" placeholder="Phone Number - enter numbers only" value="${obj.customerPhoneNumber || ''}" required>
    </div>
    <div class="form-group">
      <label for="custemail">Email</label>
      <input type="email" class="form-control" placeholder="Enter Email" id="custemail" value="${obj.customerEmail || ''}" required>
    </div>
    <div class="dropdown btn-div form-group">
      <select class="btn btn-outline-warning dropdown-toggle" type="button" id="orderType" >
        <option selected value="Select Order type">Select Order type</option>
        <option value="Phone">Phone</option>
        <option value="In-person">In-person</option>
        <option value="On-line">On-line</option>
      </select> 
    </div>
    <div class="btn-div form-group">
      <button type="submit" 
        id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-outline-primary">Create Order
      </button>
    </div>
    </form>
  </div>`;
};
export default addUpdateForm;
