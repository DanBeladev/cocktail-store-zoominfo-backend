import request from 'request';
import { NUMBER_OF_PRODUCTS, RANDOM_DRINK_URL } from '../common/constants';

let products = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const getProductsFromMemory = (req, res) => res.send(products);

const initializeProducts = () => {
  getProducts(
    NUMBER_OF_PRODUCTS,
    data => {
      products = [...data];
    },
    err => {
      res.send(err);
    }
  );
};

/*
this function fetch here multiple items from external API one-by-one and aggregate the
results because the free-api allow only single result at a time
 */
function getProducts(count, onSuccess, onError) {
  let promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(
      new Promise(resolve => {
        request(RANDOM_DRINK_URL, { json: true }, (err, res) => {
          if (err) {
            reject(err);
          }
          const drink = res.body.drinks[0];
          const product = {
            id: drink.idDrink,
            title: drink.strDrink,
            picture: drink.strDrinkThumb,
            description: drink.strInstructions,
            price: getRandomInt(50)
          };

          resolve(product);
        });
      })
    );
  }
  Promise.all(promises)
    .then(results => {
      onSuccess(results);
    })
    .catch(err => onError(err));
}

module.exports = {
  initializeProducts,
  getProductsFromMemory
};
