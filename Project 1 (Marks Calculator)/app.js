var target = document.getElementById("btn");

target.addEventListener("click", function() {
    var eng = document.getElementById("eng").value;
    var urdu = document.getElementById("urdu").value;
    var phy = document.getElementById("phy").value;
    var math = document.getElementById("math").value;

    var total = Number(eng) + Number(urdu) + Number(phy) + Number(math);

    var per = (total * 100) / 400;

    if (per >= 80 && per < 100) {
        var grade = "A1 You are pass";
    } else if (per >= 70 && per < 79) {
        var grade = "A You are Pass";
    } else if (per >= 60 && per < 69) {
        var grade = "B You are pass";
    } else {
        var grade = "You are fail";
    }

    document.getElementById(
        "text"
    ).innerHTML = `Your marks ${total} out of 400 <br>
    Your Percentage is: ${per}% <br> Your Grade is ${grade}`;

    // document.getElementById("text").innerHTML = total;
});