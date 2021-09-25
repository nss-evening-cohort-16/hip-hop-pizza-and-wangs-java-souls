import selectOrderItem from './selectOrderItem';

const itemsInCart = (item) => {
  document.querySelector('#cart-container').innerHTML += `
  <div class="card outside-card">
  <div class="card middle-card">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${item.menuItem}
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">$ ${item.itemPrice}</li>
      </ul>
        <div class="card-body btn-div">
          <button type="button" id="delete-menuItem--${item.firebaseKey}" class="btn btn-outline-danger">Delete Item</button>              
        </div>
      </div>
    </div>
  </div>
</div>`;
  selectOrderItem(`${item.firebaseKey || ''}`);
};
export default itemsInCart;
