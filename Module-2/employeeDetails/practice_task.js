const employees = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    department: 'IT',
    salary: 50000,
    specialization: 'AWS',
  },
  {
    id: 2,
    name: 'Alice Smith',
    age: 28,
    department: 'HR',
    salary: 45000,
    specialization: 'Microsoft Excel',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 35,
    department: 'Finance',
    salary: 60000,
    specialization: 'Microsoft PowerBI',
  },
  {
    id: 4,
    name: 'Firdaus Razali',
    age: 29,
    department: 'IT',
    salary: 120000,
    specialization: 'JavaScript',
  },
  {
    id: 5,
    name: 'Muhamad Firdaus',
    age: 29,
    department: 'IT',
    salary: 108000,
    specialization: 'SQL',
  },
  //... More employee records can be added here
];

const employeeDetails = document.getElementById('employeeDetails');

let isEmployeesDisplayed = false;
let isHREmployeesDisplayed = false;
let isFindEmployeeByIdDisplayed = false;
let isFindEmployeeBySpecializationDisplayed = false;

function displayEmployees() {
  if (isEmployeesDisplayed) {
    return;
  }

  employeeDetails.textContent = '';
  isHREmployeesDisplayed = false;
  isFindEmployeeByIdDisplayed = false;
  isFindEmployeeBySpecializationDisplayed = false;
  const employeesHeading = document.createElement('h3');
  employeesHeading.textContent = 'All Employees';
  employeeDetails.appendChild(employeesHeading);

  employees.forEach((employee, index) => {
    const employeeDiv = document.createElement('div');

    const employeePara = document.createElement('p');
    employeePara.textContent = `Employee ID: ${employee.id}`;

    const employeeUl = document.createElement('ul');

    const employeeNameLi = document.createElement('li');
    employeeNameLi.textContent = `Name: ${employee.name}`;

    const employeeAgeLi = document.createElement('li');
    employeeAgeLi.textContent = `Age: ${employee.age}`;

    const employeeDeptLi = document.createElement('li');
    employeeDeptLi.textContent = `Department: ${employee.department}`;

    const employeeSalaryLi = document.createElement('li');
    employeeSalaryLi.textContent = `Salary: $${employee.salary}`;

    employeeUl.appendChild(employeeNameLi);
    employeeUl.appendChild(employeeAgeLi);
    employeeUl.appendChild(employeeDeptLi);
    employeeUl.appendChild(employeeSalaryLi);

    employeeDiv.appendChild(employeePara);
    employeeDiv.appendChild(employeeUl);
    employeeDetails.appendChild(employeeDiv);
  });

  // OR
  /*
  const totalEmployees = employees.map((employee) => { 
    return `<div>
      <p>Employee ID: ${employee.id}</p>
      <ul>
        <li>Name: ${employee.name}</li>
        <li>Age: ${employee.age}</li>
        <li>Department: ${employee.department}</li>
        <li>Salary: $${employee.salary}</li>
      </ul>
    </div>`;
  }).join('');
  
  employeeDetails.innerHTML = totalEmployees;
  */

  isEmployeesDisplayed = true;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => {
    return acc + employee.salary;
  }, 0);
  isEmployeesDisplayed = false;
  isHREmployeesDisplayed = false;
  isFindEmployeeByIdDisplayed = false;
  isFindEmployeeBySpecializationDisplayed = false;
  employeeDetails.textContent = '';
  alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
  if (isHREmployeesDisplayed) {
    return;
  }

  employeeDetails.textContent = '';
  isEmployeesDisplayed = false;
  isFindEmployeeByIdDisplayed = false;
  isFindEmployeeBySpecializationDisplayed = false;
  const hrEmployeeHeading = document.createElement('h3');
  hrEmployeeHeading.textContent = 'HR Employees';
  employeeDetails.appendChild(hrEmployeeHeading);

  const hrEmployees = employees.filter(employee => {
    return employee.department === 'HR';
  });

  hrEmployees.forEach(hrEmployee => {
    const hrEmployeesDiv = document.createElement('div');
    const hrEmployeesUl = document.createElement('ul');

    const hrEmployeeIDLi = document.createElement('li');
    hrEmployeeIDLi.textContent = `ID: ${hrEmployee.id}`;

    const hrEmployeeNameLi = document.createElement('li');
    hrEmployeeNameLi.textContent = `Name: ${hrEmployee.name}`;

    const hrEmployeeAgeLi = document.createElement('li');
    hrEmployeeAgeLi.textContent = `Age: ${hrEmployee.age}`;

    const hrEmployeeDeptLi = document.createElement('li');
    hrEmployeeDeptLi.textContent = `Department: ${hrEmployee.department}`;

    const hrEmployeeSalaryLi = document.createElement('li');
    hrEmployeeSalaryLi.textContent = `Salary: $${hrEmployee.salary}`;

    hrEmployeesUl.appendChild(hrEmployeeIDLi);
    hrEmployeesUl.appendChild(hrEmployeeNameLi);
    hrEmployeesUl.appendChild(hrEmployeeAgeLi);
    hrEmployeesUl.appendChild(hrEmployeeDeptLi);
    hrEmployeesUl.appendChild(hrEmployeeSalaryLi);

    hrEmployeesDiv.appendChild(hrEmployeesUl);
    employeeDetails.appendChild(hrEmployeesDiv);
  });

  // OR
  /*
  const hrEmployeesDisplay = hrEmployees.map((hrEmployee) => { 
    return `<div>
      <ul>
        <li>ID: ${employee.id}</li>
        <li>Name: ${employee.name}</li>
        <li>Age: ${employee.age}</li>
        <li>Department: ${employee.department}</li>
        <li>Salary: $${employee.salary}</li>
      </ul>
    </div>`;
  }).join('');
  
  employeeDetails.innerHTML = hrEmployeesDisplay;
  */

  isHREmployeesDisplayed = true;
}

