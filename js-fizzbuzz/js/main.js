const fizzContainer = document.querySelector(".fizz-container");
const totalCells = 10 * 10


for (let i = 1; i <= totalCells; i++) {
    let singleCell = document.createElement("div");
    singleCell.classList.add("fizz-square");
    singleCell.innerHTML = i.toString();
    singleCell.classList.add("text-light", "text-center", "py-5", "m-2")
    const num1 = 3;
    const num2 = 5;
    
    if (i % num1 === 0 && i % num2 === 0) {
        singleCell.classList.add("bg-danger");
        singleCell.innerHTML = "FIZZBUZZ"
        // console.log(i + "FizzBuzz");
    }
    else if (i % num1 === 0) {
        singleCell.classList.add("bg-info")
        singleCell.innerHTML = "FIZZ"
        // console.log(i + "Buzz");
    }
    else if (i % num2 === 0) {
        singleCell.classList.add("bg-warning")
        singleCell.innerHTML = "BUZZ"
        // console.log(i + "Fizz");
    }
    else {
        singleCell.classList.add("bg-primary")
        // console.log(i);
    }
    fizzContainer.append(singleCell);
}