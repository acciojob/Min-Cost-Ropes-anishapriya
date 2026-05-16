function minCost(arr) {
    let cost = 0;

    while (arr.length > 1) {

        // sort array
        arr.sort((a, b) => a - b);

        // take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // connect them
        let sum = first + second;

        // add to total cost
        cost += sum;

        // push new rope
        arr.push(sum);
    }

    return cost;
}