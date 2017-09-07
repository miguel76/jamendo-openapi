# jamendo-openapi
An OpenAPI description of Jamendo API (https://devportal.jamendo.com/)

Disclaimer
----------

The author of this specification does not work for Jamendo. The effort is
independent from Jamendo API development.

This initial version offers only support for two operations of the Jamendo API:
`\tracks` and `\tracks\files`.

The current state is experimental.
While the idea is to extend the current spec to the whole Jamendo API, there is
no defined schedule.

Contributions and feedback are more than welcome! :)

Install module with npm
-----------------------

``` bash
npm install jamendo-openapi
```

Use json description with node.js
---------------------------------

``` js
jamendoSpec = require('jamendo-openapi');
```

Use with node.js and `swagger-client`
-------------------------------------

Install also `swagger-client`:
``` bash
npm install swagger-client
```

Use it (a valid API key is needed for API calls):
``` js
Swagger = require('swagger-client');
jamendoSpec = require('jamendo-openapi');

Swagger(require('jamendo-openapi'))
  .then( client => {
    client.execute({
      securities: {authorized: {apikey_auth: '709fa152'}},
      operationId: 'searchTracks',
      parameters: {search: 'punk'}).then(...);
   });
```

Access spec files
-----------------
``` base
distr/jamendo.json
distr/jamendo.yaml
```
