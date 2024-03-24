

function getNetSalary(){
    let basicSalary = parseFloat(document.getElementById('basic-salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);

    let payee = getPayee(basicSalary);
    let nhifDeduction = getNHIF(basicSalary);
    let nssfDeductions = getNSSF(basicSalary);
   
    let grossSalary = basicSalary + benefits;
    let netSalary =grossSalary - payee - nhifDeduction - nssfDeductions;

    document.getElementById('net-salary-output').innerHTML = `
    <p>Gross Salary: ${grossSalary}</p>
    <p>Payee (Tax): ${payee}</p>
    <p>NHIF Deductions: ${nhifDeduction}</p>
    <p>NSSF Deductions: ${nssfDeductions}</p>
    <p>Net Salary: ${netSalary}</p>
    `;
}

function getPayee(salary){
    let employeeContribution = salary * 0.02; 
    let employerContribution = salary * 0.04;
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
}

function getNHIF(salary){
    let employeeContribution = salary * 0.05;
    let employerContribution = salary * 0.07;
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
}

function getNSSF(salary){
    let employeeContribution = salary * 0.06;
    let employerContribution = salary * 0.06;
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
}