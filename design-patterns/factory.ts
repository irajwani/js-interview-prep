/**
 * Problem: You have calls to a certain class all over your code. Say you have a logistics app
and use the 'Truck' class for everything. Then another transportation method is required. And
you replace some instances of 'Truck' with 'Ship' and add if conditionals everywhere in your code.*/

/**
 * Recognition: Concrete classes to create a specific object either extend an abstract factory class or
implement a factory interface. Each of the creator methods override the abstract factory classes
abstract method to return the object they want to specifically return
*/

interface Product {
  operation(): string;
}

abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public abstract factoryMethod(): Product;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type. BUT since they extend the abstract Creator, the method `someOperation`
 * is run instead
 */
class ShipCreator extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
    return new Ship();
  }

  public rudders: number = 1;
}

class TruckCreator extends Creator {
  public factoryMethod(): Product {
    return new Truck();
  }

  public wheels: number = 4;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class Ship implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

class Truck implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct2}";
  }

  public someOtherOperation(): string {
    return "";
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
  // ...
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ShipCreator());
console.log("");

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new TruckCreator());
