             //      day 6 OOPS CONCEPT;

//CLASS MOVIE
//a) Write a constructor for the class Movie, which takes a String representing the title
// of the movie, a String representing the studio, and a String representing the rating as its arguments,
// and sets the respective class properties to these values.

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getrating() {
    return "the rating is  " + this.rating;
  }
}

//-------------------------------------------------


//b) The constructor for the class Movie
// will set the class property rating to "PG" as default when no rating is provided.
 class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(rating==undefined){
            this.rating="PG"
        }
        else{
            this.rating=rating
        }

    }
 }
var movie1=new Movie("kannama","ags")
console.log(movie1.rating);

//-------------------------------------------------------


//c) Write a method getPG, which takes an array of base type Movie as its argument,
// and returns a new array of only those movies in the input array with a rating of "PG".
// You may assume the input array is full of Movie instances. The returned array need not
// be full.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating

    }

getPG(array){
    var result=[];
    for(var i = 0;i<array.length;i++){
        if(array[i].rating=="pg"){
            result.push(array[i])
        }
    }
    return result

}
}

var mov1=new Movie("kanna","hg");
var mov2=new Movie("kjhg","hg");
var mov3=new Movie("kajhhvv","hg","pg23");
var arr=[mov1,mov2,mov3];
console.log(mov1.getPG(arr))
//--------------------------------------------
//d) Write a piece of code that creates an instance of the class Movie with
// the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }

}
var ans = new Movie("Casion Royale","Eon Productions","PG13")
console.log(ans.title);
console.log(ans.studio);
console.log(ans.rating);

//-------------------------------------------------------------------------------------

//         2.Convert the UML diagram to Typescript class. - use number for double;

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.areaCircle); 

//----------------------------------------------------------------------------------


  // 3.Write a “person” class to hold all the details.


  class Person{
    constructor(name,age,color,education,native,height,weight,work){
      this.name=name;
      this.age=age;
      this.color=color;
      this.education=education;
      this.native=native;
      this.height=height;
      this.weight=weight;
      this.work=work;
      
    }
    
  }
  var details = new Person("ruby","20","black","bsc","trichy","6.0'","180","chennai")
  console.log(details.name);
  console.log(details.age);
  console.log(details.color);
  console.log(details.education);
  console.log(details.native);
  console.log(details.height);
  console.log(details.weight);
  console.log(details.work);

//---------------------------------------------------------------------------


  //4.write a class to calculate the uber price.



  class Uberprice{
    constructor(distance,cashperdistance){
      this.distance=distance;
      this.cashperdistance=cashperdistance;
      
    }
    get fare(){
      return this.distance*this.cashperdistance;
    }
  }
  var go = new Uberprice("26","64");
  var go1= new Uberprice("25","65");
  var go2 = new Uberprice("21","68");
  var go3 = new Uberprice("24","11");
  
  console.log(go.fare);
  console.log(go1.fare);
  console.log(go2.fare);
  console.log(go3.fare);



//---------------------------------------------------------------------------------------




  //                          DAY 7 ARRAY METHODS;

  //1.Solving problems using array functions on the rest countries' data.

//A.Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
  var data = request.response;
  var result = JSON.parse(data);
 var ans  =result.filter((ele)=>ele.region==="Asia")
 var ans1=ans.map((ele)=>ele.name.common)
 console.log(ans1)
 }

//-------------------------------------------------------------------------------


 //2.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
  var data = request.response;
  var result=JSON.parse(data);
  var ans = result.filter((ele)=>ele.population<200000)
  var ans1 = ans.map((ele)=>ele.name.common)
  console.log(ans1)
}

//-----------------------------------------------------------------------------


//3.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest;
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
   var data = request.response;
   var result=JSON.parse(data);
   var ans = result.forEach((ele)=>console.log("NAME:"+ele.name.common+",.","CAPITAL:"+ele.capital+",.","FLAG:"+ele.flag+"."))
        }

//-----------------------------------------------------------------------------

    
  //4.Print the total population of countries using reduce function;

  var request = new XMLHttpRequest;
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
   var data = request.response;
   var result=JSON.parse(data);
  var ans=result.reduce((acc,cv)=>acc+cv.population,0)
  console.log(ans)
  
  }


//--------------------------------------------------------------------------------


//5.Print the country which uses US Dollars as currency.

  var request = new XMLHttpRequest;
 request.open("GET","https://restcountries.com/v2/all");
 request.send();
 request.onload=function(){
   var data = request.response;
   var result=JSON.parse(data);
   var ans = result.filter((ele)=>{
   for(var res in ele.currencies){
    if(ele.currencies[res].code==="USD"){
      console.log(ele.name)
    }}})}
  
   
   //-------------------------------------------------------------------------------
  
  
  








