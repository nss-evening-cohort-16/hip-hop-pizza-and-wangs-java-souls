const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
  <a class="navbar-brand" href="#">
      <img src="https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-java-souls/raw/Development/instructions/hhpw-record.png" alt="logo" width="60" height="48" class="d-inline-block align-text-top">
      Hip Hop Pizza And Wangs
  </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#" id="home">
              Home <span class="sr-only"></span>
            </a>
          </li>  
        <li class="nav-item active">
            <a class="nav-link" href="#" id="viewOrders">
              View Orders <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="createOrder">Create an Order</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="revenue">View Revenue</a>
          </li>
          <div class="logout" id="logout-button">
          </div>
          <li>
        </ul>
      </div>
    </nav>
  `;
};
export default navBar;
