// get menu item data
const getOrderitems = () => new Promise((resolve, reject) => {
    axios.get(`${dbUrl}/orderItems.json`)
      .then((response) => resolve(Object.values(response.data)))
      .catch((error) => reject(error));
  });

  export default getOrderitems;