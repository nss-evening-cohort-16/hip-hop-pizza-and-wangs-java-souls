import clearDom from '../../helpers/auth/clearDom';
import selectOrderItem from './selectOrderItem';

const orderItemForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <div class="card outside-card">
    <div class="card middle-card">
      <div class="card order-card">
        <form id="submit-orderItem-form" class="mb-4"> 
          <div class="form-group">
            <label for="orderNum" id="orderNum" value ="${obj.firebaseKey || ''}"</label> 
          </div>       
          <div class="form-group" id="select-Menu">
          </div>
          <div class="btn-div ">
            <button type="button" class="btn btn-outline-success" id="update-menuItem">Add to Cart</button>
            <button type="button" class="btn btn-outline-warning" value="${obj.firebaseKey || ''}" id="payment"> Proceed to payment</button>
          </div>
        </form>
      </div>
    </div>
  </div>`;
  selectOrderItem(`${obj.firebaseKey || ''}`);
};
export default orderItemForm;
