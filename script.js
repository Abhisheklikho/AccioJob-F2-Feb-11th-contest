/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
let arr2 = [
  { id: 1, name: "ram", age: "18", marks: 80 },
  { id: 2, name: "sita", age: "20", marks: 85 },
  { id: 3, name: "prakriti", age: "19", marks: 100 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(value){
    if(value.marks>50){
      console.log(value.marks)
    }
  })
 

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(value){
    if(value.marks>50){
      console.log(value.marks)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  var student ={};
  student.id=4;
  student.name="Abhishek";
  student.age=25;
  student.marks=85;
  
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(var i=0;i<arr.length;i++){
    if(arr[i].marks<50){
arr.splice(i,1);
    }
  }
  console.log(arr);
   
}

function concatenateArray() {
  //Write your code here, just console.log
var newArray =arr.concat(arr2);
console.log(newArray);
}
