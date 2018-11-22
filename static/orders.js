

function upload(){
  // $("#menupage").css({"display:":"none"});
  $("#menupage").hide();
  // $("#review").css({"display:":"block"});
  $("#review").show();

  var user_id = document.getElementById("user_id").innerHTML;
  // document.getElementById("user_id").style.color = "white";
  // alert("ab")
  $.ajax({
    type: "POST",
    url: "/review?user="+user_id,
    datatype: 'json',
    // data: "formname="+formname+"&status="+status,
    success: function(res){
        var obj = JSON.parse(res);
        console.log(res);
        document.getElementById("review_addr").innerHTML = "Your order will be sent to: "+ obj.address;
        document.getElementById("review_price").innerHTML = "Total price: $"+ totp;

        // var cont = document.getElementById("cart_content").innerHTML;
        // document.getElementById("review_item").innerHTML = cont;
        for (var key in dict){
        var new_ele = "<div class='item'><b>"+key+" x "+dict[key]+"</b></div> "
          $("#review_item").append(new_ele);
        }


      }
  });//ajax
  $("#shopping-cart").css('display', "none");
}


var cart_count = 0;
var cart_item = [];
var display_cart = false;
var user_id = document.getElementById("user_id").innerHTML;
var dict = {};
var tot = 0;
var dict_str;

function user()
{
  $.ajax( { url: "https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey"}).done(function(data){
    var output = '';
    $.each(data, function(key,data){

    });
  });

}

function ins() {
  $.ajax( { url: "https://api.mlab.com/api/1/databases/project/collections/order?apiKey=GNjNdN6lUgcrRk7d8vo9AfreQewjHePk",
  data: JSON.stringify({"ItemId": item_str,'TotalPrice' : "$"+price, 'CookTime' : cook_time}),
  type: "POST",
  contentType: "application/json" } );
}

function cart(target){
  eles = target.split("$")
  name = eles[0]
  price = eles[1]
  tot += parseInt(price)
  totp = parseFloat(Math.round(tot*1.06*100)/100).toFixed(2)
  cart_count += 1;

  if (dict[name]>=1){
    dict[name] += 1;
}else{
  dict[name] = 1;
}

  document.getElementById("cart_count").innerHTML = cart_count;
  $("#cart_content").html("");
  dict_str = "";
  for (var key in dict){
    var new_ele = "<div class='item'><b>"+key+" x "+dict[key]+"</b></div> "
    $("#cart_content").append(new_ele);
    dict_str += key+","+dict[key]+";"
    }
    // alert(dict_str)
    var new_ele = "<div class='item' style='float:right;'><b>Total:$"+totp+"</b></div> "
    $("#cart_content").append(new_ele);

    var new_ele = "<button onclick='upload()' style='float:right; position: absolute; right: 10px; bottom: 10px;'><b>Check Out</b></button>"

    $("#cart_content").append(new_ele);
  }


function upload_menu(){
  $.ajax({
    type: "POST",
    url: "/upload_menu?info="+dict_str+"&price="+totp+"&username="+user_id,
    datatype: 'json',
    // data: "formname="+formname+"&status="+status,
    success: function(res){
        var obj = JSON.parse(res);
        alert("Estimate cooking time: "+obj.time);
        console.log(obj)
      }
  });//ajax
}


function pop_cart(){
  if (display_cart == false){
    display_cart = true;
  }else{
    display_cart = false;
  }
  if(display_cart==true){
    $("#shopping-cart").css('display', "inline-block");
  }else{
    $("#shopping-cart").css('display', "none");
  }

}
