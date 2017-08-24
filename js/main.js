var p = new customer();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    clients= JSON.parse(this.responseText);
 p.affichage();
 $("#listCustomers").click(function (){
   p.tri(clients.client , $('#listCustomers').val() );
 })
    }
  };
  xhttp.open("GET","client.json", true);
  xhttp.send();




function customer() {
  this.affichage = function () {
    $('#tableau').html('');
// console.log(client);

      for (var x in clients.client) {
        $("#tableau").append("<tr><th class='name'>" + clients.client[x].name +
        "</th><td class='prenom'>" + clients.client[x].prenom +
        "</td><td class='city'>"+ clients.client[x].city +
         "</td></tr>");
}
      };





      this.tri = function( tab,key){

        tab.sort(function(a,b){
          var keyA = a[key];
          var keyB = b[key];
          if (keyA < keyB ) return -1 ;
          if (keyA > keyB ) return 1 ;
          return 0;
        });
        this.affichage();
      }


    }
