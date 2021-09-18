import clearDom from '../../helpers/auth/clearDom';
import selectOrderItem from './selectOrderItem';

const orderItemForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-orderItem-form" class="mb-4">        
  <div class="form-group" id="select-Menu">
  </div>        
      <button type="submit" 
          id="${obj.firebaseKey ? `update-menuItem'--${obj.firebaseKey}` : 'submit-MenuItem'}" class="btn btn-primary">Add to cart
     </button>
  </form>`;
  selectOrderItem(`${obj.orderId || ''}`);
};
export default orderItemForm;
