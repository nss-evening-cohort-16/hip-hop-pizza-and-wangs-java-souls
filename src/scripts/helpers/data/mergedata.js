import { getSingleOrdeMenuItems } from './orderItemsData';
import getMenuItemsArray from './menuitems';
// API CALLS FOR BOOKS

const viewOrderMenuItems = (orderFirebaseKey) => new Promise(() => {
  getSingleOrdeMenuItems(orderFirebaseKey)
    .then((menuitemarray) => {
      getMenuItemsArray(menuitemarray);
    });
});
export default viewOrderMenuItems;
