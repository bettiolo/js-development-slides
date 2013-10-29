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

![](screenshots/jasmine-ko.png)

Should we rename the variables? Will eventually break.

- - -

### The module pattern

Functions define scope (if, for, do, ... not!)

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

![](screenshots/jasmine-all-ok.png)

- - -

## Inheritance

We have too much duplicated logic.

- JavaScript is a prototypal language, the `prototype` property is available on each function

- We can use the `prototype` to define a class` scaffolding and a constructor to create an instance

- We can also inherit anoter object's `prototype`

- - -

## Inheritance

Pint and HalfPint inherits from 'abstract' Glass

```js
var Glass = function () { // This will be our base class
  'use strict';

  function Glass(capacity) {
    this.quantity = 0; // Instance property
    this.capacity = capacity; // Instance property
  }

  // Ensure the constructor is correct
  Glass.prototype.constructor = Glass;

  Glass.prototype.consume = function (consumedQuantity) {
    if (this.quantity > 0) {
      this.quantity -= consumedQuantity;
    }
  };

  Glass.prototype.drink = function () {
    this.consume(1);  
  };

  Glass.prototype.quaff = function () {
    this.consume(4);
  };

  Glass.prototype.downInOne = function () {
    this.consume(this.quantity);
  };

  // Return the constructor
  return Glass;

}(); // Immediately-Invoked Function Expression (IIFE)

var Pint = function () {
  'use strict';

  function Pint() {
    Glass.call(this, 20); // Pint size in fl. oz.
    this.quantity = 20; // Pint size in fl. oz.
  }

  // Inherit the base class, available in ES5
  Pint.prototype = Object.create(Glass.prototype);

  // Ensure the constructor is correct
  Pint.prototype.constructor = Pint;

  return Pint;
}();

var HalfPint = function () {
  'use strict';

  function HalfPint() {
    Glass.call(this, 10); // Half Pint size in fl. oz.
    this.quantity = 10; // Half Pint size in fl. oz.
  }

  HalfPint.prototype = Object.create(Glass.prototype);

  HalfPint.prototype.constructor = HalfPint;

  return HalfPint;
}();
```


Let's update the tests to use the `new` keyword

We can now access the 'public' methods and properties of the base class

```js
describe('Pint', function () {
  'use strict';
  
  var pint;

  beforeEach(function () {
    pint = new Pint();
  });

  it('Contains 20 fl. oz. of beer', function () {
    expect(pint.quantity).toEqual(20);
  });

  it('Has 20 fl. oz. of capacity', function () {
    expect(pint.capacity).toEqual(20);
  });
});

describe('Pint Customer', function () {
  'use strict';
  
  var pint;

  beforeEach(function () {
    pint = new Pint();
  });

  it('Drinks, 1 fl. oz. is consumed', function () {
    pint.drink();
    expect(pint.quantity).toEqual(19);
  });

  it('Quaffs, 4 fl. oz. are consumed', function () {
    pint.quaff();
    expect(pint.quantity).toEqual(16);
  });

  it('Drinks and then downs in one, the remaining beer is consumed', function () {
    pint.drink();
    pint.downInOne();
    expect(pint.quantity).toEqual(0);
  });

  it('Cannot drink from a beer that has already been consumed', function () {
    pint.downInOne();
    pint.drink();
    expect(pint.quantity).toEqual(0);
  });

  it('Cannot quaff from a beer that has already been consumed', function () {
    pint.downInOne();
    pint.quaff();
    expect(pint.quantity).toEqual(0);
  });

});
```


Results

![](screenshots/jasmine-inheritance-ok.png)

- - -

## Tool break!

Editor config enforces coding style across different editors

_(demo)_