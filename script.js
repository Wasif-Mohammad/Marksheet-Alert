var name = prompt("What is your name?");
var total = prompt("Total marks?");
var obtained = prompt("Marks you got?");

total = Number(total);
obtained = Number(obtained);

var percent = (obtained / total) * 100;

var remark;

if (percent < 60) {
    remark = "You failed.";
} else if (percent >= 60 && percent < 70) {
    remark = "You passed, but need to do better.";
} else if (percent >= 70 && percent < 80) {
    remark = "You're doing okay.";
} else if (percent >= 80 && percent < 90) {
    remark = "Nice job!";
} else {
    remark = "You're awesome!";
}

alert("Name: " + name + "\n" +
      "Marks Got: " + obtained + "\n" +
      "Total Marks: " + total + "\n" +
      "Percentage: " + percent + "%\n" +
      remark);
