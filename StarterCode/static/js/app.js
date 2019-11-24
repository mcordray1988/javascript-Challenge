// from data.js
var tableData = data;

// YOUR CODE HERE!
//Object.keys(tableData).forEach(key => console.log(key));
//Object.values(tableData).forEach(value => console.log(value));
//Object.entries(tableData).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(UFOReport) {
    console.log(UFOReport);
});

data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");
});

data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");

  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});

data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");

  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    // var cell = row.append("td");
  });
});

data.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
