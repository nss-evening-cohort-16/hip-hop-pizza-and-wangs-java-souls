// import geteMenuItems from './menuitems';
import { getSingleOrdeMenuItems } from './orderItemsData';
// API CALLS FOR BOOKS

const viewOrderMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrdeMenuItems(firebaseKey)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export default viewOrderMenuItems;
