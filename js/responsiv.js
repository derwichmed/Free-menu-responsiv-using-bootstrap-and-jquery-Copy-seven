$(function (){
    isMegaMenuHidden = true;
    $('#mega_menu_icon').click(function (){
       if(isMegaMenuHidden){
            isMegaMenuHidden = false;
            $('.mega_menu').css('display','block');
            $('.border_pointu').css('display','block');
       }
        else{
            isMegaMenuHidden = true;
            $('.mega_menu').css('display','none');
            $('.border_pointu').css('display','none');
        }
    });
});