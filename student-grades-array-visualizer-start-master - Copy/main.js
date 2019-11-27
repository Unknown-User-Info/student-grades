// STUDENT GRADES

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let grades = [];
for (n = 0; n < 50; n += 1) {
    grades.push(Math.random() * 100)
}
let max = 100; // grade values should be b/t 0 and max
console.log(grades)

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / grades.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < grades.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = grades[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'first40') {
        // Set the grade of the first student to 40.
        outputEl.innerHTML = 'First grade to 40';
        let n = grades.length - grades.length;
        grades[n] = 40;

    } else if (selection == 'last50') {
        // Set the grade of the last student to 50. 
        outputEl.innerHTML = 'Last grade to 50';
        let n = grades.length - 1;
        grades[n] = 50;

    } else if (selection == 'random100') {
        // Set the grade of a random student to 100.
        outputEl.innerHTML = 'Random grade to 100';


        let foundEl = false;
        while (foundEl == false){
            // choose and random element and check its value
            let n = Math.randomInt(0, grades.length);
            // if it's not 100, set foundEl to true and change the element to 100
            if (grades[n] != 100) {
                foundEl = true;
                grades[n] = 100;
            } else if (grades.every(gradeCheck) == true) {
                foundEl = true;
            } else {
                foundEl = false;
            }
            }

    } else if (selection == 'addRandom') {
        // Add a random grade between 0 and 100 to the end of the array.
        outputEl.innerHTML = 'Add random grade';
        let n = grades.length;
        grades.splice(n, 0, Math.randomInt(0, 101));

    } else if (selection == 'removeLast') {
        // Remove the last grade.
        outputEl.innerHTML = 'Remove the last grade';
        let n = grades.length;
        n--;
        grades.splice(n, 1);
        

    } else if (selection == 'count50') {

        let count = 0;
        // Count how many grades are below 50.  Output the result.
        outputEl.innerHTML = 'Count grades below 50';

        for (n = 0; n < grades.length; n++) {
            if (grades[n] < 50) {
                count++;
            }
        }
        outputEl.innerHTML += "<br> There is/are " + count + " grade/grades below 50";

    } else if (selection == 'change50') {
        // Change all grades that are below 50 to be equal to 50.
        outputEl.innerHTML = 'Change low grades to 50';

        for (n = 0; n < grades.length; n++) {
            if (grades[n] < 50) {
                grades[n] = 50;
            }
        }

    } else if (selection == 'increase10') {
        // Increase each grade by 10%.
        outputEl.innerHTML = 'Increase all grades by 10%';

        for (n = 0; n < grades.length; n++) {
            let increase = Number(grades[n] * 0.10);
            grades[n] += increase;
        }
    } else if (selection == 'decrease10') {
        // Decrease each grade by 10%.
        outputEl.innerHTML = 'Decrease all grades by 10%';

        for (n = 0; n < grades.length; n++) {
            let decrease = Number(grades[n] * 0.10);
            grades[n] -= decrease;
        }
    } else if (selection == 'remove50') {
        // Remove all grades that are below 50.
        outputEl.innerHTML = 'Remove grades below 50';

        for (n = 0; n < grades.length; n++) {
            console.log(grades[n]);
            if (grades[n] < 50) {
                console.log(grades[n]);
                grades.splice(n, 1);
                n--;
            }
        }
    } 
}

function gradeCheck(grade) {
    return grade == 100;
}