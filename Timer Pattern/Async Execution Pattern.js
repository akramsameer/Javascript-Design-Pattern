$(document).ready(function(){
    var buffer = function (items , iterFn , callback){
        var i=0 , len = items.length;
        setTimeout(function (){
            var result;

            for(var start = +new Date ; i < len && ((+new Date) - start) < 50 ; i++){
                result = iterFn.call(items[i] , items[i] , i);
            } 

            if(i < len && result !== false){
                // arguments.calle give us a pointer back to this function that is processing our loop rather than 
                // having to declar as a local variable 
                setTimeout(arguments.callee, 20);
            }else{
                callback(items)
            }

        } , 20)
    };

    $.get('/home/data' , function (result){
        var html = '';
        buffer(result , function (items){
            html += '<li>' + item + '</li>';
        } , function (){
            $('ul').append(html);
        });
    });
});