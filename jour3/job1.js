document.addEventListener("DOMContentLoaded", () => {console.log("page charger!");});


function calc(){
  let a = document.getElementById("nbr1").value;
  let b = document.getElementById("nbr2").value;
  let resultElement = document.getElementById("result");
  if(a !== "" && b !== "") {
    if (isNaN(a) === false && isNaN(b) === false) {
      let result = parseInt(a) + parseInt(b)
      document.getElementById("result").innerHTML = result;
      console.log(result)
    } else {
      alert("veuillez saisair uniquement des nombres")
    }
  } else {
    alert("veuillez ecrire une valeur")
  }
}
