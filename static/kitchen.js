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

function cooking(o_id,ct,or_id,Uid) {
  var coutput = '';
  coutput += '<div class="media content-section" id="cookt'+or_id+'">'
  coutput += '<div class="media-body">';
  coutput += '<div class="well mx-auto">';
  coutput += '<h3>Order Number: '+ or_id + '</h3>';
  coutput +=  '<div class="container mb-1 mr-2">';
  coutput +=  '<div class="d-flex justify-content-end">';
  coutput += '<a class="btn btn-outline-primary" data-id="'+o_id+'" id="listpopup" onclick="itemLIST(this)">Item List</a>';
  coutput +=  '</div>';
  coutput +=  '</div>';
  coutput += '<div class="row">';
  coutput += '<div class="col mr-auto">';
  coutput +=  '<p> Customer Id: ' + Uid + '</p>';
  coutput += '</div>';
  coutput += '<div class="col">';
  coutput += '<p>Cook Time: <span class="blink" id="time'+or_id+'" onload=starttimer()>00:00</span>';
  coutput += '</p>';
  coutput += '</div>';
  coutput += '</div>';
  coutput += '</div><br>';
  coutput +=  '<div class="container">';
  coutput += '<button class="btn btn-sm btn-success col" style="border-radius: 50px" data-cooktime="'+ct+'" data-orderid="'+or_id+'" data-uid="'+o_id+'" id="orderdone" onclick="done(this)">Done</button>';
  coutput += '</div>';
  coutput += '</div>';
  coutput += '</div>';
  $('#cooking').append(coutput);
  starttimer(ct,or_id);
}
function starttimer(ti,orid) {
  //  var text = parseInt(data.CookTime);
  var st = ti.toString();
  var ct = 60 * ti,
  display = document.querySelector('#time'+orid+'');
  timer(ct, display, orid);
  //alert("After timer");
}
function timer(duration, display, orid) {
  var timer = duration, minutes, seconds;
  var newt = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);


   if (minutes < 0 && seconds < 0) {
      minutes = Math.abs(parseInt(timer / 60, 10));
      seconds = Math.abs(parseInt(timer % 60, 10));

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
    }else if (minutes == 0 && seconds < 0) {
      minutes = Math.abs(parseInt(timer / 60, 10));
      seconds = Math.abs(parseInt(timer % 60, 10));

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
    }else {
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
    }

    if (minutes == 1 ) {
      display.style.color = "rgb(249, 212, 1)";
      display.textContent = minutes + ":" + seconds +" Mins Left";
    }else if (minutes < 1) {
      setInterval(blink_text(orid), 1000);
      display.style.color = "red";
      display.textContent = minutes + ":" + seconds +" Mins Left";
    }else if (minutes > 1) {
      display.style.color = "green";
      display.textContent = minutes + ":" + seconds +" Mins Left";
    }else{
      display.textContent = minutes + ":" + seconds +" Mins Left";
    }
    cTime = minutes + ":" + seconds;
    console.log(timer);
    if (--timer < 0) {
      //alert("F");
      newtimer(orid);
      clearInterval(newt);


    }
  }, 1000);
}
function newtimer(orid) {
  var ct = 0,
  display = document.querySelector('#time'+orid+'');
  //////////////////////////////////////////
  //chnaged name of timer function to nntimer as it was confused on function call
  nntimer(ct, display, orid);
  //alert("second timer");
}
function nntimer(duration, display, orid) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
/////////////////////////////////////////////////////
//chnaged the if check as it was not calling this
    if (minutes >= 0) {
      setInterval(blink_text(orid), 1000);
      display.style.color = "red";
      display.textContent = minutes + ":" + seconds +" Mins Left";
    }
    cTime = minutes + ":" + seconds;
    if (++timer < 0) {
      timer = 300;
    }
  }, 1000);
}


