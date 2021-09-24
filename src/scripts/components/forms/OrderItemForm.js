import clearDom from '../../helpers/auth/clearDom';
import selectOrderItem from './selectOrderItem';

const orderItemForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <div class="card order-card">
    <form id="submit-orderItem-form" class="mb-4"> 
    <div class="form-group">
      <label for="orderNum" id="orderNum" value ="${obj.firebaseKey || ''}"</label> 
    </div>       
    <div class="form-group" id="select-Menu">
    </div>
    <div class="btn-div">
      <button type="button" class="btn btn-outline-success" id="update-menuItem">Add to Cart</button>
      <button type="button" class="btn btn-outline-info" value="${obj.firebaseKey || ''}" id="payment"> Proceed to payment</button>
    </div>
    </form>
  </div>`;
  // <button type="submit"
  // id="${obj.firebaseKey ? `update-menuItem'--${obj.firebaseKey}` : 'submit-menuItem'}" class="btn btn-primary">Add to cart
  // </button>
  // <i id="update-menuItem" class="fas fa-edit btn btn-info"></i>
  // <i id="order-complete" class="btn btn-danger fas fa-trash-alt"></i>
  selectOrderItem(`${obj.firebaseKey || ''}`);
};
export default orderItemForm;
