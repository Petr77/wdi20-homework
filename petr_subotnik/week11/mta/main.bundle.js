'use strict';

var mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var planTrip = function planTrip(startLine, startStation, endStation) {

  // if startLine == endLine {

  var stations1 = mta[startLine];

  var startIndex1 = stations1.indexOf(startStation);
  var endIndex1 = stations1.indexOf(endStation);

  var firstTrip = stations1.slice(startIndex1 + 1, endIndex1);

  if (startIndex1 > endIndex1) {
    var _firstTrip = stations1.slice(endIndex1, startIndex1).reverse();
  }
};
planTrip('N', 'Times Square', 'Union Square');
// }else{
//
// let stations1 = mta[startLine];
// let stations2 = mta[endLine];
//
// let startIndex1 = stations1.indexOf(startStation);
// let endIndex1 = stations1.indexOf("Union Square");
// let firstTrip = stations1.slice(startIndex1+1, "Union Square");
//
// if (startIndex1 > endIndex1){
//    var firstTrip = stations1.slice(endIndex1, "Union Square").reverse();
//
// let startIndex2 = stations2.indexOf("Union Square");
// let endIndex2 = stations2.indexOf(endStation);
//
// let firstTrip = stations1.slice(startIndex1+1, endIndex1);
//
//   if (startIndex1 > endIndex1){
//     let firstTrip = stations1.slice(endIndex1, startIndex1).reverse();
//   }
// }
// }
