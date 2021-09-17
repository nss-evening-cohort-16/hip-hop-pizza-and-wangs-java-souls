import clearDom from '../../helpers/auth/clearDom';
import selectOrderItem from './selectOrderItem';

const orderItemForm = (obj = {}) => {
    clearDom();
    document.querySelector('#form-container').innerHTML = `
      <form id="submit-orderItem-form" class="mb-4">        
        <div class="form-group" id="select-author">
        </div>        
        <button type="submit" 
          id="${obj.firebaseKey ? `update-orderItem'--${obj.firebaseKey}` : 'submit-orderItem'}" class="btn btn-primary">Add to cart
        </button>
      </form>`;
  
      selectOrderItem(`${obj.orderId || ''}`);
  };
  
  export default orderItemForm;