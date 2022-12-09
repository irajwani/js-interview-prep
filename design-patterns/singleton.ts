/* Singleton
 Create one instance of the class, and make it globally accessible (since it solves 2 problems, it violates S from SOLID)
 If a second instance of the class is created, it instead returns a reference to the existing class
*/

class Mongo {
  private static instance: Mongo;
  private constructor() {
    // extra logic
  }

  static getInstance(): Mongo {
    if (!Mongo.instance) Mongo.instance = new Mongo();
    return Mongo.instance;
  }
}

const db = Mongo.getInstance();
const db2 = Mongo.getInstance();

console.log(db === db2); //true
