(function () {
    /* One can think of types as sets of allowable values
* Type operations apply to a set's domain
* (extends, assignable to, and subtype of) === 'subset of'
*  */

    /* empty type (set with 0 elements) */
    let abyss: never;

    /* unit type (1 element) */
    type A = 'A';
    type Four = 4;

    /* union of types */
    type AorFour = 'A' | 4;

    const AorFour: AorFour = 4;

    /* Values in an intersection type contain the union of prop‐ erties in each of its constituents */
    interface Person {
        name: string;
    }

    interface Lifespan {
        birth: Date;
        death?: Date;
    }

    type PersonSpan = Person & Lifespan;

    const ps: PersonSpan = {
        name: 'Alan Turing',
        birth: new Date('1912/06/23'), death: new Date('1954/06/07'),
    }; // OK

    /*
    Conversely, TS cannot guarantee there are any keys that belong to the union of keys of two interfaces
    */
    type Empty = keyof (Person | Lifespan); // Type is never
    const a: Empty = 'name';

    /* as opposed to the intersection, which allows all possible values */
    type Full = keyof (Person & Lifespan);
    const b: Full = 'death';

    /* We can do the same with extends, which means "subset of" */
    interface Person {
        name: string;
    }

    interface PersonSpan extends Person {
        birth: Date;
        death?: Date;
    }

    /* Universal set */
    const ALL: unknown = [1, 2];


})

function TypeSpaceAndValueSpace() {
    /* Stored in type space */
    interface Cylinder {
        radius: number;
        height: number;
    }

    /* Stored in value space */
    const Cylinder = (radius: number, height: number) => ({radius, height});

    /* instanceof is JS' runtime operator, so it checks against value space */
    function calculateVolume(shape: unknown) {
        if (shape instanceof Cylinder) {
        shape.radius // ~~~~~~ Property 'radius' does not exist on type '{}'
        }
    }

    /* To determine if a symbol is in type or value space
    * simply, check if it was erased in the compiled JS
    * If so, then it was in the type space
    * */

    /* In the example above, Cylinder should've been a class
    *  In general, constructs such as classes or enums introduce both a type and a value
    */
     */
    class ProperCylinder {
        radius= 1;
        height= 1;
    }

    function calculateVolume(shape: unknown) { if (shape instanceof ProperCylinder) {
        shape // OK, type is Cylinder
        shape.radius // OK, type is number }
    }
}

function DeclarationPrefferedOverAssertion() {
    interface Person { name: string };

    // Declaration
    const alice: Person = {};
    // ~~~~~ Property 'name' is missing in type '{}' // but required in type 'Person'

    // Assertion
    const bob = {} as Person; // No error
}
