let purchases = [];

exports.getPurchases = (req, res) => {
  if (purchases.length <= 0) {
    res.json({ purchases, message: 'No purchases available' });
    return;
  }
  res.json(purchases);
};

exports.addPurchase = (req, res) => {
  if (!req.body) {
    res.status('401').json('invalid request');
    return;
  }
  if (!req.body.user) {
    res.status('402').json('missing user information');
    return;
  }
  if (!req.body.product) {
    res.status('403').json('missing product information');
    return;
  }
  const newPurchase = req.body;
  purchases.push(newPurchase);
  res.json(purchases);
};