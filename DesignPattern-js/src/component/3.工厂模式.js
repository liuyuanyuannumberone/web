class Car {
    constructor(numberCard, carName) {
        this.numberCard = numberCard;
        this.carName = carName;
    }
}
class Kuaiche extends Car {
    constructor(numberCard, carName,price) {
        super(numberCard, carName);
        this.price = price;
    }
}
class Zhuanche extends Car {
    constructor(numberCard, carName,price) {
        super(numberCard, carName);
        this.price = price;
    }
}

class Trip{
  constructor(car,miles){
    this.car=car;
    this.miles=miles;
  }
  start(){
    console.log(this.car.numberCard,this.car.carName,this.car.price);
  }
  end(){
   console.log(this.car.price*this.miles);
  }
}
let car =new Kuaiche("苏A67712","江苏",5);
let trip=new Trip(car, 1);
trip.start();
trip.end();