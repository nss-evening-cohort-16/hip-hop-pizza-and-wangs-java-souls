import getOrderitems from '../../helpers/data/itemData'

const selectOrderItem = (itemId) => {
  let domString = `<label for="orderItem_id">Select an Item</label>
    <select class="form-control" id="orderItem_id" required>
    <option value="">Select an Item</option>`;

    getOrderitems().then((orderItemArray) => {
      orderItemArray.forEach((item) => {
      domString += `
          <option 
            value="${item.firebaseKey}" 
            ${itemId === item.firebaseKey ? 'selected' : ''}>
              ${itemId.menuItem} ${itemId.itemPrice}
          </option>`;
    });

    domString += '</select>';

    document.querySelector('#select-orderItem').innerHTML = domString;
  });
};

export default selectOrderItem;