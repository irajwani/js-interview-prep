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
