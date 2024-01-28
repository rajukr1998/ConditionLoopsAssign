// Function to determine the grade based on marks
function calculateGrade(marks) {
    if (marks > 90) {
        return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
        return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
        return 'C Grade';
    } else {
        return 'F Grade';
    }
}

// Example usage
const studentMarks = 85;
const studentGrade = calculateGrade(studentMarks);

console.log(`Student marks: ${studentMarks}`);
console.log(`Student grade: ${studentGrade}`);
