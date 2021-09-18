import showOrders from '../components/orders';
import { getOrders, createOrder, deleteOrder } from '../helpers/data/ordersData';
import orderItemForm from '../components/forms/orderItemForm';
import { createOrderitem, getOrderDetails } from '../helpers/data/orderItemsData';
import showOrderDetails from '../components/showOrderDetails';
// import createOrders()
// import getRevenue()

const createOrders = () => {
  console.warn('Creating Orders');
};

const getRevenue = () => {
  console.warn('Getting Revenue');
};

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders-button')) {
      getOrders().then((orderCards) => showOrders(orderCards));
    }
    if (e.target.id.includes('create-order-button')) {
      console.warn('create-order-button');
      createOrders();
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
      createOrder(orderObject).then(orderItemForm(orderObject));
    }

    if (e.target.id.includes('submit-MenuItem')) {
      e.preventDefault();
      console.warn('submit-MenuItem');
      console.warn(document.querySelector('#OrderItem_id').selectedOptions[0].text);
      console.warn(document.querySelector('#OrderItem_id').selectedOptions[0].value);
      const [menu, price] = document.querySelector('#OrderItem_id').selectedOptions[0].text.split('--');
      const orderObject = {
        menuitem: menu,
        itemprice: price,
        orderId: document.querySelector('#OrderItem_id').selectedOptions[0].value,
        menuItemID: document.querySelector('#OrderItem_id').selectedOptions[0].value
      };
      createOrderitem(orderObject).then(orderItemForm(orderObject));
      getOrderDetails().then((orderCards) => showOrderDetails(orderCards));
    }

    if (e.target.id.includes('view-revenue-button')) {
      getRevenue();
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
