function Person(name, number, salary, rating) {
    this.employeeName = name;
    this.employeeNumber = number;
    this.salary = salary;
    this.rating = rating;
}
var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);



var employees = [atticus, jem, boo, scout];



function bonus(employee) {
  var bonusPercent = 0;


switch(employee.rating) {
  case 3:
  bonusPercent = 4
  break;
  case 4:
  bonusPercent = 6
  break;
  case 5:
  bonusPercent = 10
  break;
  default:
  bonusPercent = 0
};
var newArray = [];
newArray[0] = employee.employeeName;
if (employee.employeeNumber.length <= 4) {
  bonusPercent += 5;
}
if (employee.salary > 65000) {
  bonusPercent--;
}
if (bonusPercent > 13) {
  bonusPercent = 13;
}

empSalary = parseInt(employee.salary);

newArray[1] = bonusPercent;
newArray[2] = Math.round(empSalary * (bonusPercent / 100) + empSalary);
newArray[3] = Math.round(empSalary * (bonusPercent / 100));
return newArray;
}

var outArray = [];
for (var i=0; i < employees.length; i++){
  outArray = bonus(employees[i]);
  console.log(outArray);
}
