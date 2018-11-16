/*
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   KITCHEN JS  #   #   KITCHEN JS  #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #*/
$("document").ready(function() {
  pending();
  $('.bg-modal').hide();
    $('#listpopup').click(function() {
    document.querySelector('.bg-modal').style.display = "flex";
    });

    $('.close').click(function() {
    document.querySelector('.bg-modal').style.display = "none";
    });
});

function cooking(o_id,ct,or_id) {
  var coutput = '';
  coutput += '<div id="cookt'+o_id+'">'
  coutput += '<article class="media content-section col">';
  coutput += '<div class="media-body">';
  coutput += '<div class="well">';
  coutput += '<h3>Order Number: '+ or_id + '</h3>';
  coutput += '<div class="row">';
  coutput += '<div class="col mr-auto">';
  coutput += '<a class="btn btn-outline-primary" data-id="'+o_id+'" id="listpopup" onclick="itemLIST(this)">Item List</a>';
  coutput += '</div>';
  coutput += '<div class="col">';
  coutput += '<p>Cook Time: <span id="time'+o_id+'" onload=starttimer()>00:00</span>';
  coutput += '</p>';
  coutput += '</div>';
  coutput += '</div>';
  coutput += '</div><br>';
  coutput +=  '<div class="container">';
  coutput += '<button class="btn btn-sm btn-success col" style="border-radius: 50px" data-cooktime="'+ct+'" data-orderid="'+or_id+'" data-uid="'+o_id+'" id="orderdone" onclick="done(this)">Done</button>';
  coutput += '</div>';
  coutput += '</div>';
  coutput += '</article>';
  coutput += '</div>';
  $('#cooking').append(coutput);
  starttimer(ct,o_id);
}
function starttimer(ti,oid) {
  //  var text = parseInt(data.CookTime);
  var st = ti.toString();
  var ct = 60 * ti,
  display = document.querySelector('#time'+oid+'');
  timer(ct, display);
}
function timer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds +" Mins Left";
    cTime = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}

function itemLIST(e) {
  $('.bg-modal').show();
    $('#list-form').empty();
  oid = $(e).attr("data-id");
  console.log(oid);
console.log("list");
$.ajax({
  url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
}).done(function(data) {
  var ItemL = '';
  $.each(data, function(key, data){
    console.log(data.Itemlist.length);
      if(data.status == "cooking" && data._id.$oid == oid ){
        for(var i = 0; i < data.Itemlist.length; i++){
          var itemid = data.Itemlist[i].Itemname;
          console.log(itemid);
          var qnty = data.Itemlist[i].Qty;
           ItemL += '<div class="row">';
           ItemL += '<div class="col">';
           ItemL += itemid;
           ItemL += '</div>';
           ItemL += '<div class="col justify-content-end">';
           ItemL += "Qty: "+qnty;
           ItemL += '</div>';
           ItemL += '</div>';
           ItemL += '<br>';
          $('#list-form').html(ItemL);
        }
  }
  });
});
}

function done(e){
  ORid = $(e).attr("data-orderid");
  ITid = $(e).attr("data-itemid");
  CTid = $(e).attr("data-cooktime");
  USid = $(e).attr("data-uid");
  $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/Dorder?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
  data: JSON.stringify({ "_id" : { "$oid": USid }, "OrderId" : ORid ,  "ItemId" : ITid }),
  type: "POST",
  contentType: "application/json" } );
    $('#cookt'+USid+'').empty();
}

function pending() {
  $('#pending').empty();
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
  }).done(function(data) {
    var output = '';
    $.each(data, function(key, data){
      console.log(data);
      if(data.status == "pending"){
        console.log(data.Itemlist.length);
      output +=  '<div id="pend'+data._id.$oid+'">';
      output += '<article class="media content-section col">';
      output += '<div class="media-body">';
      output += '<div class="well">';
      output +=  '<h3>OrderId: '+ data.OrderId + '</h3>';
      output +=  '<p> CookTime: ' + data.CookTime + '</p>';
      output +=  '</div>';
      output +=  '<div class="row container">';
      for(var i = 0; i < data.Itemlist.length; i++){
        var itemid = data.Itemlist[i].Itemname;
        var qnty = data.Itemlist[i].Qty;
        console.log(itemid +"----"+" Qty:"+qnty);
      }
      output +=  '<a onclick="cooking2(this)" id="'+data._id.$oid+'" style="border-radius: 50px" data-cooktime="'+data.CookTime+'" data-orderid="'+data.OrderId+'" class="btn text-white btn-primary btn-small col">Move To Cooking</a>';
      output +=  '</div>';
      output +=  '</div>';
      output += '</article>';
      output +=  '</div>';
    }
    });
    $('#pending').append(output);
  });
  }

  function cooking2(e) {
    console.log(e);
    var o_id = e.id;
    console.log(e.id);
    console.log($(e).attr("data-cooktime"));
    console.log($(e).attr("data-orderid"));
    var or_id = $(e).attr("data-orderid");
    var ct = $(e).attr("data-cooktime");
    cooktimeid = ct;
    userID = o_id;
    orderID = or_id;
    ins(o_id);
    // del(o_id);
    $('#pend'+o_id+'').empty();
    cooking(o_id,ct,or_id);
    // refresh(ct);
  }

// function refresh(ct){
//   $('#pending').empty();
//   $('#pend'+ct+'').empty();
//   $.ajax({
//     url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
//   }).done(function(data) {
//     pending();
//     });
// }

  function ins(o_id) {
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    data: JSON.stringify({ "$set" : { "status" : "cooking" } }),
    type: "PUT",
    contentType: "application/json" } );
  }

  // function del(o_id){
  //   $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
  //   type: "DELETE",
  //   async: true,
  //   timeout: 300000,
  //   success: function (data) { },
  //   error: function (xhr, status, err) { } } );
  // }
  function refreshpending() {
    $('#pending').empty();
    $.ajax({
      url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
    }).done(function(data) {
      var output = '';
      $.each(data, function(key, data){
        console.log(data);
          if(data.status == "pending"){
        output +=  '<div id="pend'+data._id.$oid+'">';
        output += '<article class="media content-section col">';
        output += '<div class="media-body">';
        output += '<div class="well">';
        output +=  '<h3>OrderId: '+ data.OrderId + '</h3>';
        output +=  '<p> CookTime: ' + data.CookTime + '</p>';
        output +=  '</div>';
        output +=  '<div class="row container">';
        output +=  '<a onclick="cooking2(this)" id="'+data._id.$oid+'" style="border-radius: 50px" data-cooktime="'+data.CookTime+'" data-orderid="'+data.OrderId+'" class="btn text-white btn-primary btn-small col">Move To Cooking</a>';
        output +=  '</div>';
        output +=  '</div>';
        output += '</article>';
        output +=  '</div>';
      }
      });
      $('#pending').append(output);
    });
    }
