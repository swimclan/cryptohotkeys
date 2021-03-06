## Crypto Hot Keys Application Changelog

### v0.14.0
* *Feature* Stop loss control
* *Feature* `fills` endpoint

### v0.13.0
* *Feature* Global gdax exchange object with setter in `app.locals`
* *Feature* Websocket test endpoint takes param for message event to test

### v0.12.0
* *Feature* Trade params can be sent as payload in the request and fallback to config defaults

### v0.11.0
* *Feature* Introduced CORS middleware for cross domain and cross port requests
* *Feature* `getProducts` endpoint

### v0.10.0
* *Feature* Rounding function for calculating buy/size size;

### v0.9.0
* *Feature* Added initial flash trading service and route
* *Feature* Added tools for parsing accounts and calculating trade sizes

### v0.8.0
* *Feature* Moved to services for all data fetching from api
* *Feature* Trading service to execute buying and selling on exchange

### v0.7.0
* *Feature* Config service for storing preferences

### v0.6.0
* *Feature* `productTicker` endpoint
* *Fix* Fixed the gdax websocket and public client instantiation to use currency pair in constructor

### v0.5.0
* *Feature* Websocket connector and test endpoint

### v0.4.0
* *Feature* `cancelOrder` and `cancelOrders` endpoints

### v0.3.0
* *Feature* `getOrder` and `getOrders` endpoints

### v0.2.0
* *Feature* `getAccount` endpoint

### v0.1.0
* *Feature* `getAccounts` endpoint
* *Feature* GDAX authed and public client integration

### v0.0.1
* *Feature* Initial commit of repository and application server