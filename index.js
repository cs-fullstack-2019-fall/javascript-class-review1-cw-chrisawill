// Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author. Create 3 instances of Books and put them in an array. Afterwards print each one in the format below:
//     ```
// The book [BOOK NAME] has [RATING] stars!!!
// ```

class books
{
    constructor(name,rating,genre)
    {
        this.name = name;
        this.rating = rating;
        this.genre = genre;
    }
    
}

function main() 
{
    let novel1 = new books("The Good Night","99.9%","Children's");
    let novel2 = new books("Kudapual","99.9","Supernatural, slice-of-life,");
    let novel3 = new books("Where the Ink Flows, There I Shall Go.","99.9","poetry");
    
    let arrayOfTitles = ["There is No Dog","The Knife of Never Letting Go", "The Crimson Crown" ];
    // you should have put novel1, novel2, and novel 3 in the array
   
    arrayOfTitles.forEach(function (element)
    {
        console.log(element)
        // you are only printing the novel title strings
    })
    
    // arrayOfTitles.forEach(element);
    // {
    //     console.log(element)
    // }

}
main();