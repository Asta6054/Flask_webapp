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


window.onload = pending();

function cooking(o_id,ct,or_id,it_id) {
  var coutput = '<article class="media content-section col">';
  coutput += '<div class="media-body">';
  coutput += '<div class="well">';
  coutput += '<h3>'+ or_id + '</h3>';
  coutput += '<p>' + it_id + '</p>';
  coutput += '<p>' + ct + '</p>';
  coutput += '<span id="time'+ct+'" onload=starttimer()>00:00</span>';
  coutput += '</div>';
  coutput += '</div>';
  coutput += '</article>';
  $('#cooking').append(coutput);
  starttimer(ct);
}
function starttimer(ti) {
  //  var text = parseInt(data.CookTime);
  var st = ti.toString();
  var ct = 60 * ti,
  display = document.querySelector('#time'+st+'');
  timer(ct, display);
}
function timer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function pending() {
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk"
  }).done(function(data) {
    var output = '';
    $.each(data, function(key, data){
      console.log(data);
      output +=  '<div id="pend'+data.CookTime+'">';
      output +=  '<p class="article-content" style="font-size: 12px" id="'+data.OrderId+'">OrderId:'+ data.OrderId + '<br>';
      output +=  '<br>ItemId:'+ data.ItemId + '<br>';
      output +=  '<br> CookTime:' + data.CookTime + '</p>';
      output +=  '<div class="row container">';
      output +=  '<a onclick="cooking2(this)" id="'+data._id.$oid+'" data-itemid="'+data.ItemId+'" data-cooktime="'+data.CookTime+'" data-orderid="'+data.OrderId+'" class="btn btnuhr btn-small bg-info col-6" style="font-size: 10px">Move To Cooking</a>';
      output +=  '</div>';
      output +=  '</div>';
    });
    $('#pending').append(output);});
  }
  function cooking2(e) {
    console.log(e);
    var o_id = e.id;
    console.log(e.id);
    console.log($(e).attr("data-cooktime"));
    console.log($(e).attr("data-itemid"));
    console.log($(e).attr("data-orderid"));
    var or_id = $(e).attr("data-itemid");
    var it_id = $(e).attr("data-itemid");
    var ct = $(e).attr("data-cooktime");
    ins(o_id,ct,or_id,it_id);
    del(o_id);
    $('#pend'+ct+'').empty();
    cooking(o_id,ct,or_id,it_id);
  }

  function ins(o_id,ct,or_id,it_id) {
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/Corder?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    data: JSON.stringify({ "_id" : { "$oid": o_id }, "OrderId" : or_id ,  "ItemId" : it_id, "CookTime" : ct }),
    type: "POST",
    contentType: "application/json" } );
  }

  function del(o_id){
    $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order/" + o_id + "?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
    type: "DELETE",
    async: true,
    timeout: 300000,
    success: function (data) { },
    error: function (xhr, status, err) { } } );
  }
