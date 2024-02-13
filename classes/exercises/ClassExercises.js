// Define your Book class here:
class Book {    
    constructor (title, author, copyRightDate, ISBN, numberOfPages, timesCheckedOut, bookHadBeenDiscarded) {
        this.title = title;
        this.author = author;
        this.copyRightDate = copyRightDate;
        this.isbn = ISBN;
        this.pages = numberOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.bookHadBeenDiscarded = bookHadBeenDiscarded;
       
    }
    checkOut(uses=1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{    
    constructor (title, author, copyRightDate, ISBN, numberOfPages, timesCheckedOut, bookHadBeenDiscarded) {
        super(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedOut, bookHadBeenDiscarded);
     }
     dispose(currentYear) {
        if (currentYear-this.copyRightDate>5) {
        this.bookHadBeenDiscarded = 'Yes';    
        }
      }
    }
class Novel extends Book{    
    constructor (title, author, copyRightDate, ISBN, numberOfPages, timesCheckedOut, bookHadBeenDiscarded) {
        super(title, author, copyRightDate, ISBN, numberOfPages, timesCheckedOut, bookHadBeenDiscarded);
   }
    dispose(){
     if (this.timesCheckedOut >= 100) {
       this.bookHadBeenDiscarded = 'Yes';
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let myLibrary = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
let myNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');   


// Code exercises 4 & 5 here:
let oldBooks = [myLibrary, myNovel];
let currentYear = new Date().getFullYear();

oldBooks.forEach(book => {
    if (book instanceof Manual) {
      book.dispose(currentYear);
    } else if (book instanceof Novel) {
      book.dispose();
    }
  });
  
  myLibrary.checkOut(5);
  myLibrary.dispose(currentYear);
  
  myNovel.checkOut(5);
  myNovel.dispose();

console.log(`${myLibrary.title} is a book by ${myLibrary.author}, Has it been discarded? ${myLibrary.bookHadBeenDiscarded}`); 
console.log(myNovel.bookHadBeenDiscarded);
