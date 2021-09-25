import clearDom from '../../helpers/auth/clearDom';

const paymentForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <div class="card outside-card">
    <div class="card middle-card">
      <div class="card order-card">
        <form id="submit-payment-form" class="mb-4">
          <div>
            <label for="tipvalue">Tip</label>
            <input type="number" class="form-control form-group" placeholder="$0.0" id="tipvalue" value="0" required>       
          </div>
          <div class="dropdown btn-div form-group">
              <select class="btn btn-outline-warning dropdown-toggle" type="button" id="transmethod" >
              <option selected value="Select payment type">Select payment type</option>
              <option value="${obj}--cash">Cash</option>
              <option value="${obj}--CreditCard">CreditCard</option>
              <option value="${obj}--GiftCard">GiftCard</option>
            </select>
          </div> 
          <div class="btn-div form-group">
            <button type="submit" 
              id="submit-finish" class="btn btn-outline-success">Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>`;
};
export default paymentForm;
