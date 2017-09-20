
const mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};


var planTrip = (startLine, startStation, endLine, endStation) => {

  if (startLine == endLine) {

    let stations1 = mta[startLine];

    let startIndex1 = stations1.indexOf(startStation);
    let endIndex1 = stations1.indexOf(endStation);
    let firstTrip = stations1.slice(startIndex1+1, endIndex1);

    if(startIndex1 > endIndex1){
       let firstTrip = stations1.slice(endIndex1+1, startIndex1).reverse();
    }


  }else{

    let stations1 = mta[startLine];
    let stations2 = mta[endLine];

    let startIndex1 = stations1.indexOf(startStation);
    let endIndex1 = stations1.indexOf("Union Square");
    let firstTrip = stations1.slice(startIndex1+1, endIndex1);

      if (startIndex1 > endIndex1){
         let firstTrip = stations1.slice(endIndex1+1, startIndex1).reverse();
      }

    let startIndex2 = stations2.indexOf("Union Square");
    let endIndex2 = stations2.indexOf(endStation);
    let secondTrip = stations2.slice(startIndex2+1, endIndex2);

      if (startIndex2 > endIndex2){
        let secondTrip = stations2.slice(endIndex2+1, startIndex2).reverse();
      }

    let changeStation = ('Union Square')

    let multiTrip = firstTrip + secondTrip;

    console.log('You must travel through the following stops on ' + startLine + ' line: ' + firstTrip);
    console.log('Change at ' + changeStation);
    console.log('Your journey continues through the following stops: ' + secondTrip);
    console.log(multiTrip + ' stops in total');
  }
};

// planTrip('N', 'Times Square', 'N', 'Union Square')
planTrip('6', 'Grand Central', 'L', '1st')
// planTrip('L', '1st', '6', 'Grand Central')
// planTrip('6', 'Grand Central', 'N', 'Times Square');
