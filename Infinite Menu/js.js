
$(document).ready(function(){
px =
py =
	purls = ["https://raw.githubusercontent.com/MaxMeents/infinitemenu/main/All/All.txt"]
	pselected = [0]
function loadtxturl(txt){
	pselected.push($(".selected").index())
	//alert("working")
	purls.push(txt)
	$('.result').html("")
$.get( txt, function( data ) {
	context:this,
	myArr = data.split("\n");
	a = 0;
	title = []
	link = []
	for(var i = 0;i < myArr.length;i++){
		
		
		if(a == 1){			
			title.push(myArr[i])
		}
		if(a == 2){
			st = myArr[i];
			link.push(st)
			a = -1
		}
		a++	
		
	}
    
}).done(function(){
	for(var i = 0; i < title.length;i++){
	if (/https:\/\/www.youtube.com\/watch\?v=/i.test(link[i])){
		id = yp(link[i])
		embed = link[i].replace("watch?v=","embed/")
		$( ".result" ).append('<div class="link"><a class="loadtxt" tag="http://www.youtube.com/embed/'+ id+'?autoplay=1"><div><img class="ytimg" src="http://img.youtube.com/vi/'+id+'/0.jpg"/></div>' + title[i] + '</a></div>');
	}else{		
		if (/wikipedia.org/i.test(link[i])){
			$( ".result" ).append('<div class="link"><a class="loadtxt" tag="'+ link[i]+'">' + title[i] + '</a></div>');
		}
	$( ".result" ).append('<div class="link"><a class="loadtxt" tag="'+ link[i]+'">' + title[i] + '</a></div>');
	}


}	
if(!$('.selected')[0] && $('.link')[0]){
				$($('.link')[0]).addClass('selected')
				
			}
			
			$('.selected').removeClass("selected").addClass("selected")
			scrollToThis(".selected")
});
}	
loadtxturl("https://raw.githubusercontent.com/MaxMeents/infinitemenu/main/All/All.txt");
$(document).on('click','.selected',function(e){

 e.preventDefault();
	

 
 t = $(this).find("a").text();
 l = $(this).find("a").attr("tag")
 if (/raw\.githubusercontent\.com\/MaxMeent/i.test(l)){
 loadtxturl(l);

 	//$('.iframe').show()
 	//$('.Overlay').show();
 	//
 	//$('.iframeiframe').prop('src', l)

 }else{
 $('.iframe').show()
$('.Overlay').show();
$('.iframeiframe').prop('src', l)
 //openInNewTab(l)

	}
 return false;

});
function goback(){
	pu = purls[purls.length-2]	
				if (/main\/All\/All/i.test(pu)){
					purls.pop()
					
					loadtxturl(purls[purls.length-1]);		
					setTimeout(function(){
						pselected.pop()
						$('.selected').removeClass('selected')
					$($('.link')[pselected[pselected.length-1]]).addClass("selected")
					},100)					
					
				}else{
					pu = purls[purls.length-2]	
					
					loadtxturl(pu);							
					purls.pop()
					purls.pop()
					$('.Overlay').trigger("click")
					setTimeout(function(){
						$('.selected').removeClass('selected')
					$($('.link')[pselected[pselected.length-2]]).addClass("selected")
					pselected.pop();
					pselected.pop();
					if($('.selected')[0]){
						scrollToThis(".selected")	
					}
					
					},100)
					
				}
}
$('.iframe').width($(window).width()/4)
$('.iframe').height($(window).height()/4)
//$('.iframe').hide();
//$('.Overlay').hide();
//$('.Overlay').click(function(){
	//$('.Overlay').hide();
	//$(".iframe").hide();
//})
	$(document).keydown(function(e){
		 		 //alert(e.keyCode)
		if(e.keyCode == 65){			
				//alert(purls[purls.length-2])
				goback();
		}
		if(e.keyCode == 83){		
			if(!$('.selected')[0] && $('.link')[0]){
				$($('.link')[0]).addClass('selected')
				
			}	
			if($($('.link').last()[0]).hasClass("selected")){
				$('.link').removeClass("selected").first().addClass("selected")
			}else{
			$('.selected').removeClass("selected").next().addClass("selected")
			}
			$('.Overlay').trigger("click")
			scrollToThis(".selected")
		}
		if(e.keyCode == 87){			
			if(!$('.selected')[0] && $('.link')[0]){
				$($('.link')[1]).addClass('selected')
				
			}	
			if($($('.link')[0]).hasClass("selected")){
				$('.link').removeClass("selected").last().addClass("selected")
			}else{
			$('.selected').removeClass("selected").prev().addClass("selected")
			}
			$('.Overlay').trigger("click")
			scrollToThis(".selected")

		}
		if(e.keyCode == 68){			
			$('.selected').find("a").trigger("click")
		}
	})

			

   $(document).on('mouseover', '.link,.ytimg', function(event) {
   	
if(py != event.clientY || px != event.clientX){
	$(".selected").removeClass("selected")
	if($(this).hasClass('ytimg')){
		//alert("ytimg")
		$(this).parent().parent().parent().addClass("selected")
	}
    $(this).addClass("selected")
	}
    
});
   $(document).on('mouseenter', '.link,.ytimg', function(event) {
   	
if(py != event.clientY || px != event.clientX){
	$(".selected").removeClass("selected")
	if($(this).hasClass('ytimg')){
		//alert("ytimg")
		$(this).parent().parent().parent().addClass("selected")
	}
    $(this).addClass("selected")
	}
    
});
   	
  
   
   $(document).contextmenu(function() {
    //return false;
});
$(document).mousedown(function(e){
	if(e.which == 3){
		e.preventDefault();
		goback();
		return false;
	}
})
	 setInterval(function(){
	 	$(document).mousemove(function(event){
	 		px = event.clientX 
    py = event.clientY
	 	})
	 	  
	 },25)
	 
	
function scrollToThis(what){
	$('html, body').animate({
    scrollTop: ($(what).offset().top - ($(window).height()/2 - 50))
},10);
}

function openInNewTab(url) {
 window.open(url, '_blank').focus();
}
function yp(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
})