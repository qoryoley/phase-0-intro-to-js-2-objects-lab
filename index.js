// Write your solution in this file!
const employee = {name: 'Sam', address: '11 Broadway'};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  var newObj = Object.assign({}, employee, {[key]: value});
  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  var newObj = Object.assign({}, employee);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}