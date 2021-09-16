import clearDom from '../helpers/auth/clearDom';

const viewRevenuePage = () => {
  clearDom();
  document.querySelector('#view').innerHTML = `
    <div>
      <h1>REVENUE</h1>
    </div>
    <div
      <h1>TOTAL REVENUE: </h1>
    </div>
    <div>
      <h3>DATE RANGE:</h3><br>
      <h3>Interpolate Dates<h3>
    </div>
    <div>
      <h3>TOTAL TIPS:  </h3><br>
      <h3>TOTAL CALL IN ORDERS:  </h3><br>
      <h3>TOTAL WALK IN ORDERS:  </h3>
    </div>
    <div>
        <h3>PAYMENT TYPES: </h3><br>
        <h3>CASH: </h3><br>
        <h3>CREDIT: </h3><br>
        <h3>MOBILE: </h3>
    </div>
  `;
};
export default viewRevenuePage;
