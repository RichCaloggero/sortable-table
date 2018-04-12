function extractData (table) {
return Array.from(table.querySelectorAll ("tbody tr"))
.map (tr => Array.from (tr.querySelectorAll ("td, th"))
.map (cell => cell.textContent) // map over cells in row
); // map over rows
} // extractData

function rewriteData (table, data) {
Array.from(table.querySelectorAll ("tbody tr"))
.map ((tr, r) => Array.from (tr.querySelectorAll ("td, th"))
.map ((cell, c) => cell.textContent = data[r][c]) // map over cells in row
); // map over rows
} // rewriteData

function extractFieldNames (table) {
return Array.from(table.querySelectorAll ("thead > tr > th"))
.map (cell => cell.textContent);
} // extractFieldNames

function createUnorderedDataStore (data, fieldNames) {
return data.map (row => {
let object = {};
row.forEach ((column, index) => object[fieldNames[index]] = column);
return object;
}); // map over rows
} // createUnorderedDataStore 

function createOrderedData (store, fieldNames) {
return store.map (object =>
fieldNames.map (key => object[key])
); // map over data
} // createOrderedData 

let names = "a b c d e f g".split(" ");
let newOrdering = "b c a d g e f".split(" ")
let data = [
[1,2,3,4,5,6,7],
[11,12,13,14,15,16,17]
];

let store = createUnorderedDataStore (data, names);
let newData = createOrderedData (store, newOrdering);
