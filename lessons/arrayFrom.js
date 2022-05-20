const str = "hello";
const fromStr = Array.from(str);
const fromScratch = Array.from({length: 5}, (v, i) => i)
const sameAs = (new Array(5)).fill(0).map((v, i) => i)

function someFunc() {
    console.log(Array.from(arguments));
}

someFunc(3,'hello',{name: 'imad'});