function findEmployeeById(employeeId) {
  if (isFindEmployeeByIdDisplayed) {
    return;
  }

  employeeDetails.textContent = '';
  isEmployeesDisplayed = false;
  isHREmployeesDisplayed = false;
  isFindEmployeeBySpecializationDisplayed = false;

  const foundEmployee = employees.find(employee => employee.id === employeeId);

  if (foundEmployee) {
    const EmployeeFoundHeading = document.createElement('h3');
    EmployeeFoundHeading.textContent = 'Employee Found!';
    employeeDetails.appendChild(EmployeeFoundHeading);

    const employeeFoundDiv = document.createElement('div');
    const employeeFoundUl = document.createElement('ul');

    const employeeFoundIDLi = document.createElement('li');
    employeeFoundIDLi.textContent = `ID: ${foundEmployee.id}`;

    const employeeFoundNameLi = document.createElement('li');
    employeeFoundNameLi.textContent = `Name: ${foundEmployee.name}`;

    const employeeFoundAgeLi = document.createElement('li');
    employeeFoundAgeLi.textContent = `Age: ${foundEmployee.age}`;

    const employeeFoundDeptLi = document.createElement('li');
    employeeFoundDeptLi.textContent = `Department: ${foundEmployee.department}`;

    const employeeFoundSalaryLi = document.createElement('li');
    employeeFoundSalaryLi.textContent = `Salary: $${foundEmployee.salary}`;

    employeeFoundUl.appendChild(employeeFoundIDLi);
    employeeFoundUl.appendChild(employeeFoundNameLi);
    employeeFoundUl.appendChild(employeeFoundAgeLi);
    employeeFoundUl.appendChild(employeeFoundDeptLi);
    employeeFoundUl.appendChild(employeeFoundSalaryLi);

    employeeFoundDiv.appendChild(employeeFoundUl);
    employeeDetails.appendChild(employeeFoundDiv);

    isFindEmployeeByIdDisplayed = true;
  }
}

function findEmployeeBySpecialization(employeeSpec) {
  if (isFindEmployeeBySpecializationDisplayed) {
    return;
  }

  employeeDetails.textContent = '';
  isEmployeesDisplayed = false;
  isHREmployeesDisplayed = false;
  isFindEmployeeByIdDisplayed = false;

  const foundEmployee = employees.find(employee => employee.specialization === employeeSpec);

  if (foundEmployee) {
    const EmployeeFoundHeading = document.createElement('h3');
    EmployeeFoundHeading.textContent = 'Employee Found!';
    employeeDetails.appendChild(EmployeeFoundHeading);

    const employeeFoundDiv = document.createElement('div');
    const employeeFoundUl = document.createElement('ul');

    const employeeFoundIDLi = document.createElement('li');
    employeeFoundIDLi.textContent = `ID: ${foundEmployee.id}`;

    const employeeFoundNameLi = document.createElement('li');
    employeeFoundNameLi.textContent = `Name: ${foundEmployee.name}`;

    const employeeFoundAgeLi = document.createElement('li');
    employeeFoundAgeLi.textContent = `Age: ${foundEmployee.age}`;

    const employeeFoundDeptLi = document.createElement('li');
    employeeFoundDeptLi.textContent = `Department: ${foundEmployee.department}`;

    const employeeFoundSalaryLi = document.createElement('li');
    employeeFoundSalaryLi.textContent = `Salary: $${foundEmployee.salary}`;

    const employeeFoundSpecLi = document.createElement('li');
    employeeFoundSpecLi.textContent = `Specialization: ${foundEmployee.specialization}`;

    employeeFoundUl.appendChild(employeeFoundIDLi);
    employeeFoundUl.appendChild(employeeFoundNameLi);
    employeeFoundUl.appendChild(employeeFoundAgeLi);
    employeeFoundUl.appendChild(employeeFoundDeptLi);
    employeeFoundUl.appendChild(employeeFoundSalaryLi);
    employeeFoundUl.appendChild(employeeFoundSpecLi);

    employeeFoundDiv.appendChild(employeeFoundUl);
    employeeDetails.appendChild(employeeFoundDiv);

    isFindEmployeeBySpecializationDisplayed = true;
  }
}

function resetAll() {
  isEmployeesDisplayed = false;
  isHREmployeesDisplayed = false;
  isFindEmployeeByIdDisplayed = false;
  isFindEmployeeBySpecializationDisplayed = false;
  employeeDetails.textContent = '';
}