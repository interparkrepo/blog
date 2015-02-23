//-----------------------------------------------------------------
//           グローバルナビ、パンくず・関連ワード
//-----------------------------------------------------------------
$(function(){
	// リサイズ時に初期化
	var timer = false;
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			console.log('resized');
			if (window.matchMedia('screen and (min-width:770px)').matches) { 
				// PC
				$("#gnav_box").show();
			} else if (window.matchMedia('screen and (max-width: 485px)').matches) {
				// スマホ
				$("#rap_top").hide();
				$("#toggle_rap_top").removeClass("active");
			} else {
				// タブレット
				$("#rap_top").show();
				$("#gnav_box").hide();
				$("#toggle").removeClass("active");
			}
		}, 200);
	});
});


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
	if (window.matchMedia('screen and (min-width:770px)').matches) { 
	}else{
		$("#toggle").click(function(){
			$(this).toggleClass("active");
			$("#gnav_box").slideToggle("fast");
			return false;
		});
	}
	//開いた画面の高さを取得
	var WindowHeight = $(window).height(); //WindowHeightは変数で任意の名前
	$(function(){
		$('#gnav_box').css('max-height',WindowHeight+'px');
	});
});

// プルダウンメニュー
$(function(){
	// ２階層以下は非表示にしておく
	$("#sub_menu ul").hide();
	if (window.matchMedia('screen and (min-width:770px)').matches) { 
		// PC
		$("#sub_menu>li").hover(function(){
			$("ul:not(:animated)",this).slideToggle("fast");
		});
	}else{
		// タブレット・スマホ
		$("#sub_menu>li").click(function(){
			$(this).toggleClass("active");
			$("ul:not(:animated)",this).slideToggle("fast");
			return false;
		}),
		// １階層のみの場合はクラス付与
		$("#sub_menu>li:not(:has(ul))").addClass("only");
	}
});


//-----------------------------------------------------------------
//           パンくず・関連ワード
//-----------------------------------------------------------------
//折りたたみ
$(function(){
	if (window.matchMedia('screen and (min-width:486px)').matches) { 
	}else{
		// タブレット・スマホ
		$("#toggle_rap_top").click(function(){
			$(this).toggleClass("active");
			$("#rap_top").slideToggle("fast");
			return false;
		});
	}
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
