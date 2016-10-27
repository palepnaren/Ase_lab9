(function(){

var OpenWeather_Factory = function($http){

   var temp = {};

   temp.getWeather = function(city){

      var apiKey = "36d4ca342366fabdd77499c360ea5bcb";
      var Uri = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
      return $http.get(Uri)
   };
   return temp;
}
OpenWeather_Factory.$inject = ["$http"];
angular.module("Mash").factory("OpenWeather_Factory", OpenWeather_Factory);

}());
