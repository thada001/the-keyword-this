//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // 'this' is used to refer to the object in which it is contained

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // 1. The default binding of this is to the global object: window.
      // 2. When a constructor is used to make a new object via 'new', 'this' refers to the newly created object
      // 3. When 'this' is called inside an object, it refers implicitly to that object.
      // 4. When 'this' is called inside an object, but is explicitly bound to another object via 'apply', 'call',
      //    or 'bind', 'this' is bound to that other object.

  // 3) What is the difference between call and apply?

      // With 'apply', the parameters are listed within an array, which allows for a lot of flexibility, while 'call'
      // requires that the parameters be explicitly listed

  // 4) What does .bind do?

      // 'bind' explicitly sets the 'this' value to a specific object.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' 
  //instead use the 'this' keyword*

var user = {
  username: "thada",
  email: "thomascadair@gmail.com",
  getUsername: function() {
    return this.username;
  },
};
user.getUsername();
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year, move) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = move;
  this.moveCar = function() {
    return this.move += 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011, 0);
var mustang = new Car('Ford', 'Mustang', 2013, 0);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car 
//function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on 
//the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax 
//that will allow for you to call the getYear function with the prius then the mustang objects being the focal 
//objects. *Don't add getYear as a property on both objects*.

getYear.call(prius);
getYear.call(mustang);



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the 
//getUsername function return?

  // undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  // the window object

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
