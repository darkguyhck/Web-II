function initialize(){
    var opt = {
        zoom: 6,
        center: new google.maps.LatLng(-4.304014, 122.300965),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mm = document.getElementById("mymap");
    map = new google.maps.Map(mm, opt);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-8.238797, 115.375399),   
        map: map,
        title: " Mount Batur "
    });
    infowindow = new google.maps.InfoWindow({
     content: "<div style='height:100px;width:100px'>pokhara<img src='images\mount.jpg '></div>"
     });
        google.maps.event.addListener(marker, "click", function() {
         infowindow.open(map, marker);
     });
       

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-8.829001, 115.085161),  
        map: map,
        title: "Uluwatu Temple"
    });
    infowindow2 = new google.maps.InfoWindow({
     content: "<div  style='height:100px;width:100px'><b> Uluwatu Temple <img src='images/ulwa.jpg'></div>"
     });
        google.maps.event.addListener(marker2, "click", function() {
         infowindow2.open(map, marker2);
     });
        


    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng( -8.274975, 115.167503),  
        map: map,
        title: "Pura Ulun Danu Bratan"
    });
    infowindow3 = new google.maps.InfoWindow({
     content: "<div style='height:100px;width:100px'> Pura Ulun Danu Bratan <img src='images/pura.jpg '></div>"
     });
        google.maps.event.addListener(marker3, "click", function() {
         infowindow3.open(map, marker3);
     });
      

    
}
google.maps.event.addDomListener(window, 'load', initialize);