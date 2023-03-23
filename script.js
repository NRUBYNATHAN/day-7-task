//                          DAY 7 ARRAY METHODS;

//1.Solving problems using array functions on the rest countries' data.

//A.Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.filter((ele) => ele.region === "Asia");
  var ans1 = ans.map((ele) => ele.name.common);
  console.log(ans1);
};

//-------------------------------------------------------------------------------

//2.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.filter((ele) => ele.population < 200000);
  var ans1 = ans.map((ele) => ele.name.common);
  console.log(ans1);
};

//-----------------------------------------------------------------------------

//3.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.forEach((ele) =>
    console.log(
      "NAME:" + ele.name.common + ",.",
      "CAPITAL:" + ele.capital + ",.",
      "FLAG:" + ele.flag + "."
    )
  );
};

//-----------------------------------------------------------------------------

//4.Print the total population of countries using reduce function;

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.reduce((acc, cv) => acc + cv.population, 0);
  console.log(ans);
};

//--------------------------------------------------------------------------------

//5.Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var ans = result.filter((ele) => {
    for (var res in ele.currencies) {
      if (ele.currencies[res].code === "USD") {
        console.log(ele.name);
      }
    }
  });
};

//-------------------------------------------------------------------------------
