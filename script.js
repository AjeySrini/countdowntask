
var div = document.createElement("div");
div.setAttribute("id", "cd");

document.body.append(div);

setTimeout(() => {
    document.getElementById("cd").innerHTML = 10;
    setTimeout(() => {
        document.getElementById("cd").innerHTML = 9;
        setTimeout(() => {
            document.getElementById("cd").innerHTML = 8;
            setTimeout(() => {
                document.getElementById("cd").innerHTML = 7;
                setTimeout(() => {
                    document.getElementById("cd").innerHTML = 6;
                    setTimeout(() => {
                        document.getElementById("cd").innerHTML = 5;
                        setTimeout(() => {
                            document.getElementById("cd").innerHTML = 4;
                            setTimeout(() => {
                                document.getElementById("cd").innerHTML = 3;
                                setTimeout(() => {
                                    document.getElementById("cd").innerHTML = 2;
                                    setTimeout(() => {
                                        document.getElementById("cd").innerHTML = 1;
                                        setTimeout(() => {
                                            document.getElementById("cd").innerHTML = "Happy New Year";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 0)