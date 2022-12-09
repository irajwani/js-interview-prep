/* 
Enable clean cloning of objects. 
Some times we can't clone objects perfectly since:
- Some fields and methods may be private
- Circular Methods may be linked to original object

We can use JS utility func Object.create to create a clone
*/

class Prototype {
  public primitiveField: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone: this = Object.create(this);
    clone.component = Object.create(this.component);
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };
    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

function main() {
  const plane = new Prototype();
  plane.primitiveField = "first modern airplane";
  plane.component = new Date();
  plane.circularReference = new ComponentWithBackReference(plane);

  console.log("original", plane);

  const plane2 = plane.clone();

  console.log("copy", plane2);
}

main();
