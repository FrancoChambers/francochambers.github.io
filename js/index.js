$(document).ready(function(){
    $(document).on("click", ".icons.disabled", function(){
        $("#value-text")[0].className="container border-bottom"
        switch(this.id){
            case "trust-icon":
                $("#value-text").fadeOut(250, function(){
                    $(this).html("<p class='text'><strong>The Trust Icon Text:</strong> We respect and honour the confidence that our clients have placed in our Company and commit ourselves to staunchly protect their trust.</p>").fadeIn(250);
                })
                break;
            case "legacy-icon":
                $("#value-text").fadeOut(250, function(){
                    $(this).html("<p class='text'><strong>The Legacy Icon Text:</strong> Tillman Thomas Chambers originally and Franco Chambers subsequently have a rich history of providing dedicated quality legal services to its clients and commit to providing even more exceptional services to our future clients.</p>").fadeIn(250);
                })
                break;
            case "service-icon":
                $("#value-text").fadeOut(250, function(){
                    $(this).html("<p class='text'><strong>The Service Icon Text:</strong> The legal services provided by Franco Chambers and Co. is unquestionable second to none; service is the foundation on which the Company is built; we will be relentless until our clients are satisfied with  the services provided by our Company.</p>").fadeIn(250);
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
