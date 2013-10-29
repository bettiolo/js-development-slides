## Object Oriented Test Driven Javascript + Packaging

- - -

### IE6 style javascript

`pint.js`

```js
var capacity = 20; // Fl. oz.
var quantity = 20; // Fl. oz.

function consume (consumedQuantity) {
  if (quantity > 0) {
    quantity -= consumedQuantity;
  }
}

function drink() {
  consume(1);
}

function quaff() {
  consume(4);
}

function downInOne() {
  consume(quantity);
}
```

- - -

### But we are in 2013, TDD?

`pint.spec.js` using [Jasmine](http://pivotal.github.io/jasmine/)

```js
describe('Pint', function () {
  'use strict';

  it('Contains 20 fl. oz. of beer', function () {
    expect(quantity).toEqual(20);
  });

  it('Has 20 fl. oz. of capacity', function () {
    expect(capacity).toEqual(20);
  });
});

describe('Pint Customer', function () {
  'use strict';

  beforeEach(function () {
    quantity = 20;
    capacity = 20;
  });

  it('Drinks, 1 fl. oz. is consumed', function () {
    drink();
    expect(quantity).toEqual(19);
  });

  it('Quaffs, 4 fl. oz. are consumed', function () {
    quaff();
    expect(quantity).toEqual(16);
  });

  it('Drinks and then downs in one, the remaining beer is consumed', function () {
    drink();
    downInOne();
    expect(quantity).toEqual(0);
  });

  it('Cannot drink from a beer that has already been consumed', function () {
    downInOne();
    drink();
    expect(quantity).toEqual(0);
  });

  it('Cannot quaff from a beer that has already been consumed', function () {
    downInOne();
    quaff();
    expect(quantity).toEqual(0);
  });

});
```


Spec runner

![](/screenshots/spec-runner-pint-only.png)


Results

![](/screenshots/jasmine-ok.png)

- - -

### Requirements change

You need to support half pint size

`halfPint.js`

```js
var capacity = 10; // Fl. oz.
var quantity = 10; // Fl. oz.

function consume (consumedQuantity) {
  if (quantity > 0) {
    quantity -= consumedQuantity;
  }
}

function drink() {
  consume(1);
}

function quaff() {
  consume(4);
}

function downInOne() {
  consume(quantity);
}
```


Write the tests and update the spec runner

![](/screenshots/spec-runner-pint-and-halfPint.png)

and ... 


### FAIL

Globals are conflicting because everything is running in the same `window` scope

![](/screenshots/jasmine-ko.png)

Should we rename the variables? Will eventually break.

- - -

### The module pattern

Functions define the scope

`pint.js`

```js
function createPint() { // Constructor
  var capacity = 20; // Private
  var quantity = 20; // Private

  function consume (consumedQuantity) { // Private
    if (quantity > 0) {
      quantity -= consumedQuantity;
    }
  }

  return {
    getCapacity : function () {
      return capacity; // Read Only
    },
    getQuantity : function () {
      return quantity; // Read Only
    },
    drink : function () {
      consume(1); 
    },
    quaff : function () {
      consume(4);
    },
    downInOne : function () {
      consume(quantity);
    }
  };
}
```
repeat for `halfPint.js`


We quickly update the tests to use the 'constructor'

`pint.spec.js`

```js
describe('Pint', function () {
  'use strict';
  
  var pint;

  beforeEach(function () {
    pint = createPint();
  });

  it('Contains 20 fl. oz. of beer', function () {
    expect(pint.getQuantity()).toEqual(20);
  });

  it('Has 20 fl. oz. of capacity', function () {
    expect(pint.getCapacity()).toEqual(20);
  });
});

describe('Pint Customer', function () {
  'use strict';
  
  var pint;

  beforeEach(function () {
    pint = createPint();
  });

  it('Drinks, 1 fl. oz. is consumed', function () {
    pint.drink();
    expect(pint.getQuantity()).toEqual(19);
  });

  it('Quaffs, 4 fl. oz. are consumed', function () {
    pint.quaff();
    expect(pint.getQuantity()).toEqual(16);
  });

  it('Drinks and then downs in one, the remaining beer is consumed', function () {
    pint.drink();
    pint.downInOne();
    expect(pint.getQuantity()).toEqual(0);
  });

  it('Cannot drink from a beer that has already been consumed', function () {
    pint.downInOne();
    pint.drink();
    expect(pint.getQuantity()).toEqual(0);
  });

  it('Cannot quaff from a beer that has already been consumed', function () {
    pint.downInOne();
    pint.quaff();
    expect(pint.getQuantity()).toEqual(0);
  });

});
```
and we update `halfPint.spec.js` as well ...


Results

![](/screenshots/jasmine-all-ok.png)
