$(document).ready(function() {
$("#add_more_price").click(function() {
      /* $('.startdate').attr("id","");
       $('.startdate').datepicker("destroy");
       $('.startdate').removeClass('hasDatepicker');
       $('.startdate').removeData('datepicker');
       $('.startdate').unbind();
    
       
       
       jQuery('.starttimepick').datepicker("destroy");
       jQuery('.starttimepick').removeClass('ui-timepicker-input');
       jQuery('.starttimepick').removeData('datepicker');
       jQuery('.starttimepick').unbind();
       
       jQuery('.endtimepick').datepicker("destroy");
       jQuery('.endtimepick').removeClass('ui-timepicker-input');
       jQuery('.endtimepick').removeData('datepicker');
       jQuery('.endtimepick').unbind();*/
       
       var tableBody = $('.priceClass').find("tbody");
       var trLast = tableBody.find("tr:last")
       var trNew = trLast.clone();
       
       trLast.after(trNew);
     
     /*  $( ".startdate" ).datepicker({
		       dateFormat: 'yy-mm-dd'    
		   });
       $( ".starttimepick" ).timepicker({ 'step': 15 });
       $( ".endtimepick" ).timepicker({ 'step': 15 });*/
    
    });   
       $("body").delegate(".img-prc-rmv",'click',function(){
              
       if($(".tckt-price").length > 1){
             $(this).parent('td').parent('tr').remove();
       }
       });  
     

    $("#addEvent").validationEngine();
    if ($('#radio1').is(':checked')) {
        $('#showCal').show();
    }
    var options3 = {
        'maxCharacterSize': 1024,
        'originalStyle': 'originalTextareaInfo',
        'warningStyle': 'warningTextareaInfo',
        'warningNumber': 1012,
        'displayFormat': 'using #input of #max possable characters'
    };
    $('#short_description').textareaCount(options3);
    $('#description').textareaCount(options3)
    
     $("#add_more").click(function() {
       $('.startdate').attr("id","");
       $('.startdate').datepicker("destroy");
       $('.startdate').removeClass('hasDatepicker');
       $('.startdate').removeData('datepicker');
       $('.startdate').unbind();
    
       
       
       jQuery('.starttimepick').datepicker("destroy");
       jQuery('.starttimepick').removeClass('ui-timepicker-input');
       jQuery('.starttimepick').removeData('datepicker');
       jQuery('.starttimepick').unbind();
       
       jQuery('.endtimepick').datepicker("destroy");
       jQuery('.endtimepick').removeClass('ui-timepicker-input');
       jQuery('.endtimepick').removeData('datepicker');
       jQuery('.endtimepick').unbind();
       
       var tableBody = $('.tblClass').find("tbody");
       var trLast = tableBody.find("tr:last");
       var trNew = trLast.clone();
       
       trLast.after(trNew);
     
       $( ".startdate" ).datepicker({
		       dateFormat: 'yy-mm-dd'    
		   });
       $( ".starttimepick" ).timepicker({ 'step': 15 });
       $( ".endtimepick" ).timepicker({ 'step': 15 });
    
    });
        $("body").delegate(".img_rmv",'click',function(){
              
       if($(".evnt-date").length > 1){
             $(this).parent('td').parent('tr').remove();
       }
       });
        $("#radio1,#radio2").click(function() {
        if ($('#radio1').is(':checked')) {
            $('#showCal').show();
        } else {
            $('#showCal').hide();
        }
    });

    $("#recurring").click(function() {
        if ($('#recurring').is(':checked')) {
            $('#recurring_type').show();
        } else {
            $('#recurring_type').hide();
        }
    });

    $("#allow_users_to_edit").click(function() {
        if ($('#allow_users_to_edit').is(':checked')) {
            $('#allow_users').show();
        } else {
            $('#allow_users').hide();
        }
    });
    $("#slctState").change(function() {
        $('.ajaxLoader').show();
        var stateab = $('#slctState').val();
        jQuery.ajax({
            url: '/Events/findCity/' + stateab,
            success: function(data) {
                $(".city").html(data);
                $('.ajaxLoader').hide();
            }
        });
    });
 
  
});
