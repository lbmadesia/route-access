# Route access module

It is best module for Route, you can create many folders and many files anywhere through this module no need to import of route file in root js file, even it work as tree structure,



### Install Dependencies

Step 1.
```
npm i route-access
```
Step 2.
```
npm install express
```

Step 3. ### index.js

```
const express = require('express');
const routeAccess  = require('route-access');

const app = express();

const routePath = 'backend/routes';
routeAccess.access(app,routePath).then((res)=>{
  app.listen(8080);
}).catch((error)=>{
  console.log('Route Build Error : ',error);
});
```


## info
you can also prefix route base on directory it's optional parameter  as if 'panel'is directory name and admin is prefix value.

```
const routePrefix = {'panel':'admin'};
const routePath = 'backend/routes';
routeAccess.access(app,routePath,routePrefix).then((res)=>{
  app.listen(8080);
}).catch((error)=>{
  console.log('Route Build Error : ',error);
});
```

## Issues

If you come across any issues please report them [here](https://github.com/lbmadesia/route-access/issues).

## Contributing
Feel free to create any pull requests for the project. For proposing any new changes or features you want to add to the project, you can send us an email at following addresses.

    (1) Lb Madesia - lbmadesia@gmail.com

# License
This route-access is open-sourced Module licensed under the MIT license

