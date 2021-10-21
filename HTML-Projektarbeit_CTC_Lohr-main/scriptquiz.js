document.getElementById("btnsubmit").addEventListener("click", myFunction);
const clrunchecked = "grey";
const clrchecked = "#ffDE06";
const clrright = "green";
const clrwrong = "red";

function myFunction() {
    // Question 1
    const q1a1 = document.getElementById("q1a1").checked;
    const q1a2 = document.getElementById("q1a2").checked;
    const q1a3 = document.getElementById("q1a3").checked;
    const q1a4 = document.getElementById("q1a4").checked;

    if (q1a1==true) {
        document.getElementById("Q1").style.backgroundColor = clrwrong;
    }
    else{
        if (q1a2==true) {
            document.getElementById("Q1").style.backgroundColor = clrwrong;
        }
        else{
            if (q1a3==true) {
                document.getElementById("Q1").style.backgroundColor = clrright;
            }
            else{
                if (q1a4==true) {
                    document.getElementById("Q1").style.backgroundColor = clrwrong;
                }
                else{
                    document.getElementById("Q1").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 2
    const q2a1 = document.getElementById("q2a1").checked;
    const q2a2 = document.getElementById("q2a2").checked;
    const q2a3 = document.getElementById("q2a3").checked;
    const q2a4 = document.getElementById("q2a4").checked;
    
    if (q2a1==true) {
        document.getElementById("Q2").style.backgroundColor = clrright;
    }
    else{
        if (q2a2==true) {
            document.getElementById("Q2").style.backgroundColor = clrwrong;
        }
        else{
            if (q2a3==true) {
                document.getElementById("Q2").style.backgroundColor = clrwrong;
            }
            else{
                if (q2a4==true) {
                    document.getElementById("Q2").style.backgroundColor = clrwrong;
                }
                else{
                    document.getElementById("Q2").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 3
    const q3a1 = document.getElementById("q3a1").checked;
    const q3a2 = document.getElementById("q3a2").checked;
    const q3a3 = document.getElementById("q3a3").checked;
    const q3a4 = document.getElementById("q3a4").checked;
    
    if (q3a1==true) {
        document.getElementById("Q3").style.backgroundColor = clrchecked;
    }
    else{
        if (q3a2==true) {
            document.getElementById("Q3").style.backgroundColor = clrchecked;
        }
        else{
            if (q3a3==true) {
                document.getElementById("Q3").style.backgroundColor = clrchecked;
            }
            else{
                if (q3a4==true) {
                    document.getElementById("Q3").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q3").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 4
    const q4a1 = document.getElementById("q4a1").checked;
    const q4a2 = document.getElementById("q4a2").checked;
    const q4a3 = document.getElementById("q4a3").checked;
    const q4a4 = document.getElementById("q4a4").checked;
    
    if (q4a1==true) {
        document.getElementById("Q4").style.backgroundColor = clrchecked;
    }
    else{
        if (q4a2==true) {
            document.getElementById("Q4").style.backgroundColor = clrchecked;
        }
        else{
            if (q4a3==true) {
                document.getElementById("Q4").style.backgroundColor = clrchecked;
            }
            else{
                if (q4a4==true) {
                    document.getElementById("Q4").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q4").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 5
    const q5a1 = document.getElementById("q5a1").checked;
    const q5a2 = document.getElementById("q5a2").checked;
    const q5a3 = document.getElementById("q5a3").checked;
    const q5a4 = document.getElementById("q5a4").checked;
    
    if (q5a1==true) {
        document.getElementById("Q5").style.backgroundColor = clrchecked;
    }
    else{
        if (q5a2==true) {
            document.getElementById("Q5").style.backgroundColor = clrchecked;
        }
        else{
            if (q5a3==true) {
                document.getElementById("Q5").style.backgroundColor = clrchecked;
            }
            else{
                if (q5a4==true) {
                    document.getElementById("Q5").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q5").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 6
    const q6a1 = document.getElementById("q6a1").checked;
    const q6a2 = document.getElementById("q6a2").checked;
    const q6a3 = document.getElementById("q6a3").checked;
    const q6a4 = document.getElementById("q6a4").checked;
    
    if (q6a1==true) {
        document.getElementById("Q6").style.backgroundColor = clrchecked;
    }
    else{
        if (q6a2==true) {
            document.getElementById("Q6").style.backgroundColor = clrchecked;
        }
        else{
            if (q6a3==true) {
                document.getElementById("Q6").style.backgroundColor = clrchecked;
            }
            else{
                if (q6a4==true) {
                    document.getElementById("Q6").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q6").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 7
    const q7a1 = document.getElementById("q7a1").checked;
    const q7a2 = document.getElementById("q7a2").checked;
    const q7a3 = document.getElementById("q7a3").checked;
    const q7a4 = document.getElementById("q7a4").checked;
    
    if (q7a1==true) {
        document.getElementById("Q7").style.backgroundColor = clrchecked;
    }
    else{
        if (q7a2==true) {
            document.getElementById("Q7").style.backgroundColor = clrchecked;
        }
        else{
            if (q7a3==true) {
                document.getElementById("Q7").style.backgroundColor = clrchecked;
            }
            else{
                if (q7a4==true) {
                    document.getElementById("Q7").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q7").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 8
    const q8a1 = document.getElementById("q8a1").checked;
    const q8a2 = document.getElementById("q8a2").checked;
    const q8a3 = document.getElementById("q8a3").checked;
    const q8a4 = document.getElementById("q8a4").checked;
    
    if (q8a1==true) {
        document.getElementById("Q8").style.backgroundColor = clrchecked;
    }
    else{
        if (q8a2==true) {
            document.getElementById("Q8").style.backgroundColor = clrchecked;
        }
        else{
            if (q8a3==true) {
                document.getElementById("Q8").style.backgroundColor = clrchecked;
            }
            else{
                if (q8a4==true) {
                    document.getElementById("Q8").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q8").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 9
    const q9a1 = document.getElementById("q9a1").checked;
    const q9a2 = document.getElementById("q9a2").checked;
    const q9a3 = document.getElementById("q9a3").checked;
    const q9a4 = document.getElementById("q9a4").checked;
    
    if (q9a1==true) {
        document.getElementById("Q9").style.backgroundColor = clrchecked;
    }
    else{
        if (q9a2==true) {
            document.getElementById("Q9").style.backgroundColor = clrchecked;
        }
        else{
            if (q9a3==true) {
                document.getElementById("Q9").style.backgroundColor = clrchecked;
            }
            else{
                if (q9a4==true) {
                    document.getElementById("Q9").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q9").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
    // Question 10
    const q10a1 = document.getElementById("q10a1").checked;
    const q10a2 = document.getElementById("q10a2").checked;
    const q10a3 = document.getElementById("q10a3").checked;
    const q10a4 = document.getElementById("q10a4").checked;
    
    if (q10a1==true) {
        document.getElementById("Q10").style.backgroundColor = clrchecked;
    }
    else{
        if (q10a2==true) {
            document.getElementById("Q10").style.backgroundColor = clrchecked;
        }
        else{
            if (q10a3==true) {
                document.getElementById("Q10").style.backgroundColor = clrchecked;
            }
            else{
                if (q10a4==true) {
                    document.getElementById("Q10").style.backgroundColor = clrchecked;
                }
                else{
                    document.getElementById("Q10").style.backgroundColor = clrunchecked;
                }
            }
        }
    }
}