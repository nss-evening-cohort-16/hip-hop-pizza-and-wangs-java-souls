import clearDom from '../../helpers/auth/clearDom';
import selectOrderItem from './selectOrderItem';

const orderItemForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-orderItem-form" class="mb-4"> 
  <div class="form-group">
  <label for="orderNum" id="orderNum" value ="${obj.firebaseKey || ''}"</label> 
  </div>       
  <div class="form-group" id="select-Menu">
  </div>
  <button type="button" class="btn btn-success" id="update-menuItem">Add to Cart</button>
  <button type="button" class="btn btn-info" id="payment">Payment</button>
  </form>`;
  // <button type="submit"
  // id="${obj.firebaseKey ? `update-menuItem'--${obj.firebaseKey}` : 'submit-menuItem'}" class="btn btn-primary">Add to cart
  // </button>
  // <i id="update-menuItem" class="fas fa-edit btn btn-info"></i>
  // <i id="order-complete" class="btn btn-danger fas fa-trash-alt"></i>
  selectOrderItem(`${obj.firebaseKey || ''}`);
};
export default orderItemForm;
