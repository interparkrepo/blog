//-----------------------------------------------------------------
//           グローバルナビ
//-----------------------------------------------------------------

// 上部固定
$(function() {
    var nav = $('#gnav');
    //navの位置    
    var navTop = nav.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });
});

//折りたたみ
$(function(){
  $("#toggle").click(function(){
    $("#gnav_box").slideToggle();
    return false;
  });
});


//$(function(){
//  $(window).resize(function(){
//    var win = $(window).width();
//    var p = 769;
//    if(win > p){
//      $("#gnav_box").show();
//    }
//  });
//});

//開いた画面の高さを取得
var WindowHeight = $(window).height(); //WindowHeightは変数で任意の名前
$(function(){
	$('#gnav_box').css('max-height',WindowHeight+'px');
});

//-----------------------------------------------------------------
//           ページトップへ戻る
//-----------------------------------------------------------------
$(function() {
	var topBtn = $('#page-top');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});

//
$(function() {
	var ro = $('a, input');
	ro.hover(
		function(){
			$(this).stop(true, true).fadeTo(250,0.6);
		},
		function () {
			$(this).fadeTo(100,1);
		}
	);
});

//
//----------------------------------------------------------------------------0
//           表示非表示を切り替える
//-----------------------------------------------------------------┤
	$(document).on('click', ".jq_menu_slide", function() {
		var target = $(this).attr("rel");
		var cnt = $(this).attr("cnt");
		$("#" + target).slideToggle(100);
		
		if ($(this).attr('css')) {
			$(this).toggleClass($(this).attr('css'));
			// クッキーのセット
			var side_stat = $(this).attr('class');
			$.cookie("side_menu-" + target, side_stat);
		}
		return false;
	});
