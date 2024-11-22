// Week 8 Assignment
// Define a class for books that includes the title, author name, and the year it was published
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }
    describeBook(){
        // 
        return `${title} was written by ${author} and published in ${year}.`; 
    }
}

class Fiction {
    constructor(genre){
       this.genre = genre;
       this.ficbooks = [];

    }
    addFictionBook(ficbook){
        if (ficbook instanceof Book) {
            this.ficbooks.push(ficbook);
        } else {
            throw new Error(`You can only add an instance of Book. 
              argument is not a book: ${book}`);
    
        }
    } 
    describe(){
        return `${this.ficbook} is a work of fiction.`;
    } 
}

class Nonfiction {
    constructor(genre){
        this.genre = genre;
        this.nonficbooks = [];
 
     }
     addFictionBook(nonficbook){
         if (nonficbook instanceof Book) {
             this.nonficbooks.push(ficbook);
         } else {
             throw new Error(`You can only add an instance of Book. 
               argument is not a book: ${book}`);
     
         }
     } 
     describe(){
        return `${this.nonficbook} is a work of nonfiction.`;
     } 
}

class Menu {
    constructor() {

    }
}