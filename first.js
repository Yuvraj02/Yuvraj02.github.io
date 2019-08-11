var employeeUrl;
var employeesName = document.getElementById("variable-pass");

if (employeesName) {

  var employeeDataReq = new XMLHttpRequest();
  employeeDataReq.open('GET','https://yuvraj02.github.io/employeedata.json');
  employeeDataReq.onload = function() {
    var employeeData = JSON.parse(employeeDataReq.responseText);
    console.log(employeeData);
    renderList(employeeData);
  };
  employeeDataReq.send();

}

function renderList(data) {
  var employees = "";

        for (var i = 0; i < data.length; i++) {
              employeeUrl += data[i].url;
              employees += "<div>"+ '<a href="https://yuvraj02.github.io/employees.html">' + data[i].name + "</a>" + "</div>";
        }
        document.getElementById("textContainer").innerHTML = employees;
}
