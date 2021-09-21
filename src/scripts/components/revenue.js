import clearDom from '../helpers/auth/clearDom';
import {
  getTotalRevenue,
  getTotalTips,
  getTotalWalkInOrders,
  getTotalPhoneOrders,
  getTotalOnlineOrders
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
      <h3>Interpolate Dates<h3><br>
    </div>
    <div>
      <h3 id="totalTips">TOTAL TIPS:  </h3><br>
      <h3 id="phoneOrders">TOTAL CALL IN ORDERS:  </h3><br>
      <h3 id="inPersonOrders">TOTAL WALK IN ORDERS:  </h3><br>
      <h3 id="onlineOrders">TOTAL ON LINE ORDERS:  </h3><br>
    </div>
    <div>
        <h3>PAYMENT TYPES: </h3><br>
        <h3>CASH: </h3><br>
        <h3>CREDIT: </h3><br>
        <h3>MOBILE: </h3>
    </div>
<div>
    `;
  getTotalRevenue();
  getTotalTips();
  getTotalWalkInOrders();
  getTotalPhoneOrders();
  getTotalOnlineOrders();
};
export default viewRevenuePage;
