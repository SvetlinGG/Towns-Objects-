function towns(arr){

    for ( let townInfo of arr){
        let [ city, cityLatitude, cityLongitude] = townInfo.split(' | ');
        let formattedLatitude = Number(cityLatitude).toFixed(2);
        let formattedLongitude = Number(cityLongitude).toFixed(2);
        
        let townObj = { town: city, latitude: formattedLatitude, longitude: formattedLongitude };
        console.log(townObj);
    }


}
towns(['Sofia | 42.696552 | 23.32601','Beijgin | 39.913818 | 116.363625']);