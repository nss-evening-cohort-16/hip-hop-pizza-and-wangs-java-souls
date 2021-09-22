import clearDom from '../../helpers/auth/clearDom';

const addUpdateForm = (obj = {}) => {
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
           <select class="btn btn-secondary dropdown-toggle" type="button" id="orderType" >
            <option selected value="Select Order type">Select Order type</option>
            <option value="Phone">Phone</option>
            <option value="In-person">In-person</option>
            <option value="On-line">On-line</option>
          </select>         
         </div>   </div>
         <button type="submit" 
           id="submitEdit-order--${obj.firebaseKey}" class="btn btn-primary">Update Order
         </button>
       </form>`;
};
export default addUpdateForm;