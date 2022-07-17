function Pet(type) {
  this.type = type;
}
Pet.prototype.run = function(){
   console.log(`${this.type} running`);
}
let p=new Pet("mao");
p.run()

"1".length
