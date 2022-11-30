import React from 'react'
import HomeNav from './homenav';
function Dashboard() {
  function runTests() {
    let btn = document.getElementById("runtestsbtn");
    btn.style.display = "none";
    document.getElementById("results").innerHTML = "Running...";

    const code = document.getElementById("code").value;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("results").innerHTML = xhr.responseText;
            btn.style.display = "initial";
        }
    }

    xhr.open("POST", "http://localhost:8000/test/");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("code=" + code);
}
  return (
    <div>
        <HomeNav/>
        <div class="containerQuestion">
      <div class="question">
        <h2><strong>QUESTION</strong></h2>

        <br /><br />Find the maximum number in an array of integers. <br />
        For example, in the array [1, -3, 5], the maximum number is 5.
      </div>
      <div class="code-area">
        <textarea rows="20" class="input" id="code" autofocus>
def solution(arr):</textarea
        >
        <br /><br />
        <button id="runtestsbtn" onClick={runTests}>RUN TESTS</button>
        <br /><br />
        <span id="results"></span>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
