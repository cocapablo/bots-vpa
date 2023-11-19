let botId = '172592529265043';
let phoneNbr = '541157687279';
let bearerToken = 'EAAUOk6srG94BOxZBx58xXVEPrsCrWWAVZB8CzIYdpjLjIuPzZBPJTpeWZCVEfvTOvEHaA7RZA7DZAYWadGb3dFFmG5HRboRV4sUYChcQcwBsLnyTDyMrCbbrOvitBleeuWYgTo7vh8zKApvt31fyjqiRghk1Uq0Kg615gNRliNeRtKNvDCZBSMPZAIT3vHT4nCDWnoTxSEfEKsSysQRucDs4SC5IPNAIfL8MuQZDZD';

let url = 'https://graph.facebook.com/v15.0/' + botId + '/messages';
let data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  template: {
    name:'hello_world',
    language:{ code: 'en_US' }
  }
};

let postReq = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};

fetch(url, postReq)
  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => console.log(error));