## Object Oriented Test Driven Javascript + Packaging

- - -

### IE6 style javascript

`pint.js`
```js
var httpMethod = 'GET',
    url = 'http://photos.example.net/photos',
    parameters = {
        oauth_consumer_key : 'dpf43f3p2l4k3l03',
        oauth_token : 'nnch734d00sl2jdk',
  		oauth_nonce : 'kllo9940pd9333jh',
  		oauth_timestamp : '1191242096',
  		oauth_signature_method : 'HMAC-SHA1',
  		oauth_version : '1.0',
  		file : 'vacation.jpg',
  		size : 'original'
  	},
  	consumerSecret = 'kd94hf93k423kf44',
  	tokenSecret = 'pfkkdhi9sl3r4s00',
  	encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);
```
- - -

## Example 2


### Example 3