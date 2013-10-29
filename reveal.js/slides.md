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

describe('Customer', function () {
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

The spec changes, you need to support also half pint size

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


You write the tests and update the spec runner

![](/screenshots/spec-runner-pint-and-halfPint.png)

and ... 


FAIL

Globals are conflicting

![](/screenshots/jasmine-ko.png)

