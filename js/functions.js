$(document).ready(function() {
    
    var vids = $("video"); 
    $.each(vids, function(){
           this.controls = false; 
    }); 
    //Loop though all Video tags and set Controls as false

    $("video").click(function() {
      //console.log(this); 
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    });
    
    
    function equalHeight(group) {
        tallest = $("#video").height();
        group.each(function() {
            thisHeight = $(this).height();
            if(thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }
    equalHeight($(".copy"));
    
    function sendMail() {
    var link = "mailto: info@chauffeurbogota.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
    }
})