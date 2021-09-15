import clearDom from '../../helpers/auth/clearDom';

const showHSbuttons = (array) => {
  clearDom();

  array.forEach(() => {
    document.querySelector('#shop').innerHTML += `
    <div class="card">
        <div>
            <div class="hsBtn viewOrdersBtn">View Orders</div>
            <div class="hsBtn createOrderBtn">Create an Order</div>
            <div class="hsBtn viewRevenueBtn">View Revenue</div>
        </div>
    </div>
    `;
  });
};

export default showHSbuttons;
