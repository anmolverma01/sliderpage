/* eslint-env jquery */
$(function () {
    //all variable part of the corousel=======
    var i = 0;
    var j = 0;
    var bimg = 'background-image';
    var macimg = "linear-gradient(to top, rgba(0, 0, 0, 0.8),rgba(0,0, 0, 0.5)),url('maci.jpg')";
    var meimg = "linear-gradient(to top, rgba(0, 0, 0, 0.8),rgba(0,0, 0, 0.5)),url('me.jpg')";
    var homeimg = "linear-gradient(to top, rgba(0, 0, 0, 0.8),rgba(0,0, 0, 0.5)),url('home.jpg')";
    var text1 = "Great Values To Gain";
    var text2 = "Always Start From Step One";
    var text3 = "Unlease Your Style";
    //All Functions part of the corousel=======
    function bimac() {
        $('#homeimg').css(bimg, macimg);
        $("#homemain1").html(text1);
        $('#dot1').css('opacity', '1');
        $('#dot2, #dot3').css('opacity', '0.5');
    }

    function bime() {
        $('#homeimg').css(bimg, meimg);
        $("#homemain1").html(text2);
        $('#dot2').css('opacity', '1');
        $('#dot1, #dot3').css('opacity', '0.5');
    }

    function bihome() {
        $('#homeimg').css(bimg, homeimg);
        $("#homemain1").html(text3);
        $('#dot3').css('opacity', '1');
        $('#dot2, #dot1').css('opacity', '0.5');
    }
    //left-click part of the corousel=======
    $('#leftslide').on("click",
        function () {
            switch (i) {
                case (0):
                    $('#homeimg').animate({
                        opacity: "0%"
                    }, 300, bimac);
                    $('#homeimg').animate({
                        opacity: "100%"
                    }, 300);
                    i = 1;
                    j = 2;
                    break;
                case (1):
                    $('#homeimg').animate({
                        opacity: "0%"
                    }, 300, bime);
                    $('#homeimg').animate({
                        opacity: "100%"
                    }, 300);
                    i = 2;
                    j = 2;
                    break;
                case (2):
                    $('#homeimg').animate({
                        opacity: "0%"
                    }, 300, bihome);
                    $('#homeimg').animate({
                        opacity: "100%"
                    }, 300);
                    i = 0;
                    j = 1;
                    break;
            }
        });

    //Right-Click part of the corousel=======
    $('#rightslide').on("click",
        function () {
            switch (j) {
                case (0):
                    $('#homeimg').animate({
                        opacity: "0%"
                    }, 300, bime);
                    $('#homeimg').animate({
                        opacity: "100%"
                    }, 300);
                    j = 1;
                    i = 2;
                    break;
                case (1):
                    $('#homeimg').animate({
                        opacity: "0%"
                    }, 300, bimac);
                    $('#homeimg').animate({
                        opacity: "100%"
                    }, 300);
                    j = 2;
                    i = 1;
                    break;
                case (2):
                    $('#homeimg').animate({
                        opacity: "0%"
                    }, 300, bihome);
                    $('#homeimg').animate({
                        opacity: "100%"
                    }, 300);
                    j = 0;
                    i = 1;
                    break;
            }
        });
    //pagination part of the corousel=======
    $('#dot1').on("click", bimac);
    $('#dot2').on("click", bime);
    $('#dot3').on("click", bihome);
    //auto-slide part of the corousel=======
        setInterval(bimac, 5000);
        setInterval(bime, 10000);
        setInterval(bihome, 15000);
})
