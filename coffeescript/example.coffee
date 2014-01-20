window.Pub = ((Pub) ->

  class Glass
    constructor: (quantity) ->
      @_quantity = quantity # Instance field private by convention

    _consume: (quantityToConsume) ->
      return if @_quantity <= 0
      if (@_quantity > quantityToConsume)
        @_quantity -= quantityToConsume
      else
        @_quantity = 0

    drink: () ->
      @_consume(1)

    quaff: () ->
      @_consume(4)

    downInOne: () ->
      @_consume(@_quantity)

    getQuantity: () ->
      return @_quantity

  class Pint extends Glass
    constructor: () ->
      super(20)

  Pub.Pint = Pint

  class HalfPint extends Glass
    constructor: () ->
      super(10)

  Pub.HalfPint = HalfPint

  return Pub
)(window.Pub or {})