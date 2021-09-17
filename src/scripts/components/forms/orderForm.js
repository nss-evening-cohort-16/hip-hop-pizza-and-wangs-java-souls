import clearDom from '../../helpers/auth/clearDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
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
           <div class="dropdown form-group form-group">
           <div class="dropdown">
           <button class="btn btn-secondary dropdown-toggle" type="button" id="orderType" data-bs-toggle="dropdown" aria-expanded="false">
             Select Order type
           </button>
           <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
             <li><button  class="dropdown-item" type="button">Phone</button></li>
             <li><button  class="dropdown-item" type="button">In-person</button></li>
           </ul>
         </div>
   
         <button type="submit" 
           id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Submit Order
         </button>
       </form>`;
};
export default addOrderForm;
