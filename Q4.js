function generateNumbersBetween(start, end) {
    if (start > end) {
        // Swap values if start is greater than end
        [start, end] = [end, start];
    }

    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

// Example usage
const startNumber = 5;
const endNumber = 10;

const generatedNumbers = generateNumbersBetween(startNumber, endNumber);
console.log(generatedNumbers); // Outputs [5, 6, 7, 8, 9, 10]
