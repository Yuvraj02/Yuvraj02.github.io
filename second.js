var employeeTitle = document.getElementById("employee-data");

if (employeeTitle) {
  var yuvrajDataReq = new XMLHttpRequest();
  yuvrajDataReq.open('GET', employeeUrl);
  yuvrajDataReq.onload = function() {
      var yuvraj = JSON.parse(yuvrajDataReq.responseText);
      console.log(yuvraj);
      renderEmployeeData(yuvraj);

  }
  yuvrajDataReq.send();

}

function renderEmployeeData(data) {

  var name = document.getElementById("name");
  var dateOfBirth = document.getElementById("dateOfBirth");
  var occupation = document.getElementById("occupation");
  var company = document.getElementById("company");

  var nameData = data.name;
  var dateOfBirthData = data.dateOfBirth;
  var occupationData = data.occupation;
  var companyData = data.company;

  name.insertAdjacentHTML('beforeend', nameData);
  dateOfBirth.insertAdjacentHTML('beforeend', dateOfBirthData);
  occupation.insertAdjacentHTML('beforeend', occupationData);
  company.insertAdjacentHTML('beforeend', companyData);
}
