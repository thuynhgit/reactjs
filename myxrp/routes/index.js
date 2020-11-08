var express = require('express');
var router = express.Router();

//Ripple
const RippleAPI = require('ripple-lib').RippleAPI;
// const api = new RippleAPI({server:'wss://s.altnet.rippletest.net:51233/'});
const api = new RippleAPI({server:'wss://s1.ripple.com'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'XRP Crypto - Tools' });
});
//Code
router.get('/wallet', function(req, res){
  res.render("wallet");
});
// //Test page
router.get('/test', function(req, res){
  res.render('test', {title:'test'});
});
//Explorer page
router.get('/explorer', function(req, res){
  res.render('explorer', {data:{title:'Explorer'}});
});

router.post('/explorer', function(req, res){
  var address = req.body.address;
  api.connect()
  .then(() => {
      return api.getAccountInfo(address);
  }).then((info) => {
    res.render('explorer', {data:{title:'Explorer', address:address, balance:info.xrpBalance}});
  }).catch((err) => console.log(err));
});

//Payment
router.get('/payment', function(req, res, next) {
  res.render('payment', {data:{title:'Payment - Send XRP'}});
});

router.post('/payment', function(req, res, next) {
  const sourceAddress = req.body.sourceAddress;
  const destinationAddress = req.body.destinationAddress;
  const amount = req.body.amount;
  const secretAddress = req.body.secretAddress;

  const createPaymentTransaction = (api, sourceAddress, destinationAddress, amount) => {
    const payment = {
        'source': {
            'address': sourceAddress,
            'maxAmount': {
                'value': amount.toString(),
                'currency': 'XRP',
            }
        },
        'destination': {
            'address': destinationAddress,
            'amount': {
                'value': amount.toString(),
                'currency': 'XRP',
            }
        }
    };

    const instructions = {
        maxLedgerVersionOffset: 5,
        fee: '0.1',
    };
    return api.preparePayment(sourceAddress, payment, instructions);
  };

  api.connect().then(() => {
    return api.getAccountInfo(sourceAddress);
  }).then(src =>{
    console.log(src);
    return api.getAccountInfo(destinationAddress);
  }).then(dest =>{
    console.log(dest);
    return createPaymentTransaction(api, sourceAddress, destinationAddress, amount);
  }).then(prepared => {
    //sign payment transaction
    const sign = api.sign(prepared.txJSON, secretAddress);
    //submit 
    return api.submit(sign.signedTransaction);
  }).then(ress => {
    res.render('payment', {data:{title:'Payment - Send XRP', resultCode:ress.resultCode}});
    if(ress.resultCode !== 'tesSUCCESS'){
        throw new Error(ress.resultMessage);
    }
    return api.disconnect();
  }).then(() => {
    console.log('done and disconnected.');
  }).catch(console.error);


});

module.exports = router;
