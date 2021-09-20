import clearDom from '../../helpers/auth/clearDom';

const paymentForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
       <form id="submit-menu-form" class="mb-4">

          <div class="form-group">
          <label for="tipvalue">Tip</label>
          <input type="number" class="form-control" placeholder="number" id="tipvalue" value="${obj.tip || ''}" required>       
         </div>
         <div class="dropdown form-group form-group">
         <div class="dropdown">
         <select class="btn btn-secondary dropdown-toggle" type="button" id="paymentType" >
          <option selected value="Select payment type">Select payment type</option>
          <option value="cash">Cash</option>
          <option value="CreditCard">CreditCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        </div>    
         <button type="submit" 
           id="submit-payment" class="btn btn-primary">Payment
         </button>
       </form>`;
};
export default paymentForm;
