$(document).ready(function() {
    $('.searchIcon').click(function(){
        $(".searchSlide").slideDown();
    });
    $('.exitIcon').click(function(){
        $(".searchSlide").slideUp();
    });
    //-----------------------------------------------------------//
    $('.features i,.questionCard i').hover(function(){
        $(this).toggleClass('animate__animated animate__flip');
    });
    //-----------------------------------------------------------//
    var servicesAnimation = function(div,i,p) {
        $(div).mouseenter(function(){
            $(i).toggleClass('animate__animated animate__flip');
            $(p).show();
        });
        $(div).mouseleave(function(){
            $(p).hide();
        });
    };
    servicesAnimation('.creativeDesign','.creativeDesign i','.creativeDesign p')
    servicesAnimation('.userExperience','.userExperience i','.userExperience p')
    servicesAnimation('.retinaReady','.retinaReady i','.retinaReady p')
    //-----------------------------------------------------------//
    var latestWorkAnimation = function(mainDiv,mask,p) {
        $(mainDiv).mouseenter(function(){
            $(p).hide();
            $(mask).css('display','flex');
        });
        $(mainDiv).mouseleave(function(){
            $(mask).hide();
            $(p).show();
        });
    };
    latestWorkAnimation('.strategy1','.strategy1 .mask','.strategy1 .outerP')
    latestWorkAnimation('.web','.web .mask','.web .outerP')
    latestWorkAnimation('.creative','.creative .mask','.creative .outerP')
    latestWorkAnimation('.strategy2','.strategy2 .mask','.strategy2 .outerP')
    //-----------------------------------------------------------//
    $('.questionCard i').each(function(){
        $(this).click(function(){
            $(this).toggleClass('bx-plus');
            $(this).toggleClass('bx-minus');
            if($(this).hasClass('cardIcon1')){
                $('.questionCard .card1 .hiddenP').toggle();
                $('.hiddenP').not('.questionCard .card1 .hiddenP').hide();
            }
            else if($(this).hasClass('cardIcon2')){
                $('.questionCard .card2 .hiddenP').toggle();
                $('.hiddenP').not('.questionCard .card2 .hiddenP').hide();
            }
            else if($(this).hasClass('cardIcon3')){
                $('.questionCard .card3 .hiddenP').toggle();
                $('.hiddenP').not('.questionCard .card3 .hiddenP').hide();
            }
            else{
                $('.questionCard .card4 .hiddenP').toggle();
                $('.hiddenP').not('.questionCard .card4 .hiddenP').hide();
            };
            $('.bx-minus').not(this).addClass('bx-plus');
            $('.bx-minus').not(this).removeClass('bx-minus');
        });
    });
    //-----------------------------------------------------------//
    var newsAnimation = function(btn,img,date) {
        $(btn).mouseenter(function(){
            $(img).css('border-image-source','var(--basic-toRightGradient)').css('border-image-slice','1');
            $(date).css('background-image','var(--basic-toRightGradient)');
        });
        $(btn).mouseleave(function(){
            $(img).css('border-image-source','none');
            $(date).css('background-image','none').css('background-color','var(--main-newsColor)');
        });
    };
    newsAnimation('#newsBtn1','#latest-newsImg1','#post1Date');
    newsAnimation('#newsBtn2','#latest-newsImg2','#post2Date');
    //-----------------------------------------------------------//
});