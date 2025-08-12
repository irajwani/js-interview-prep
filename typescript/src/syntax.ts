//

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

function deleteUser(_user: User) {
    //
}
