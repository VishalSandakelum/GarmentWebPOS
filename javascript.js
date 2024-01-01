var count = 1;

$('.servicesbtn').click(function(){
    console.log(count);
    if(count==1){
        $('.ServicesMainDiv').css('display','block');
        ServicesMainDivShowAnima();
        count --;
    }else if(count==0){
        ServicesMainDivHideAnima();
        count ++;
    }
    console.log(count);
});

function ServicesMainDivShowAnima (){
    $('.ServicesMainDiv').css('height','30%');
}

function ServicesMainDivHideAnima (){
    $('.ServicesMainDiv').css('height','0%');
}