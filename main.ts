// // 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magician:string[]):void{
    magician.forEach(magician => console.log(magician));
}
function makegreat(magician:string[]):string[]{
    return magician.map(magician => `${magician} is the great`);
}

let Magicians : string[]=["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

let greatMagician:string[] = makegreat(Magicians)

show_magicians(greatMagician);