$(document).ready(function(){
    console.log("I am here");
    $(document).on("click", ".icons.disabled", function(){
        console.log("A disabled icon was clicked");
        $("#value-text")[0].className="container border-bottom"
        console.log(this);
        switch(this.id){
            case "trust-icon":
                $("#value-text").fadeOut(500, function(){
                    $(this).html("<p class='text'><strong>The Trust Icon Text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dolor eget ante dictum luctus. In laoreet neque nec dignissim volutpat. Morbi rutrum porttitor nunc non tempus. Curabitur ac tortor orci. Vestibulum eu est ex.</p>").fadeIn(500);
                })
                break;
            case "legacy-icon":
                $("#value-text").fadeOut(500, function(){
                    $(this).html("<p class='text'><strong>The Legacy Icon Text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dolor eget ante dictum luctus. In laoreet neque nec dignissim volutpat. Morbi rutrum porttitor nunc non tempus. Curabitur ac tortor orci. Vestibulum eu est ex.</p>").fadeIn(500);
                })
                break;
            case "service-icon":
                $("#value-text").fadeOut(500, function(){
                    $(this).html("<p class='text'><strong>The Service Icon Text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dolor eget ante dictum luctus. In laoreet neque nec dignissim volutpat. Morbi rutrum porttitor nunc non tempus. Curabitur ac tortor orci. Vestibulum eu est ex.</p>").fadeIn(500);
                })
                break;
            }
        setToDisabled();
        this.className=this.className.replace('disabled', 'active');
    });

    $(document).on("click", ".icons.active", function(){
        console.log("An Active icon was clicked");
        $("#value-text").html("<p class='text'></p>");
        $("#value-text")[0].className="container"
        console.log(this);
        setToDisabled();
    });

    function setToDisabled(){
        console.log("setting classes to be disabled now");
        $.each($(".icons.active"), function(index, value){
            value.className=this.className.replace('active', 'disabled')
        });
    }
 });

$(function() {

    $('#test').fadeOut(500, function() {
        $(this).text('Some other text!').fadeIn(500);
    });

});