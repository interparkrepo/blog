//-----------------------------------------------------------------
//           グローバルナビ、パンくず・関連ワード
//-----------------------------------------------------------------

// リサイズ時に表示・非表示を初期化 ----------
$(function(){
	var timer = false;
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			console.log('resized');
			var w = $(window).width();
			if (w > 769) { 
				// PC
				$("#gnav_box").show();
			} else if (w < 485) { 
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

// グローバルナビ 上部固定 ----------
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

// グローバルナビ 折りたたみ ----------
$(function(){
	var w = $(window).width();
	if (w > 769) { 
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

// プルダウンメニュー ----------
$(function(){
	// ２階層以下は非表示にしておく
	$("#sub_menu ul").hide();
	var w = $(window).width();
	if (w > 769) { 
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
		})
		// １階層のみの場合はクラス付与
		$("#sub_menu>li:not(:has(ul))").addClass("only");
	}
});

// パンくず・関連ワード 折りたたみ ----------
$(function(){
	var w = $(window).width();
	if (w > 485) { 
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


//-----------------------------------------------------------------
//           リンクhover
//-----------------------------------------------------------------
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


//-----------------------------------------------------------------
//           電話番号のスマホ対応
//-----------------------------------------------------------------
$(function(){
    var ua = navigator.userAgent;
    var device = navigator.userAgent;
	if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('Android') > 0){} else {
		$('#header_tel span').each(function(){
			$(this).unwrap();
		});
    }
});


//-----------------------------------------------------------------
//           一覧用ページ調整
//-----------------------------------------------------------------
$(function(){
	$('.item.list:first').css("border-top","3px solid #ddd");
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
