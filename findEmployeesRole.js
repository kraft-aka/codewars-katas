// Find an employees role in the company

function findEmployeesRole(name) {
  const [fName, lName] = name.split(" ");
  const emp = employees.filter(
    (emp) => emp.firstName === fName && emp.lastName === lName
  );
  return emp.length ? emp.map((i) => i.role).join("") : "Does not work here!";
}
