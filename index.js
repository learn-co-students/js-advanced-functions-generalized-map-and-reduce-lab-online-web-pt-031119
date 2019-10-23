// Add your functions here
function map(source,callback){
  let newArray = [];
  for(var i=0; i<source.length; i++){
    newArray.push(callback(source[i]));
  };
  return newArray;
}

function reduce(source,callback,startVal){
  if(!!startVal){
    var result = startVal;
    var i=0;
  }else{
    var result = source[0];
    var i=1;
  }
    for(i; i<source.length; i++){
      result = callback(source[i],result);
    };
    return result;
    
}