    var $addsec;
    var count = 0;
    addSec();

    $('#add-btn').click(addbtn);

    function addSec(){
        var secCount = 21;
        for(var i = 0;i < secCount;i++){
            $addsec = $('<div class="add-sec"><span class="add-text">+1s</span></div>');
            $("#sec-grid").append($addsec);
        }
    }


    function addbtn(){
        if(count == 14){
            $('#tips').show();
        }
        if(count >20){
            changePage();      
        }
        $('.add-text:eq('+count+')').addClass('show');
        count++;

        changeLineHeight();
    }

    function changeLineHeight(){
        $('#clickLine').height(17*count);
    }

    function changePage(){
        $('.page-zone.fir').removeClass('current');
        $('.page-zone.sec').addClass('current');
    }