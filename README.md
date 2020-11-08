# angular-rem
The angular-rem is based on angularjs.This module is a plug-in based on angularjs framework.
It is fully developed according to Es5 standard. The code modularization specification is still in the stage of AMD specification and CMD specification.
With the deepening of ECMAScript 6 technology, there are a lot of REM libraries.
Therefore, this module will be mainly used to learn JavaScript, and no new version will be released

## Install
You can install this package either with `npm` and  `bower`.

### Dowload

```shell
bower install angular-rem -save
npm install angular-rem -save
```

Before using angular-rem should begin with the introduction of angular,
Then add a `<script>` to your `index.html`:

```html
<html ng-app="app" ng-rem="375">
...
...
<script src="/bower_components/angular/angular.js"></script>
<script src="/bower_components/angular-rem/build/angular-rem.min.js"></script>
...
...
</html>
```

```app.js
var app = angular.module("app", [Rem]);
```

## Documentation

Documentation is of official website

## License

MIT License

Copyright (c) 2017 qq1209974887

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

