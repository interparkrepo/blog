//-----------------------------------------------------------------
//           �O���[�o���i�r�A�p�������E�֘A���[�h
//-----------------------------------------------------------------
$(function(){
	// ���T�C�Y���ɏ�����
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
				// �X�}�z
				$("#rap_top").hide();
				$("#toggle_rap_top").removeClass("active");
			} else {
				// �^�u���b�g
				$("#rap_top").show();
				$("#gnav_box").hide();
				$("#toggle").removeClass("active");
			}
		}, 200);
	});
});


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
	if (window.matchMedia('screen and (min-width:770px)').matches) { 
	}else{
		$("#toggle").click(function(){
			$(this).toggleClass("active");
			$("#gnav_box").slideToggle("fast");
			return false;
		});
	}
	//�J������ʂ̍������擾
	var WindowHeight = $(window).height(); //WindowHeight�͕ϐ��ŔC�ӂ̖��O
	$(function(){
		$('#gnav_box').css('max-height',WindowHeight+'px');
	});
});

// �v���_�E�����j���[
$(function(){
	// �Q�K�w�ȉ��͔�\���ɂ��Ă���
	$("#sub_menu ul").hide();
	if (window.matchMedia('screen and (min-width:770px)').matches) { 
		// PC
		$("#sub_menu>li").hover(function(){
			$("ul:not(:animated)",this).slideToggle("fast");
		});
	}else{
		// �^�u���b�g�E�X�}�z
		$("#sub_menu>li").click(function(){
			$(this).toggleClass("active");
			$("ul:not(:animated)",this).slideToggle("fast");
			return false;
		}),
		// �P�K�w�݂̂̏ꍇ�̓N���X�t�^
		$("#sub_menu>li:not(:has(ul))").addClass("only");
	}
});


//-----------------------------------------------------------------
//           �p�������E�֘A���[�h
//-----------------------------------------------------------------
//�܂肽����
$(function(){
	if (window.matchMedia('screen and (min-width:486px)').matches) { 
	}else{
		// �^�u���b�g�E�X�}�z
		$("#toggle_rap_top").click(function(){
			$(this).toggleClass("active");
			$("#rap_top").slideToggle("fast");
			return false;
		});
	}
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
