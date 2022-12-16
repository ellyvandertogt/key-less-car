// var age = prompt("What is your age?");
// if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering on. Enjoy the drive!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// }

var age = prompt("What is your age?");
if (age) {
    if (age < 18) {
        alert("Sorry, you are too young to drive. Powering off");
    } else if (age > 18) {
        alert("Powering on. Enjoy the drive!");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
