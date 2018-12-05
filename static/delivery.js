// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
// #   #   #   #   #   #   #   #   KITCHEN JS  #   #   KITCHEN JS  #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
// #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
$("document").ready(function() {
  ready_for_delivery();
});

function ready_for_delivery() {
  $('#ready_for_delivery').empty();
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
  }).done(function(data) {
    var output = '';
    $.each(data, function(key, data){
      console.log(data);
      if(data.status == "RFD"){
        console.log(data.Itemlist.length);
      output +=  '<div id="ready'+data._id.$oid+'">';
      output += '<article class="media content-section col">';
      output += '<div class="media-body">';
      output += '<div class="well">';
      output +=  '<h3>OrderId: '+ data.OrderId + '</h3>';
      output +=  '<p> Delivery Distance: ' + data.distance + ' Miles</p>';
      output +=  '<p> Delivery Time: ' + data.distanceETA + ' Minutes</p>';
      output +=  '<p> Customer ID: ' + data.Uid + '</p>';
      output +=  '<p> Address: ' + data.address + '</p>';
      output +=  '<p> Contact: ' + data.contact + '</p>';
      output +=  '<p> Delivery Type : Cash On Delivery (COD)</p>';
      output +=  '<p> Grand Total: $' + data.TotalPrice + '</p>';
      output +=  '</div>';
      output +=  '<div class="row container">';
      output +=  '<a onclick="to(this)" id="'+data._id.$oid+'" style="border-radius: 50px" data-total="'+data.TotalPrice+'" data-userid="'+data.Uid+'" data-dis="'+data.distance+'" data-dETA="'+data.distanceETA+'" data-address="'+data.address+'" data-contact="'+data.contact+'" data-orderid="'+data.OrderId+'" class="btn text-white btn-primary btn-small col">GO</a>';
      output +=  '</div>';
      output +=  '</div>';
      output += '</article>';
      output +=  '</div>';
    }
    });
    $('#ready_for_delivery').append(output);
  });
  }

function refreshpending1() {
    $('#ready_for_delivery').empty();
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
    }).done(function(data) {
      var output = '';
      $.each(data, function(key, data){
        console.log(data);
          if(data.status == "RFD"){
        output +=  '<div id="ready'+data._id.$oid+'">';
        output += '<article class="media content-section col">';
        output += '<div class="media-body">';
        output += '<div class="well">';
        output +=  '<h3>OrderId: '+ data.OrderId + '</h3>';
        output +=  '<p> Delivery Distance: ' + data.distance + ' Miles</p>';
        output +=  '<p> Delivery Time: ' + data.distanceETA + ' Minutes</p>';
        output +=  '<p> Customer ID: ' + data.Uid + '</p>';
        output +=  '<p> Address: ' + data.address + '</p>';
        output +=  '<p> Contact: ' + data.contact + '</p>';
        output +=  '<p> Delivery Type : Cash On Delivery (COD)</p>';
        output +=  '<p> Grand Total: $' + data.TotalPrice + '</p>';
        output +=  '</div>';
        output +=  '<div class="row container">';
        output +=  '<a onclick="to(this)" id="'+data._id.$oid+'" style="border-radius: 50px" data-total="'+data.TotalPrice+'" data-userid="'+data.Uid+'" data-dis="'+data.distance+'" data-dETA="'+data.distanceETA+'" data-address="'+data.address+'" data-contact="'+data.contact+'" data-orderid="'+data.OrderId+'" class="btn text-white btn-primary btn-small col">GO</a>';
        output +=  '</div>';
        output +=  '</div>';
        output += '</article>';
        output +=  '</div>';
      }
      });
      $('#ready_for_delivery').append(output);
    });
    }

  function to(e) {
    console.log(e);
    var o_id = e.id;
    var or_id = $(e).attr("data-orderid");
    var u_id = $(e).attr("data-userid");
    var adr = $(e).attr("data-address");
    var con = $(e).attr("data-contact");
    var dis = $(e).attr("data-dis");
    var dETA = $(e).attr("data-dETA");
    var tp = $(e).attr("data-total");
    ins(o_id);
    updateofdts(o_id);
    $('#ready'+o_id+'').empty();
    out_for_delivery(o_id,or_id,adr,con,u_id,dis,dETA,tp);
    // ready_for_delivery(o_id,or_id);
    // out_for_delivery(o_id,or_id)
    // refresh(ct);
  }

  function ins(o_id) {
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    data: JSON.stringify({ "$set" : { "status" : "OFD" } }),
    type: "PUT",
    contentType: "application/json" } );
  }

  function updateofdts(o_id) {
    var d = new Date().getTime();
    var dateB = new Date(d);
    var dayRelativeDifference =   dateB.getHours()*60 + dateB.getMinutes();
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    data: JSON.stringify({ "$set" : { "ofdts":parseInt(dayRelativeDifference) } }),
    type: "PUT",
    contentType: "application/json" } );

  }

function out_for_delivery(o_id,or_id,adr,con,u_id,dis,dETA,tp)  {
	  var coutput = '';
  coutput += '<div id="out'+o_id+'">'
  coutput += '<article class="media content-section col">';
  coutput += '<div class="media-body">';
  coutput += '<h3>Order Number: '+ or_id + '</h3>';
  coutput +=  '<p> Delivery Distance: ' + dis + ' Miles</p>';
  coutput +=  '<p> Delivery Time: ' + dETA + ' Minutes</p>';
  coutput +=  '<p> Customer ID: ' + u_id + '</p>';
  coutput +=  '<p> Address: ' + adr + '</p>';
  coutput +=  '<p> Contact: ' + con + '</p>';
  coutput +=  '<p> Delivery Type : Cash On Delivery (COD)</p>';
  coutput +=  '<p> Grand Total: $' + tp + '</p>';
  coutput +=  '<div class="container">';
  coutput += '<button class="btn btn-sm btn-success col" style="border-radius: 50px" data-orderid="'+or_id+'" data-uid="'+o_id+'" id="ordercomplete" onclick="complete(this)">Delivery Completed</button>';
  coutput += '</div>';
  coutput += '</div>';
  coutput += '</article>';
  coutput += '</div>';
  $('#out_for_delivery').append(coutput);
}

function complete(e){
  o1_id = $(e).attr("data-uid");
  $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o1_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
  data: JSON.stringify({ "$set" : { "status" : "DC" } }),
  type: "PUT",
  contentType: "application/json" } );
  updatects(o1_id);
    $('#out'+o1_id+'').empty();
}

function updatects(o_id) {
  var d = new Date().getTime();
  var dateB = new Date(d);
  var dayRelativeDifference =   dateB.getHours()*60 + dateB.getMinutes();
  $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
  data: JSON.stringify({ "$set" : { "dcts":parseInt(dayRelativeDifference) } }),
  type: "PUT",
  contentType: "application/json" } );

}
