import usersRoute from './usersRoute';
import productsRoute from './productsRoute';
import purchasesRoute from './purchasesRoute';

export default app => {
  app.use('/products', productsRoute);

  app.use('/users', usersRoute);

  app.use('/purchases', purchasesRoute);
};
