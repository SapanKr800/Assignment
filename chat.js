
    function chatBot() {
      document.getElementById("myDIV").style.height = "350px ";
      var click = document.getElementById("Hide-chat");
      var show = document.getElementById("show-chat");

      if (click.style.display === "none") {


        click.style.display = "block";


      } else {

        click.style.display = "none";
        show.style.display = "block";



      }
    }


    function chatShow() {
      var x = document.getElementById("myDIV");
      var y = document.getElementById("IMG");
      var z = document.getElementById("mat-icon");
     
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
        
      } else {
        x.style.display = "none";
       y.style.display = "block";
        z.style.display = "none";
      }
     
  
    }




    
  /******************** */




  function userInput() {

    var x = document.getElementById("fname").value;
    if(x.trim()==""){

      
  }
  else{
    var p1 = document.createElement('p');
    var p2 = document.createElement('h5');

    p1.textContent = x;

    var content = document.getElementById('content');

    content.appendChild(p1).id = "user-send";
    var api = content.appendChild(p2);


    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => api.innerHTML = ` ${data.slip.advice}`)
      .catch(error => consloe.log('error'))
  
  }
    document.getElementById("fname").value = "";
  }



