var Calc = function (start){
    this.add = function (x){
        start += x;
        return this;
    };
    this.multiply=function(x){
        start *= x;
        return this;
    };
    this.equals = function (callback){
        callback(start);
        return this;
    };
}


new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result){
        console.log(result);
    });