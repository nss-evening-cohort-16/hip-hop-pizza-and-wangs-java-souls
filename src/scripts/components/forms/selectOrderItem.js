import getOrderItems from '../../helpers/data/orderItemsData';

const selectOrderItem = (OrderItemId) => {
  let domString = `<label for="OrderItem_id">Select a Menu Item</label>
    <select class="form-control" id="OrderItem_id" required>
    <option value="">Select a Menu Item</option>`;

    getOrderItems().then((orderItemArray) => {
      orderItemArray.forEach((orderItem) => {
      domString += `
          <option 
            value="${orderItem.firebaseKey}" 
            ${OrderItemId === orderItem.firebaseKey ? 'selected' : ''}>
              ${orderItem.menuItem} ${orderItem.itemPrice}
          </option>`;
    });

    domString += '</select>';

    document.querySelector('#select-orderItem').innerHTML = domString;
  });
};

export default selectOrderItem;
