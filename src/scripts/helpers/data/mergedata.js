import { getSingleOrdeMenuItems } from './orderItemsData';
import { getOrderTotal, getMenuItemsArray } from './menuitems';
// API CALLS FOR BOOKS

const viewOrderMenuItems = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getMenuItemsArray(menuitemarray);
    });
});
const viewOrderTotal = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getOrderTotal(menuitemarray);
    });
});
export { viewOrderMenuItems, viewOrderTotal };
