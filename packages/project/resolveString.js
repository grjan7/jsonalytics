const extractKey = (str, start, end) => {
  let key = str.slice(start, end);
  key = key.match(/^\[\d+\]$/g)?.length == 1 ? JSON.parse(key)[0] : key;

  return key;
}

const customSplit = (str) => {

  let splitArray = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {

    if (str[i] == "[") {
      end = i;

      splitArray.push(extractKey(str, start, end));
      start = end;
    }
  }

  splitArray.push(extractKey(str, start, str.length));
  return splitArray;
}

const resolveString = (str) => {

  const dotSplit = str.split(".");
  let keyArr = [];
  
  for(let i of dotSplit){
    
    keyArr = keyArr.concat(customSplit(i));
  }
  
  return keyArr;
}


resolveString("address[2].city.name");