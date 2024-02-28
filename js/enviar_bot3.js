let botId = '172592529265043';
let phoneNbr = '541157687279';
let bearerToken = 'EAAUOk6srG94BO66XgXUM1PUDuVYjYB5zmyvFcAoZCijvRdZBZCOAfsy02JZCw2D9Epay4qt1zoc57zczUPmZBTwtEW0v9vtd5a0JbnLdESCqT3AZAlKTALPMlupZC7zyMlaoSOMZAZA15iX7GrOSIwEpmVqXdOcX7hMUZBGnyolOHHSVoUMzRbxxqCNjlJbFdigUz6fkEZBhpuktDX9MZBNV';

let url = 'https://graph.facebook.com/v15.0/' + botId + '/messages';
let data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  template: {
    name:'mensaje_bot3',
    language:{ code: 'es_AR' },
    "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "Pablo Coca"
            },
            {
              "type": "currency",
              "currency": {
                "fallback_value": "1",
                "code": "ARS",
                "amount_1000": "100000"
              }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            },
            {
                "type": "currency",
                "currency": {
                  "fallback_value": "1",
                  "code": "ARS",
                  "amount_1000": "100000000"
                }
            }
          ]
        }
    ]
  },
  
    
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