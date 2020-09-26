// from data.js
var tableData = data;
    
//Console log to ensure data is present
    console.log(tableData);

// Table body variable
var tbody = d3.select("tbody");


// Function to fix typos
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


// Use forEach to loop through all tableData and insert the data into the table
tableData.forEach(function(UFOsighting) {
    
    //Console log to check my work
    console.log(UFOsighting);

    // Append row for each additional sighting
    var row = tbody.append("tr");

    // Update rows
    Object.entries(UFOsighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);

    });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the input element
var inputElement = d3.select("#datetime");
    
    //Console log to check my work
    console.log(inputElement);


// Event handler
function runEnter() {

    tbody.html("",);

  // Prevent Default function
  d3.event.preventDefault();
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);

    filteredData.forEach(function(UFOsighting) {
        
        // Create a new table row for each UFO sighting
        var row = tbody.append("tr");

        // Update row with data for that UFO sighting
        Object.entries(UFOsighting).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);

        });
    });
};

// To ensure data runs after "Enter" is clicked
button.on("click", runEnter);