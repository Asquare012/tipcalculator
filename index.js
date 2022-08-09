// declare percentage
let percentage;

// one
let one = document.querySelector("#one");
one.addEventListener("click", first);

function first() {
    percentage = 5;
    bill = document.querySelector("#inp").value;
    let people = document.querySelector(".second-inp").value;
    solution = ((percentage / 100) * bill) / people;
    document.querySelector("#per-person").innerHTML = "$" + solution;
    total = solution * 5;
    document.querySelector("#total").innerHTML = "$" + total;

    // warning
    if (people == false || bill == false) {
        document.querySelector("#per-person").innerHTML = "$0.00";

        document.querySelector("#total").innerHTML = "$0.00";
        document.querySelector("#alert").innerHTML = "Can't be zero";
    } else {
        document.querySelector("#alert").style.display = "none";
        // reset button
        document.querySelector("#reset").style.backgroundColor = "#03bba2";
    }
}

// two
let two = document.querySelector("#two");
two.addEventListener("click", second);

function second() {
    percentage = 10;
    bill = document.querySelector("#inp").value;
    people = document.querySelector(".second-inp").value;
    solution = ((percentage / 100) * bill) / people;
    document.querySelector("#per-person").innerHTML = "$" + solution;
    total = solution * 5;
    document.querySelector("#total").innerHTML = "$" + total;

    // warning
    if (people == false || bill == false) {
        document.querySelector("#per-person").innerHTML = "$0.00";
        document.querySelector("#total").innerHTML = "$0.00";
        document.querySelector("#alert").innerHTML = "Can't be zero";
    } else {
        document.querySelector("#alert").style.display = "none";
        // reset button
        document.querySelector("#reset").style.backgroundColor = "#03bba2";
    }
}

// three
let three = document.querySelector("#three");
three.addEventListener("click", third);

function third() {
    percentage = 15;
    bill = document.querySelector("#inp").value;
    people = document.querySelector(".second-inp").value;
    solution = ((percentage / 100) * bill) / people;
    document.querySelector("#per-person").innerHTML = "$" + solution;
    total = solution * 5;
    document.querySelector("#total").innerHTML = "$" + total;

    // warning
    if (people == false || bill == false) {
        document.querySelector("#per-person").innerHTML = "$0.00";
        document.querySelector("#total").innerHTML = "$0.00";
        document.querySelector("#alert").innerHTML = "Can't be zero";
    } else {
        document.querySelector("#alert").style.display = "none";
        // reset button
        document.querySelector("#reset").style.backgroundColor = "#03bba2";
    }
}

// four
let four = document.querySelector("#four");
four.addEventListener("click", fourth);

function fourth() {
    percentage = 25;
    bill = document.querySelector("#inp").value;
    people = document.querySelector(".second-inp").value;
    solution = ((percentage / 100) * bill) / people;
    document.querySelector("#per-person").innerHTML = "$" + solution;
    total = solution * 5;
    document.querySelector("#total").innerHTML = "$" + total;

    // warning
    if (people == false || bill == false) {
        document.querySelector("#per-person").innerHTML = "$0.00";
        document.querySelector("#total").innerHTML = "$0.00";
        document.querySelector("#alert").innerHTML = "Can't be zero";
    } else {
        document.querySelector("#alert").style.display = "none";
        // reset button
        document.querySelector("#reset").style.backgroundColor = "#03bba2";
    }
}

// five
let five = document.querySelector("#five");
five.addEventListener("click", fifth);

function fifth() {
    percentage = 50;
    bill = document.querySelector("#inp").value;
    people = document.querySelector(".second-inp").value;
    solution = ((percentage / 100) * bill) / people;
    document.querySelector("#per-person").innerHTML = "$" + solution;
    total = solution * 5;
    document.querySelector("#total").innerHTML = "$" + total;

    // warning
    if (people == false || bill == false) {
        document.querySelector("#per-person").innerHTML = "$0.00";
        document.querySelector("#total").innerHTML = "$0.00";
        document.querySelector("#alert").innerHTML = "Can't be zero";
    } else {
        document.querySelector("#alert").style.display = "none";
        // reset button
        document.querySelector("#reset").style.backgroundColor = "#03bba2";
    }
}

// reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", wipe);

function wipe() {
    // input
    document.querySelector("#inp").value = " ";
    document.querySelector(".second-inp").value = " ";
    // prices
    one = document.querySelector("#per-person").innerHTML = "$0.00";
    two = document.querySelector("#total").innerHTML = "$0.00";

    if (one == two) {
        reset.style.backgroundColor = "#057263";
    }
}
