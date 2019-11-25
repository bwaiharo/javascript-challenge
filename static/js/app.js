// from data.js
var tableData = data;


// dateButton
let dtButton = d3.select('#dt');

let cityButton = d3.select('#city');

let stateButton = d3.select('#state');

let countryButton = d3.select('#country');

let shapeButton = d3.select('#shape');




// Select the tbody
let tlist = d3.select("tbody");

    

dtButton.on('click', function () {
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#category");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    //filtered data
    let filterdata = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filterdata);
    
     // First, create an array with just the age values
    var datetime = filterdata.map(tableData => tableData.datetime);
    console.log(datetime);

    tlist.html('');
    tlist.selectAll('tr')
         .data(filterdata)
         .enter()
         .append('tr')
         .html(d=>{
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
         });

});

cityButton.on('click', function () {
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#category");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    //filtered data
    let filterdata = tableData.filter(tableData => tableData.city === inputValue);
    console.log(filterdata);
    
     // First, create an array with just the age values
    var datetime = filterdata.map(tableData => tableData.city);
    console.log(datetime);

    tlist.html('');
    tlist.selectAll('tr')
         .data(filterdata)
         .enter()
         .append('tr')
         .html(d=>{
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
         });

});

stateButton.on('click', function () {
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#category");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    //filtered data
    let filterdata = tableData.filter(tableData => tableData.state === inputValue);
    console.log(filterdata);
    
     // First, create an array with just the age values
    var datetime = filterdata.map(tableData => tableData.state);
    console.log(datetime);

    tlist.html('');
    tlist.selectAll('tr')
         .data(filterdata)
         .enter()
         .append('tr')
         .html(d=>{
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
         });

});

countryButton.on('click', function () {
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#category");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    //filtered data
    let filterdata = tableData.filter(tableData => tableData.country === inputValue);
    console.log(filterdata);
    
     // First, create an array with just the age values
    var datetime = filterdata.map(tableData => tableData.country);
    console.log(datetime);

    tlist.html('');
    tlist.selectAll('tr')
         .data(filterdata)
         .enter()
         .append('tr')
         .html(d=>{
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
         });

});

shapeButton.on('click', function () {
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#category");
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    //filtered data
    let filterdata = tableData.filter(tableData => tableData.shape === inputValue);
    console.log(filterdata);
    
     // First, create an array with just the age values
    var datetime = filterdata.map(tableData => tableData.shape);
    console.log(datetime);

    tlist.html('');
    tlist.selectAll('tr')
         .data(filterdata)
         .enter()
         .append('tr')
         .html(d=>{
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
         });

});


// YOUR CODE HERE!

