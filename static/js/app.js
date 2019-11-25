// from data.js
var tableData = data;


// Select the button
let button = d3.select('#filter-btn');

// Select the tbody
let tlist = d3.select("tbody");

    

button.on('click', function () {
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");
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

})

// YOUR CODE HERE!

