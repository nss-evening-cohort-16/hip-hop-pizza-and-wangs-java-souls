import clearDom from '../../helpers/auth/clearDom';

const addUpdateMenuItemForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-author-form" class="mb-4">
<div class="form-group">
      <label for="itemName">Item Name</label>
      <input type="text" class="form-control" id="itemName" placeholder="${obj.menuItem}" value= "${obj.menuItem || ''}"required>
    </div>
<div class="form-group">
  <label for="itemPrice">Item Price</label>
  <input type="number" class="form-control" id="itemPrice" aria-describedby="itemPrice" placeholder="${obj.itemPrice}" value="${obj.itemPrice || ''}" required>
</div>
<button type="submit" 
id="update-MenuItemSubmit--${obj.firebaseKey}}" class="btn btn-primary">Update Item</button>
</form>
    `;
};
export default addUpdateMenuItemForm;
