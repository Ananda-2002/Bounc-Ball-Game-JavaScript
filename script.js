function start() {

  //================================  play background audio ======================================== 
  var gameAudio = document.createElement("audio");              // create audio element
  gameAudio.setAttribute("src", "sounds/game.wav");             // select audio source
  gameAudio.loop = true;                                        // play audio in infinite loop
  gameAudio.play();                                             // play audio
// =================================================================================================

  document.getElementById("start").style.display = "none";      // hiding start button 
  ball = document.getElementById("ball");                       // select ball element
  goLeft = false;                                               // flag variable
  goLeftfory = false;                                           // this is also flag variable

  gameRunning = setInterval(() => {

    //=================  finding computed position of surface and ball ==============================================
    surfaceX = parseInt(window.getComputedStyle(surface, null).getPropertyValue("left"));       // find computed X of surface
    surfaceY = parseInt(window.getComputedStyle(surface, null).getPropertyValue("top"));        // find computed Y of surface
    ballX = parseInt(window.getComputedStyle(ball, null).getPropertyValue("left"));             // find computed X of ball
    ballY = parseInt(window.getComputedStyle(ball, null).getPropertyValue("top"));              // find computed Y of ball
    // =============================================================================================

    //  calculating difference between surface and ball ============================================
    offsetX = Math.abs(ballX - surfaceX);
    offsetY = Math.abs(ballY - surfaceY);
    // =============================================================================================


    // =====  calling 'brickRemove' function and pass element Id========================================================================================
    brickRemove(a1);
    brickRemove(a2);
    brickRemove(a3);
    brickRemove(a4);
    brickRemove(a5);    
    brickRemove(a6);
    brickRemove(a7);
    brickRemove(a8);
    brickRemove(a9);
    brickRemove(a10);
    brickRemove(a11);
    brickRemove(a12);
    brickRemove(a13);
    brickRemove(a14);
    brickRemove(a15);
    brickRemove(a16);
    brickRemove(a17);
    brickRemove(a18);
    brickRemove(a19);

    brickRemove(b1);
    brickRemove(b2);
    brickRemove(b3);
    brickRemove(b4);
    brickRemove(b5);
    brickRemove(b1);
    brickRemove(b6);
    brickRemove(b7);
    brickRemove(b8);
    brickRemove(b9);
    brickRemove(b10);
    brickRemove(b11);
    brickRemove(b12);
    brickRemove(b13);
    brickRemove(b14);
    brickRemove(b15);
    brickRemove(b16);
    brickRemove(b17);
    brickRemove(b18);
    brickRemove(b19);

    brickRemove(c1);
    brickRemove(c2);
    brickRemove(c3);
    brickRemove(c4);
    brickRemove(c5);
    brickRemove(c1);
    brickRemove(c6);
    brickRemove(c7);
    brickRemove(c8);
    brickRemove(c9);
    brickRemove(c10);
    brickRemove(c11);
    brickRemove(c12);
    brickRemove(c13);
    brickRemove(c14);
    brickRemove(c15);
    brickRemove(c16);
    brickRemove(c17);
    brickRemove(c18);
    brickRemove(c19);



    //===================================================================


    // ==========================  moving ball ===================================================================
    if (goLeft == false) {
     
      extraMovement = Math.random() * 10;                   
      extraMovement = Math.round(extraMovement)-2;
      ball.style.transform = `rotate(${extraMovement}deg);`
      ball.style.left = ballX + 2 + extraMovement + "px"     
    }

    if (goLeft == true) {
      ball.style.left = ballX - 2 + "px";
    }
    if (ballX > 560) {
      goLeft = true;
    }
    if (ballX < 10) {
      goLeft = false;
    }
    // ================================================================================================================
  
    if (goLeftfory == false) {
      ball.style.top = ballY + 2 + "px";
    }

    if (goLeftfory == true) {
      ball.style.top = ballY - 2 + "px";
    }

    if (offsetX < 100 && offsetY < 20) {
 
      goLeftfory = true;
    }

    if (ballY > 690) {
      document.getElementById("gameover").style.display = "block";
      var gameOverAudio = document.createElement("audio");
      gameOverAudio.setAttribute("src", "sounds/over.mp3");
      gameOverAudio.play();
      gameAudio.pause();
      clearInterval(gameRunning);
    }

    if (ballY < 5) {
      goLeftfory = false;
    }

  }, 6);
  //==================================================================================================================   



  // ============================= brick hiding function =============================================================

  function brickRemove(bricks) {

    // finding the computed position of bricks ==========================================================================
    brickX = parseInt(window.getComputedStyle(bricks, null).getPropertyValue("left"));       // calculate computed X of bricks
    brickY = parseInt(window.getComputedStyle(bricks, null).getPropertyValue("top"));        // calculate computed Y of bricks

    ballX1 = parseInt(window.getComputedStyle(ball, null).getPropertyValue("left"));          // calculate computed X of ball 
    ballY1 = parseInt(window.getComputedStyle(ball, null).getPropertyValue("top"));           // calculate computed Y of ball

  //  finding the difference between bricks and ball ====================================================================

    bricksetX = Math.abs(ballX1 - brickX);   // computing the difference between ball and bricks
    bricksetY = Math.abs(ballY1 - brickY);

  // ====================================================================================================================

    if (bricksetY < 3 && bricksetX < 10) {
      var touchBrickAudio = document.createElement("audio");
      touchBrickAudio.setAttribute("src", "sounds/bounce.wav");
      touchBrickAudio.play()

      bricks.style.display = "none";
      goLeftfory = false;
      value = document.getElementById("value").innerText;
      scoreValue = parseInt(value);
      scoreValue = scoreValue + 1;
      document.getElementById("value").innerText = `${scoreValue}`;
      if (scoreValue == 60) {
        gameAudio.pause();
        document.getElementById("winner").style.display = "block";        
        clearInterval(gameRunning); 
      }
    }
  }


  // ========================== surface moving function ===============================================
  document.onkeypress = function (e) {
    surface = document.getElementById("surface");
    surfaceX = parseInt(
      window.getComputedStyle(surface, null).getPropertyValue("left")
    );
    let key = e.keyCode;
    if (key == 100 && surfaceX < 450) {
      surface.style.left = surfaceX + 40 + "px";
    } else if (key == 97 && surfaceX > 10) {
      surface.style.left = surfaceX - 40 + "px";
    }
  }
}

//  ===================================================== END ===========================================