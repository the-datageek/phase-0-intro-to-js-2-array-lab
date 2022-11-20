// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(Broom){
    const name_2= [...cats,Broom];
    return name_2;
}
function prependCat(Arnold){
    const name_2= [Arnold, ...cats];
    return name_2;
}

function removeLastCat(){
    const cats_2 = cats.slice(0, cats.length-1);
    return cats_2;
}

function  removeFirstCat(){
    const cats_2 = cats.slice(1)
    return cats_2;
}

