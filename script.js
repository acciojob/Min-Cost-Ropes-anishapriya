

function mincost(arr) {
    let cost = 0;

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Repeat until only one rope is left
    while (arr.length > 1) {

        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Cost to connect them
        let sum = first + second;

        // Add to total cost
        cost += sum;

        // Put the new rope back into array
        arr.push(sum);

        // Sort again
        arr.sort((a, b) => a - b);
    }

    return cost;
}

// Example
console.log(mincost([4, 3, 2, 6])); // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33