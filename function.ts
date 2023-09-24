// Functions
function addTwo (num: number): number {
    return 5
    // return 'Hello
}

let myValue = addTwo(5);

function getLower(val: string) {
    return val.toLowerCase()
};

function signUp(name: string, email: string, isPaid: boolean) {

}

signUp ('Joseph', 'joseph@email.com', true)

let loginUser = (name: string, email: string, isPaid: boolean = false) =>{

};

loginUser('Peter', 'peter@email.com', true)

function getValue (myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 ok"
};

const heros = ['family', 'goal', 'life'];

heros.map((hero): string => {
    return `${hero}`
});

// void
function consoleError (errmsg: string): void {
    console.log(errmsg)
};

// never
function handleError (errmsg: string): never {
    throw new Error(errmsg)
};

const getHello = (s: string): string =>{
    return ''
};

export {};