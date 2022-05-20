//You can specify the shape of a specific object in terms of keys expected and the type of values
//by using interface
interface User {
    name: string;
    id: number;
    age?: number;
}

let hayes: User = {
    name: "Hayes",
    id: 0,
}

//Similarly interface can return values and annotate parameters for functions
function getAdminUser(): User {
    return {
        name: "Imad",
        id: 4,
    }
}
  
function deleteUser(user: User) {
    //
}

// A class can have specific types by implementing interface(s)
interface Swimmer {
    swim(): void;
}

interface Talker {
    talk(): void;
}

interface Dancer {
    dance(): void;
}

class Phelps implements Swimmer, Talker {
    public swim(): void {
        // 
    }

    public talk(): void {
        // 
    }
}