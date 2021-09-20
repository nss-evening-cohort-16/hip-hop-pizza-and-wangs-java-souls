import showOrders from '../components/orders';
import {
  getOrders,
  createOrder,
  deleteOrder,
  getSingleOrder
} from '../helpers/data/ordersData';
import { createOrderitem } from '../helpers/data/orderItemsData';
import paymentForm from '../components/forms/paymentForm';
// import { createOrderitem, getOrderDetails } from '../helpers/data/orderItemsData';
// import showOrderDetails from '../components/showOrderDetails';
import addOrderForm from '../components/forms/orderForm';
import viewRevenuePage from '../components/revenue';
import viewOrderItems from '../helpers/data/merdedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrders')) {
      getOrders().then((orderCards) => showOrders(orderCards));
    }
    if (e.target.id.includes('createOrder')) {
      addOrderForm();
    }
    if (e.target.id.includes('revenue')) {
      viewRevenuePage();
    }
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      console.warn('submit-order');
      const orderObject = {
        customerEmail: document.querySelector('#custemail').value,
        customerName: document.querySelector('#orderName').value,
        customerPhoneNumber: document.querySelector('#phone').value,
        orderStatus: '',
        orderTotal: 0,
        orderType: document.querySelector('#orderType').value,
        paymentMethod: '',
        timeStamp: new Date(),
        tipTotal: 0
      };

      createOrder(orderObject);
    }

    if (e.target.id.includes('update-menuItem')) {
      e.preventDefault();
      console.warn(document.querySelector('#OrderItem_id').value);
      const [order, menyItem] = document.querySelector('#OrderItem_id').value.split('--');
      // console.warn(document.querySelector('#orderNum').firebasekey);
      // const [menu, price] = document.querySelector('#OrderItem_id').selectedOptions[0].text.split('--');
      const orderObject = {
        orderID: order,
        menuItemID: menyItem
      };
      createOrderitem(orderObject);
      // createOrderitem(orderObject).then(orderItemForm(orderObject));
      // getOrderDetails().then((orderCards) => showOrderDetails(orderCards));
    }

    if (e.target.id.includes('payment')) {
      e.preventDefault();
      paymentForm();
      console.warn('payment');
    }

    // Delete Orders
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteOrder(id).then(showOrders);
      }
    }
    // VIEW ORDERS
    if (e.target.id.includes('details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderItems(firebaseKey).then(getSingleOrder);
    }
  });
};

export default domEvents;
