//-----------------------------------------------------------------
//           �O���[�o���i�r
//-----------------------------------------------------------------

// �㕔�Œ�
$(function() {
    var nav = $('#gnav');
    //nav�̈ʒu    
    var navTop = nav.offset().top;
    //�X�N���[�����邽�тɎ��s
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //�X�N���[���ʒu��nav�̈ʒu��艺��������N���Xfixed��ǉ�
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });
});

//�܂肽����
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

//�J������ʂ̍������擾
var WindowHeight = $(window).height(); //WindowHeight�͕ϐ��ŔC�ӂ̖��O
$(function(){
	$('#gnav_box').css('max-height',WindowHeight+'px');
});

//-----------------------------------------------------------------
//           �y�[�W�g�b�v�֖߂�
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
	//�X�N���[�����ăg�b�v
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
//           �\����\����؂�ւ���
//-----------------------------------------------------------------��
	$(document).on('click', ".jq_menu_slide", function() {
		var target = $(this).attr("rel");
		var cnt = $(this).attr("cnt");
		$("#" + target).slideToggle(100);
		
		if ($(this).attr('css')) {
			$(this).toggleClass($(this).attr('css'));
			// �N�b�L�[�̃Z�b�g
			var side_stat = $(this).attr('class');
			$.cookie("side_menu-" + target, side_stat);
		}
		return false;
	});
