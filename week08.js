// Week 8 Assignment
// Define a class for books that includes the title and author name.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
   
    describeBook(){
        //Tells you about the book. 
        return `${title} was written by ${author}.`; 
   }
}
//Define a class to whom the books belong.
class Person {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addaBook(book) {
        if (book instanceof Book) {
            this.books.push(book);   
        } else {
            throw new Error(`You can only add an instance of Book. Argument is not a book: ${book} `);
        }
    }
    describe(){
        return `${this.name} has ${this.books.length} books.`;
    }
}

// Where you can choose a person's book collection and add and remove books from the collection.
class Menu {
    constructor() {
        this.collection = [];
        this.selctedCollection = null;
        }
   
    start() { // start of the menu application 
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
        switch(selection) {
        case '1' :
        this.createCollection();
        break;
        case '2' :
        this.viewCollection();
        break;
        case '3' :
        this.deleteCollection();
        break;
        case '4' :
        this.displayCollections();
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
            0) Exit
            1) Create a Collection
            2) View a Collection
            3) Delete a Collection
            4) View All Collections
            `);
            }
    
    showCollectionMenuOptions(collectionInfo) {
        return prompt(`
            0) Back
            1) Add a New Book
            2) Delete a Book  
            ------------------
            ${collectionInfo}
            `);
    }
    
    displayCollections() {
        let collectionString = '';
        for (let i = 0; i < this.collection.length; i++){
            collectionString += i+ ') ' + this.collection[i].name + '\n';
        }
        alert(collectionString);
    }

    createCollection(){
        let name = prompt(`Enter name for new team: `); 
        this.collection.push(new Person(name));
    }

    viewCollection(){
        let index = prompt("Enter the index of the person's collection that you want to view:");
        if (index > -1 && index < this.collection[index]) {
            this.selctedCollection = this.collection[index];
            let description = 'This Collection belongs to: ' + this.selctedCollection.name + '\n ';
            for (let i = 0; i < this.selctedCollection.books.length; i++) {
                description += i + ') ' + this.selctedCollection.books[i].describe() + '\n';
            }
        }
        let selection1 = this.showCollectionMenuOptions(collectionInfo);
            switch(selection1) {
                case '1' : 
                this.addBook();
                break;
                case '2' :
                this.deleteBook();
                break;
            } 
    }
    //Add a boook to the selected person's collection
    addBook() {
        let title = prompt('Enter the title of the book: ');
        let author = prompt('Enter the name of the author: ');
        this.selctedCollection(new Book(title, author));
    }
    //Delete a book from the selected person's collection.
    deleteBook() {
        let index = prompt('Enter the index of the books that you wish to delete: ');
        if (index > -1 && index < this.selectedCollection.books.length) { 
            this.selectedCollection.books.splice(index,1);
    }
    }

    //View all of the books in all of the collections.
    viewAllBooks() {
        let booksStrings = ''; 
        for (let i = 0; i < this.books.length; i++) {
        booksStrings += i+ ') ' + this.books[i] + '\n';
        }
        alert(booksString);
        }

    //Delete a person's book collection. 
    deleteCollection() {
        let index = prompt('Enter the index of person whose collection you wish to delete: ');
        if (index > -1 && index < this.teams.length) {
            this.collection.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();


