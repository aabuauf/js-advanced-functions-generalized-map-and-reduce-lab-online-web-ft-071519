// Add your functions here
function map(array){
 result=[]
  for (let i = 0; i<array.length; i++){
    result[i]=array[i]*-1
  }
  return result
}