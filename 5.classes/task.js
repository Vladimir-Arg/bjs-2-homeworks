class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
      return (this.state = this.state * 1.5);
    }
    set state(number) {
      if (number > 100) {
        this.state = 100;
      } else if (number < 0) {
        this.state = 0;
      } else {
        this._state = number;
      }
    }
    get state() {
      return this._state;
    }
  }
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
  );
  
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.state = 80;
  sherlock.fix();
  console.log(sherlock.state); //100
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168,
  );
  console.log();
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      return this.books.find((book) => book[type] === value) || null;
    }
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          const book = this.books[i];
          this.books.splice(i, 1);
          return book;
        }
      }
      return null;
    }
  }
  
  console.log();
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008,
    ),
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168,
    ),
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); //null
  console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
  console.log("↓Выдана книга↓:");
  console.log(library.giveBookByName("Машина времени"));
  console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || 5 < mark) {
        return;
      }
      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      }
      return this.marks[subject].reduce(
        (acc, mark) => acc + mark / this.marks[subject].length,
        0,
      );
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
      return subjects.reduce(
        (acc, subject) =>
          acc + this.getAverageBySubject(subject) / subjects.length,
        0,
      );
    }
  }
  console.log();
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
  console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
  console.log(student.getAverage()); // Средний балл по всем предметам 4.75
  console.log(student);
  