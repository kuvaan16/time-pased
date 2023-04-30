$(".calculate").click(function(){  
    var enteredDate = new Date($(".date").val());
    var inputDate = {
        year: enteredDate.getFullYear(),
        month: enteredDate.getMonth(),
        day: enteredDate.getDate(),
    }
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth();
    var y2 = date.getFullYear();
    var month = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    if((inputDate.year > y2) || (inputDate.year == y2 && inputDate.month > m2) || (inputDate.year == y2 && inputDate.month == m2 && inputDate.day > d2)){
        $('.error').html("Please enter a past date !");
        $('.year').html("0");
        $('.month').html("0");
        $('.day').html("0");
    }else{
        $('.error').html("");
    if(inputDate.day > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(inputDate.month > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - inputDate.day;
    var m = m2 - inputDate.month;
    var y = y2 - inputDate.year;
    $('.year').html(y);
    $('.month').html(m);
    $('.day').html(d);
}
});
