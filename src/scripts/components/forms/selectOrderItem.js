import { getMenuItems } from '../../helpers/data/orderItemsData';

const selectOrderItem = (menuItemId) => {
  let domString = `<label for="OrderItem_id">Select a Menu Item</label>
    <select class="form-control" id="OrderItem_id" required>
    <option value="">Select a Menu Item</option>`;

  getMenuItems().then((menuItemArray) => {
    menuItemArray.forEach((menuItem) => {
      domString += `
          <option 
            value="${menuItemId}--${menuItem.firebaseKey}" >
              ${menuItem.menuItem} -- ${menuItem.itemPrice}
          </option>`;
    });
    domString += '</select>';
    document.querySelector('#select-Menu').innerHTML = domString;
  });
};

export default selectOrderItem;
