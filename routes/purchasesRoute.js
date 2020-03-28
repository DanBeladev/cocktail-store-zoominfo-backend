import express from 'express';
import purchases from '../controllers/purchasesController';

const router = express.Router();

router.get('/', purchases.getPurchases)
        .post('/', purchases.addPurchase)
        .delete('/',purchases.deletePurchases);

module.exports = router;
