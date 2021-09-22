import clearDom from '../../helpers/auth/clearDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <div class="card order-card">
       <form id="submit-menu-form" class="mb-4">
           <div class="form-group">
           <label h5 for="orderName">Order Name</label>
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
           <div class="dropdown form-group form-group">
           <div class="dropdown">
           <select class="btn btn-secondary dropdown-toggle" type="button" id="orderType" >
            <option selected value="Select Order type">Select Order type</option>
            <option value="Phone">Phone</option>
            <option value="In-person">In-person</option>
            <option value="On-line">On-line</option>
          </select>         
         </div>   </div>
         <button type="submit" 
           id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Create Order
         </button>
       </form>
       </div>`;
};

export default addOrderForm;
