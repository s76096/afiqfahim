// 1. Define Multi-Dimensional Array studentData
// Format: [Name, Credit Hour, Current GPA]
let studentData = [
    ["Ali", 18, 3.75],
    ["Aina", 20, 3.40],
    ["Hakim", 15, 3.80],
    ["Sara", 22, 2.90]
];

// 2. Function to check Dean's List eligibility
function checkEligibility(creditHour, gpa) {
    if (creditHour >= 12 && gpa >= 3.50) {
        return "<span class='eligible'>Eligible for Dean's List</span>";
    } else {
        return "<span class='not-eligible'>Not Eligible</span>";
    }
}

let output = document.getElementById("output");

// 3. Loop through student data
for (let i = 0; i < studentData.length; i++) {
    let name = studentData[i][0];
    let credit = studentData[i][1];
    let gpa = studentData[i][2];

    let status = checkEligibility(credit, gpa);

    // 4. Print output (inside loop)
    output.innerHTML += `
        <div>
            <b>Name:</b> ${name}<br>
            <b>Credit Hours:</b> ${credit}<br>
            <b>Current GPA:</b> ${gpa}<br>
            <b>Status:</b> ${status}<br>
            <hr style="border-top: 1px dotted #ccc;">
        </div>
    `;
}
