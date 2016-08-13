$(document).ready(function(){
    $(document).on("click", ".icons.disabled", function(){
        $("#value-text")[0].className="container border-bottom"
        switch(this.id){
            case "trust-icon":
                $("#value-text").fadeOut(250, function(){
                    $(this).html("<p class='text'><strong>The Trust Icon Text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dolor eget ante dictum luctus. In laoreet neque nec dignissim volutpat. Morbi rutrum porttitor nunc non tempus. Curabitur ac tortor orci. Vestibulum eu est ex.</p>").fadeIn(250);
                })
                break;
            case "legacy-icon":
                $("#value-text").fadeOut(250, function(){
                    $(this).html("<p class='text'><strong>The Legacy Icon Text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dolor eget ante dictum luctus. In laoreet neque nec dignissim volutpat. Morbi rutrum porttitor nunc non tempus. Curabitur ac tortor orci. Vestibulum eu est ex.</p>").fadeIn(250);
                })
                break;
            case "service-icon":
                $("#value-text").fadeOut(250, function(){
                    $(this).html("<p class='text'><strong>The Service Icon Text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dolor eget ante dictum luctus. In laoreet neque nec dignissim volutpat. Morbi rutrum porttitor nunc non tempus. Curabitur ac tortor orci. Vestibulum eu est ex.</p>").fadeIn(250);
                })
                break;
            }
        setToDisabled();
        this.className=this.className.replace('disabled', 'active');
    });

    $(document).on("click", ".icons.active", function(){
        $("#value-text").fadeOut(250, function(){
            $(this).html("<p class='text'></p>");
        })
        $("#value-text")[0].className="container"
        setToDisabled();
    });

    function setToDisabled(){
        $.each($(".icons.active"), function(index, value){
            value.className=this.className.replace('active', 'disabled')
        });
    }
 });
