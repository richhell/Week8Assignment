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
              Argument is not a book: ${book}`);
    
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
               Argument is not a book: ${book}`);
     
         }
     } 
     describe(){
        return `${this.nonficbook} is a work of nonfiction.`;
     } 
}

class Menu {
    constructor() {

    }


    start() { // entry point to application
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
        switch(selection) {
        case '1' :
        this.showFictionMenuOptions();
        break;
        case '2' :
        this.showNonfictionMenuOptions();
        break;
        case '3' :
        this.viewAllBooks();
        break;
        default:
        selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
        }
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) View Fiction Books
            2) View Nonfiction Books
            3) View All Books
            `);
            }

    
    showFiction() {

        let selection1 = this.showfictionMenuOptions();
        switch (selection1) {
            case '0' :
            this.showMainMenuOptions();
            break;
            case '1' :
            this.addFictionBook();
            break;
            case '2' :
            this.deleteFictionBook();
            break;
            case '3' :
                this.viewAllFictionBooks();

        }
    }

    showFictionMeuOptions() {
        return prompt(`
            0) Back
            1) Add a new Book
            2) Delete a Book
            3) View Books
            -----------------
            FICTION
            `);
        
                    

    }

    viewFictionBooks() {
        let booksStrings = ''; 
        for (let i = 0; i < this.ficbooks.length; i++) {
        booksStrings += i+ ') ' + this.ficbooks[i] + '\n';
        }
        alert(booksString);
        }

    showNonfictionMenuOptions() {
        return prompt(`
            0) Back
            1) Add a new Book
            2) Delete a Book
            3) View Books
            -----------------
            NONFICTION
            `);
    }
  
    viewNonfictionBooks() {
        let booksStrings = ''; 
        for (let i = 0; i < this.nonficbooks.length; i++) {
        booksStrings += i+ ') ' + this.nonficbook[i] + '\n';
        }
        alert(booksStrings);
        }
   
}



let menu = new Menu();
menu.start();
