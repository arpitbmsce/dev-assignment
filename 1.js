// Code goes here

let existingArray = [7000, 7001,7002, 7003, 7004, 7005]


function validateListOfNumbers () {
  
  let data = String(document.getElementById("listOfNumbers").value);
  
  if(data === "") {
    return;
  }
  data = data.split(',');
  let finalList = [...existingArray], additionalList = [], duplicateList = "";
  let updateArrayAndDuplicateList = function(elem) {
    if(isNaN(elem)) {
      return;
    }
    if (existingArray.indexOf(elem) === -1 )         {
        additionalList.push(elem);
       } else {
        duplicateList = (duplicateList !== "" ? (duplicateList + ', ' ) : duplicateList) + elem 
       }
  }
  data.forEach(function(elem) {
    let indexOfHyphen = elem.indexOf('-');
    if (indexOfHyphen > -1) {
      let startNum = parseInt(elem.substring(0, indexOfHyphen).trim());
      let endNum = parseInt(elem.substring(indexOfHyphen + 1, elem.length).trim());

      for(let i = startNum; i<= endNum; i++) {
        updateArrayAndDuplicateList(i);
      }
    } else {
    updateArrayAndDuplicateList(parseInt(elem.trim()));
    }
  });
    finalList.push(...additionalList);
    document.getElementById("message").innerHTML = `The Final list is ${finalList} and Duplicate numbers list is ${duplicateList ? duplicateList: 'EMPTY'}. Enter again if you wish :)`

 }
