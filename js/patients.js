$(document).ready(function() {

    console.log(window.location.href);
    var param = window.location.href;
    var vals = param.split("?");
    console.log(vals[1]);

    Drupal.settings.site_path = "http://www.thecodeplace.com/pulsemonitor_drup"; // http://www.example.com
        
        // Set the Service Resource endpoint path.
        Drupal.settings.endpoint = "api";
        
        // Perform a System Connect call.
        var query = {
            parameters: {
                'type': 'article',
            }
        };
       // var data = {"1", "4", "9"};

       Array.prototype.contains = function(v) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === v) return true;
            }
        return false;
        };

        Array.prototype.unique = function() {
            var arr = [];
            for(var i = 0; i < this.length; i++) {
                if(!arr.contains(this[i])) {
                arr.push(this[i]);
                }
            }
            return arr; 
        }
        var data = new Array;
        var newdata;
        entity_index('entity_node',query, {

                success: function(nodes) {
                    length = nodes.length;
                    //newdata = new Array(length);
                    for(var i=0;i < nodes.length;i++){
                        var newdata = nodes[i].field_patient.und[0].value;
                        data.push(newdata);
                    }
                    var uniques = data.unique();
                    var tableBody = "";
                    for(var i=0;i<uniques.length;i++){
                        tableBody += "<tr class=\"odd gradeX\"><td>"+uniques[i]+
                        "</td><td>Patient ID</td><td><a href=\"patient.html?patient="+uniques[i]+"\">Click to View BPM Data</a></td></tr>"
                        $( "#dataTableBody" ).append(tableBody);
                        $(".dataTables_empty").hide();

                    }

            }
        });
        
        



});