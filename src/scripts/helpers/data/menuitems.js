import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { getSingleOrdeMenuItems } from './orderItemsData';

const dbUrl = firebaseConfig.databaseURL;
const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderTotal = (orderFirebaseKey) => new Promise((resolve, reject) => {
  // let menuitemsflat = 0;
  getSingleOrdeMenuItems(orderFirebaseKey).then((mitems) => {
    const menuItemArray = mitems.map((menuItem) => getSingleMenuItem(menuItem.menuItemID));
    menuItemArray.forEach((item) => {
      Promise.all([...menuItemArray]).then(() => console.warn(item.itemPrice));
    });
  }).catch(reject);
});

// MenuItemsArray.forEach((item) => {
//   const outputItem = Promise.all(getSingleMenuItem(item.menuItemID));
//   console.warn('outputitem', outputItem);
//   menuitemsflat += outputItem.itemPrice;
// }).then(() => resolve(menuitemsflat))

// const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
//   getAuthorBooks(authorId).then((authorsBookArray) => {
//     const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));
//     Promise.all([...deleteBooks]).then(() => resolve(deleteSingleAuthor(authorId)));
//   }).catch(reject);
// });

const getMenuItemsArray = (MenuItemsArray) => {
  const menuitemsflat = [];
  MenuItemsArray.forEach((item) => {
    console.warn('getMenuItemsArray', item);
    getSingleMenuItem(item.menuItemID).then((outputItem) => {
      menuitemsflat.push({ outputItem });
    });
  });
  console.warn('menuitemsflat', menuitemsflat);
};

<<<<<<< HEAD
export { getOrderTotal, getMenuItemsArray, getMenuItemsForOrder };
=======
export { getOrderTotal, getMenuItemsArray, getSingleMenuItem };
>>>>>>> rk-total
