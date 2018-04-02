let map = document.getElementById("svg-kraje");
let SVGDocument = map.getSVGDocument()
let paths = SVGDocument.getElementsByTagName("path");

function switchMap() { //Function for switch the map from basic to cartogram. Cartogram contains 5 categories according to population. 
    if (document.getElementById("switchButton").checked){ //cartogram
        for (i = 0; i < paths.length; i++) {
            let people = paths[i].attributes.POCET_OB_11.nodeValue;
            paths[i].style.stroke = "#000000";

            if (people>1000000){
                paths[i].style.fill = "#0000cc";
            }

            else if(people>800000){
                paths[i].style.fill = "#1919ff";                
            }

            else if(people>600000){
                paths[i].style.fill = "#6666ff";                
            }

            else if(people>500000){
                paths[i].style.fill = "#9999ff";                
            }

            else{
                paths[i].style.fill = "#ccccff";
            }
        }
    }
    else { //basic map
        for (i = 0; i < paths.length; i++) {
            paths[i].style.stroke = "#000000";
            paths[i].style.fill = "#ffffcc";
        } 
    }
};

window.onload = function () { //application of switchMap function
        switchMap();
    };