function blink_text(orid) {
    $('#time'+orid+'').fadeOut(500);
    $('#time'+orid+'').fadeIn(500);
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
      if(data._id.$oid == oid ){
        for(var i = 0; i < data.Itemlist.length; i++){
          var itemid = data.Itemlist[i].Itemname;
          console.log(itemid);
          var qnty = data.Itemlist[i].Qty;
           ItemL += '<tr>';
           ItemL += '<td>';
           ItemL += itemid;
           ItemL += '</td>';
           ItemL += '<td>';
           ItemL +=  qnty;
           ItemL += '</td>';
           ItemL += '</tr>';
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
  $('#cookt'+ORid+'').empty();
  $('#cookt'+ORid+'').removeClass("content-section");
  $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + USid + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
  data: JSON.stringify({ "$set" : { "status" : "RFD" } }),
  type: "PUT",
  contentType: "application/json" } );
  updaterfdts(USid);
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
      output +=  '<div id="pend'+data.OrderId+'">';
      output += '<article class="media content-section col">';
      output += '<div class="media-body">';
      output += '<div class="well">';
      output +=  '<h3>OrderId: '+ data.OrderId + '</h3>';
      output +=  '<div class="row">';
      output +=  '<div class="col">';
      icount =0;
      for(var i = 0; i < data.Itemlist.length; i++){
       var count = data.Itemlist[i].Qty ;
      icount = icount + parseInt(count);
      if (data.Itemlist.length == parseInt(icount)) {
        tcount = (data.Itemlist.length);
      }else {
        tcount = (icount);
      }

      }
      output +=  '<p>Total Item count: ' + tcount + '</p>';
      output +=  '</div>';
      output +=  '<div class="col justify-content-end">';
      output +=  '<a class="btn btn-outline-primary btn-sm" data-id="'+data._id.$oid+'" id="listpopup" onclick="itemLIST(this)">Item List</a>';
      output +=  '</div>';
      output +=  '</div>';
      output +=  '<div class="row">';
      output +=  '<div class="col">';
      output +=  '<p> Customer Id: ' + data.Uid + '</p>';
      output +=  '</div>';
      output +=  '<div class="col justify-content-end">';
      output +=  '<p> CookTime: ' + data.CookTime + '</p>';
      output +=  '</div>';
      output +=  '</div>';
      output +=  '</div>';
      output +=  '<div class="row container">';
      output +=  '<a onclick="cooking2(this)" id="'+data._id.$oid+'" style="border-radius: 50px" data-cooktime="'+data.CookTime+'" data-Uid="'+data.Uid+'" data-orderid="'+data.OrderId+'" class="btn text-white btn-primary btn-small col">Move To Cooking</a>';
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
    var Uid = $(e).attr("data-Uid");
    cooktimeid = ct;
    userID = o_id;
    orderID = or_id;
    ins(o_id);
    // del(o_id);
    $('#pend'+or_id+'').empty();
    cooking(o_id,ct,or_id,Uid);
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
    updatects(o_id);

  }

  function updatects(o_id) {
    var d = new Date().getTime();
    var dateB = new Date(d);
    var dayRelativeDifference =   dateB.getHours()*60 + dateB.getMinutes();
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    data: JSON.stringify({ "$set" : { "cookts":parseInt(dayRelativeDifference) } }),
    type: "PUT",
    contentType: "application/json" } );

  }

  function updaterfdts(o_id) {
    var d = new Date().getTime();
    var dateB = new Date(d);
    var dayRelativeDifference =   dateB.getHours()*60 + dateB.getMinutes();
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    data: JSON.stringify({ "$set" : { "rfdts":parseInt(dayRelativeDifference) } }),
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
          console.log(data.Itemlist.length);
        output +=  '<div id="pend'+data.OrderId+'">';
        output += '<article class="media content-section col">';
        output += '<div class="media-body">';
        output += '<div class="well">';
        output +=  '<h3>OrderId: '+ data.OrderId + '</h3>';
        output +=  '<div class="row">';
        output +=  '<div class="col">';
        icount =0;
        for(var i = 0; i < data.Itemlist.length; i++){
         var count = data.Itemlist[i].Qty ;
        icount = icount + parseInt(count);
        if (data.Itemlist.length == parseInt(icount)) {
          tcount = (data.Itemlist.length);
        }else {
          tcount = (icount);
        }

      }
        output +=  '<p>Total Item count: ' + tcount + '</p>';
        output +=  '</div>';
        output +=  '<div class="col justify-content-end">';
        output +=  '<a class="btn btn-outline-primary btn-sm" data-id="'+data._id.$oid+'" id="listpopup" onclick="itemLIST(this)">Item List</a>';
        output +=  '</div>';
        output +=  '</div>';
        output +=  '<div class="row">';
        output +=  '<div class="col">';
        output +=  '<p> Customer Id: ' + data.Uid + '</p>';
        output +=  '</div>';
        output +=  '<div class="col justify-content-end">';
        output +=  '<p> CookTime: ' + data.CookTime + '</p>';
        output +=  '</div>';
        output +=  '</div>';
        output +=  '</div>';
        output +=  '<div class="row container">';
        output +=  '<a onclick="cooking2(this)" id="'+data._id.$oid+'" style="border-radius: 50px" data-cooktime="'+data.CookTime+'" data-Uid="'+data.Uid+'" data-orderid="'+data.OrderId+'" class="btn text-white btn-primary btn-small col">Move To Cooking</a>';
        output +=  '</div>';
        output +=  '</div>';
        output += '</article>';
        output +=  '</div>';
      }
      });
      $('#pending').append(output);
    });
    }
