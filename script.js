let studentObjects = new Array();
{
    getData();
}


function getData()
{
  if (localStorage.getItem("data") != null) {
    studentObjects = JSON.parse(localStorage.getItem("data"));
    displayStudentDetails();
  } else {
    document.getElementById("row").innerHTML = "<strong>No Details</strong>";
  }
}


class Student {

  constructor(name, marksMaths, marksEnglish, yearOfPassing,dateObj) {
    this.name = name;
    this.marksMaths = marksMaths;
    this.marksEnglish = marksEnglish;
    this.avg = (this.marksMaths + this.marksEnglish) / 2;
    this.yearOfPassing = new Date(yearOfPassing).getFullYear();
    this.currentDate =dateObj.getDate()+"/"+dateObj.getHours()+"/"+dateObj.getFullYear();
    }

}

function formSubmit(studentForm) {
  var stuObj = new Student(
    studentForm.txtname.value,
    Number(studentForm.txtmaths.value),
    Number(studentForm.txtenglish.value),
    studentForm.txtyear.value,new Date()
  );
  studentObjects.push(stuObj);
  console.log(JSON.stringify(studentObjects));
  localStorage.setItem("data", JSON.stringify(studentObjects));
  displayStudentDetails();
  return false;
}


function showDetails(singleObj, index) {
  document.getElementById("row").innerHTML +=
    "<tr><td>" +
    (index + 1) +
    "</td><td>" +
    singleObj.name +
    "</td><td>" +
    singleObj.marksMaths +
    "</td><td>" +
    singleObj.marksEnglish +
    "</td><td>" +
    singleObj.avg +
    "</td><td>" +
    singleObj.yearOfPassing +
    "</td><td>" +
    singleObj.currentDate +
    "</td></tr>";
}


function displayStudentDetails() {
  document.getElementById("row").innerHTML = null;
  studentObjects.forEach(showDetails);
}

function clearData() {
  localStorage.clear();
  getData();
}
