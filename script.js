let targetId;

$(document).ready(function(){
  $(".algorithm-steps button").click(function(event){
    targetId = event.target.id;
    console.log(targetId);

    if (targetId === "passes"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passes").css("display", "block");
    }

    if (targetId === "fails"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.fails").css("display", "block");
    }

    if (targetId === "failsPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.failsPasses").css("display", "block");
    }

    if (targetId === "failsFails"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.failsFails").css("display", "block");
    }

    if (targetId === "passesFails"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesFails").css("display", "block");
    }

    if (targetId === "passesPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPasses").css("display", "block");
    }

    if (targetId === "passesPassesPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPassesPasses").css("display", "block");
    }

    if (targetId === "passesPassesFails"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPassesFails").css("display", "block");
    }

    if (targetId === "passesPassesPassesFails"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPassesPassesFails").css("display", "block");
    }

    if (targetId === "passesPassesPassesPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPassesPassesPasses").css("display", "block");
    }

    if (targetId === "backStart"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.start").css("display", "block");
    }

    if (targetId === "backPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passes").css("display", "block");
    }

    if (targetId === "backFails"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.fails").css("display", "block");
    }

    if (targetId === "backPassesPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPasses").css("display", "block");
    }

    if (targetId === "backPassesPassesPasses"){
      $(".algorithm-steps").css("display", "none");
      $(".algorithm-steps.passesPassesPasses").css("display", "block");
    }

  });
});

