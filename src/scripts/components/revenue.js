import clearDom from '../helpers/auth/clearDom';
import {
  getTotalRevenue,
  getTotalTips,
  getTotalWalkInOrders,
  getTotalPhoneOrders,
  getTotalOnlineOrders,
  getRangeofDates,
  getTotalCashOrders,
  getTotalCreditOrders,
  getTotalGiftCardOrders
} from '../helpers/data/revenueData';

const viewRevenuePage = () => {
  clearDom();
  document.querySelector('#view').innerHTML = `
<div class="revenuePage">  
  <div class="revenueHeader">
      <h1>REVENUE</h1>
    </div>
    <div class="totalRevenueHeader">
      <h1 id="totalRevenue">TOTAL REVENUE: </h1>
    </div>
    <div>
      <h3>DATE RANGE:</h3><br>
      <h3 id="dateRange"><h3><br>
    </div>
    <div>
      <h3 id="totalTips">TOTAL TIPS:  </h3><br>
      <h3 id="phoneOrders">TOTAL CALL IN ORDERS:  </h3><br>
      <h3 id="inPersonOrders">TOTAL WALK IN ORDERS:  </h3><br>
      <h3 id="onlineOrders">TOTAL ON LINE ORDERS:  </h3><br>
    </div>
    <div class="paymentType">
        <h3>PAYMENT TYPES: </h3><br>
        <h3 id="cashOrders">CASH: </h3><br>
        <h3 id="creditOrders">CREDIT: </h3><br>
        <h3 id="giftCardOrders">Gift Cards: </h3>
    </div>
<div>
    `;
  getTotalRevenue();
  getTotalTips();
  getTotalWalkInOrders();
  getTotalPhoneOrders();
  getTotalOnlineOrders();
  getRangeofDates();
  getTotalCashOrders();
  getTotalCreditOrders();
  getTotalGiftCardOrders();
};
export default viewRevenuePage;
