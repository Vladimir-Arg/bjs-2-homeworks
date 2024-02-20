//Задача1
function parseCount(number) {
    if (Number.isNaN(Number.parseFloat(number))) {
      throw new Error("Невалидное значение");
    }
    return parseFloat(number);
  }
  
  function validateCount(number) {
    try {
      return parseCount(number);
    } catch (error) {
      return error;
    }
  }
  
  //Задача2
  
  class Triangle {
    constructor(a, b, c) {
      if (a + b < c || b + c < a || c + a < b) {
        // const error = new Error("Треугольник с такими сторонами не существует");
        // throw error;
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
      // this.p = this.perimeter / 2;
      // this.area = Math.sqrt(
      //   this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c),
      // );
      // this.area = (p*(p-a)*(p-b)*(p-c))**0.5;
    }
    get perimeter() {
      return +(this.a + this.b + this.c);
    }
    get area() {
      const p = this.perimeter / 2;
       const S = ((p * (p - this.a) * (p - this.b) * (p - this.c))**(1/2));
       return +S.toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }
  console.log(getTriangle(1, 1, 1));
  