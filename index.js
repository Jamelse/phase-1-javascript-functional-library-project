const myEach = function(collection, callback) {
if (typeof collection == 'object'){
  let objValues = Object.values(collection)
  objValues.forEach(callback)
} else {
  collection.forEach(callback)}
  return collection;
}

const myMap = function(collection, callback){
 if (typeof collection == 'object'){
    let objValues = Object.values(collection)
    return objValues.map(callback);
  } else {
    return collection.map(callback);
  }
}

const myReduce = function(collection, callback, acc){
  let collectionCopy
  if (typeof collection == 'object'){
    collectionCopy = Object.values(collection);
  } else collectionCopy = [...collection]
  
  if (typeof acc !== 'number'){
    acc = collectionCopy.shift();
  } else {
    acc = acc;
  }
  for (let val in collectionCopy){
    acc = callback(acc, collectionCopy[val], collectionCopy)
  }
  return acc;
}

const myFind = function(collection, predicate){
  if (typeof collection == 'object'){
    let objValues = Object.values(collection)
    return objValues.find(predicate);
  } else {
    return collection.find(predicate);
  }
}

const myFilter = function(collection, predicate){
  if (typeof collection == 'object'){
    let objValues = Object.values(collection)
    return objValues.filter(predicate);
  } else {
    return collection.filter(predicate);
  }
}

const mySize = function(collection){
  if (typeof collection == 'object'){
    let objValues = Object.values(collection)
    return objValues.length;
  } else {
    return collection.length;
  }
}

const myFirst = function(array, n = 1){
 let num = 1;
 let newArray = [];
 for (let val in array){
  if (num <= n){
    newArray.push(array[val]);
    num++
  }
 }
 return newArray.length > 1 ? newArray : newArray[0]
}

myLast = function (array, n = 1){
  let num = array.length - n;
  if ( n > 1){
    return array.slice(num, array.length)
   } else {
    return array[num];
   } 
}

function myKeys(object){
  return Object.keys(object);
 }

 function myValues(object){
  return Object.values(object);
 }