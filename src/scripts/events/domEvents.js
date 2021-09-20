import showOrders from '../components/orders';
import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder
} from '../helpers/data/ordersData';
import { createOrderitem } from '../helpers/data/orderItemsData';
import paymentForm from '../components/forms/paymentForm';
// import { createOrderitem, getOrderDetails } from '../helpers/data/orderItemsData';
// import showOrderDetails from '../components/showOrderDetails';
import addOrderForm from '../components/forms/orderForm';
import viewRevenuePage from '../components/revenue';

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
      const orderObject = {
        ordernumber,
        tipTotal: document.querySelector('#tipvalue').value,
        paymentMethod
      };
      // ordernumber: document.querySelector('#orderID').value,
      // tipTotal: document.querySelector('#tipvalue').value,
      // paymentMethod: document.querySelector('#transmethod').value
      console.warn(orderObject);
      updateOrder(orderObject);
    }

    // Delete Orders
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteOrder(id).then(showOrders);
      }
    }
  });
};

export default domEvents;
