import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const geteMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/menuItem.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
export default geteMenuItems;
