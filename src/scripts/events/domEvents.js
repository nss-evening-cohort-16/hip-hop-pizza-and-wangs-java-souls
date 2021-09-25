import showOrders from '../components/orders';
import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder
} from '../helpers/data/ordersData';
// import { viewOrderMenuItems } from '../helpers/data/mergeData';
import { viewOrderTotal, viewOrderItems } from '../helpers/data/mergedata';
import { createOrderitem } from '../helpers/data/orderItemsData';
import paymentForm from '../components/forms/paymentForm';
// import { createOrderitem, getOrderDetails } from '../helpers/data/orderItemsData';
// import showOrderDetails from '../components/showOrderDetails';
import addOrderForm from '../components/forms/orderForm';
import viewRevenuePage from '../components/revenue';
import showOrderItems from '../components/showOrderItems';

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
      const [order, menuItem] = document.querySelector('#OrderItem_id').value.split('--');
      // const [menu, price] = document.querySelector('#OrderItem_id').selectedOptions[0].text.split('--');
      const orderObject = {
        orderID: order,
        menuItemID: menuItem
      };
      createOrderitem(orderObject);
      // viewOrderItems(order).then(showOrderItems);
      // createOrderitem(orderObject).then(orderItemForm(orderObject));
      // getOrderDetails().then((orderCards) => showOrderDetails(orderCards));
    }

    if (e.target.id.includes('payment')) {
      e.preventDefault();
      const ordernum = document.querySelector('#payment').value;
      paymentForm(ordernum);
    }

    if (e.target.id.includes('finish')) {
      e.preventDefault();
      const [ordernumber, paymentMethod] = document.querySelector('#transmethod').value.split('--');
      console.warn('finish', ordernumber, paymentMethod);
      viewOrderTotal(ordernumber).then((orderTotal) => {
        const orderObject = {
          ordernumber,
          tipTotal: document.querySelector('#tipvalue').value,
          paymentMethod,
          orderTotal
        };
        updateOrder(orderObject);
        getOrders().then((orderCards) => showOrders(orderCards));
      });
    }

    // Delete Orders
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        console.warn(id);
        deleteOrder(id).then(showOrders);
      }
    }
    // VIEW ORDERS
    if (e.target.id.includes('details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('dom', firebaseKey);
      viewOrderItems(firebaseKey).then(showOrderItems);
    }
    // DELETE MENU ITEMS
    if (e.target.id.includes('delete-menuItem')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('e.target.id', e.target.id);
      viewOrderItems(firebaseKey).then(showOrderItems);
    }
  });
};

export default domEvents;
