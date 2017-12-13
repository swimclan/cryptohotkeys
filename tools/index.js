module.exports.calcTrade = (side, fraction, product, accounts, increment, sigDig, tick) => {
  //console.log({side, fraction, product, accounts, increment, sigDig, tick});
  let bid = Number(tick.bid);
  let ask = Number(tick.ask);
  let last = Number(tick.price);
  let acctsides = this.parseAccounts(product, accounts);
  let available, size, price, params;
  switch (side) {
    case 'buy':
      available = acctsides.sell.available;
      price = (ask - increment).toFixed(sigDig).toString();
      size = ((available * fraction / price)).toString();
      console.log(size);
      break;
    case 'sell':
      available = acctsides.buy.available;
      size = (available * fraction).toString();
      price = (bid + increment).toFixed(sigDig).toString();
      break;
  }
  return {
    product_id: product,
    size: size,
    price: price
  };
}

module.exports.parseAccounts = (product, accounts) => {
  let sides = product.split('-');
  let ret = {buy: null, sell: null};
  accounts.forEach((account) => {
    if (account.currency === sides[0]) {
      ret.buy = account
    } else if (account.currency === sides[1]) {
      ret.sell = account;
    }
  });
  return ret;
}