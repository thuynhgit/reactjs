var express = require('express');
var router = express.Router();

//Ripple
const RippleAPI = require('ripple-lib').RippleAPI; // const api = new RippleAPI({server:'wss://s.altnet.rippletest.net:51233/'});
const api = new RippleAPI({server:'wss://s1.ripple.com'}); // const acc = new Account('rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv');
const address = "rJb5KsHsDHF1YS5B5DU6QCkH5NsPaKQTcy";
api.on('error', (errorCode, errorMessage) => {
  console.log(errorCode + ': ' + errorMessage);
});

api.on('connected', () => {
  console.log('connected');
});

api.on('disconnected', (code) => {
   console.log('disconnected, code:', code);
});

router.get('/genaccount', (req,res) => {
  api.connect().then(() => {
    let account = api.generateAddress()
    return res.send(account);
  }).then(() => {
    return api.disconnect();
  }).catch(console.error);

});

router.get('/explorer', function(req, res){
  // var address = req.body.address;
  api.connect()
  .then(async () => {
    let info = await api.isValidAddress(address);
    // console.log(JSON.stringify(info, undefined,10))
    res.send(info);
  }).catch((err) => console.log(err));
});

module.exports = router;
