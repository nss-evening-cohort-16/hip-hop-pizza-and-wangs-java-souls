import clearDom from '../../helpers/auth/clearDom';

const paymentForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
       <form id="submit-payment-form" class="mb-4">
          <div>
          <label for="tipvalue">Tip</label>
          <input type="number" class="form-control" placeholder="$0.0" id="tipvalue" value="0" required>       
         </div>
         <div class="dropdown form-group form-group">
         <div class="dropdown">
         <select class="btn btn-secondary dropdown-toggle" type="button" id="transmethod" >
          <option selected value="Select payment type">Select payment type</option>
          <option value="${obj}--cash">Cash</option>
          <option value="${obj}--CreditCard">CreditCard</option>
          <option value="${obj}--GiftCard">GiftCard</option>
        </select>
        </div></div>    
         <button type="Close Order" 
           id="submit-finish" class="btn btn-outline-primary">Payment
         </button>
       </form>`;
};
export default paymentForm;
