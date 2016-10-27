(function(){

  var Maps_Factory = function($http){

     var Map = {};

     var directionService = new google.maps.DirectionsService();


    Map.calculateRoute = function(Source, Destination, mapObject){
     var options = {
       origin: Source,
       destination: Destination,
       travelMode: google.maps.DirectionsTravelMode.DRIVING
     };
     directionService.route(options, function(result, Status){

       if(Status == "OK")
       mapObject.setDirections(result);
     });
  }
  return Map;
};
 Maps_Factory.$inject=["$http"];
 angular.module("Mash").factory("Maps_Factory", Maps_Factory);
}());
