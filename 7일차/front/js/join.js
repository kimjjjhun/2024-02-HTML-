$(function(){
    $('#allTerms').click(function(){
        var checked = $(this).is(':checked');

        if(checked){
            $('.termsCheck').prop('checked', true);
        }else {
            $('.termsCheck').prop('checked', false);
        }
    });

    $('.termsCheck').click(function(){
        var terms = $('.termsCheck');
        var flag = true;

        for(var input of terms){
            if (!input.checked) {
                flag = false;
                break; // 하나라도 체크되어 있지 않으면 루프를 종료합니다.
            }
        }

        if(flag){
            $('#allTerms').prop('checked', true);
        }else {
            $('#allTerms').prop('checked', false);
        }
    });
});