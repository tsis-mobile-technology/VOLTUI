'use strict';

/* Controllers */
templateCtrl.controller('MyCtrl_template1_welcome', ['$scope', function($scope){
	$scope.DatePicker  = function () {
        $(function() {
            $(document).ready(function(){
                init();
                
                $( "#datepicker" ).datepicker({
                    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                    dayNames: ['일','월','화','수','목','금','토'],
                    dayNamesShort: ['일','월','화','수','목','금','토'],
                    dayNamesMin: ['일','월','화','수','목','금','토'],
                    showMonthAfterYear: true,
                    yearSuffix: '년'
                });
                
                $(window).scroll(function(){
                    userInfoLoc();
                });
                
                $('.menu-title').off('click').on('click', function(){
                    $('.caret').removeClass('caret-up');
                    $('.depth-1, .depth-2').hide();
                    $(this).find('.caret').addClass('caret-up');
                    $(this).next('.depth-1').show();
                });
                $('.depth-1').children('li').off('click').on('click', function(){
                    $(this).children('.depth-2').show();
                });
                $('.tab-menu').children('div').off('click').on('click', function(){
                    $('.tab-menu div').removeClass('active');
                    $(this).addClass('active');
                });
            });
        });
        function init(){
            resizeH();
            userInfoLoc();
        }
        function resizeH(){
            $("#left-category, #left-menu").css({'height':$(document).height()});
        }
        function userInfoLoc(){
            var temp_ = parseInt($(document).height())-parseInt($(window).height())-parseInt($(window).scrollTop());
            $('.user-info').animate({'bottom': temp_ },100);
        }
    };
    
}]);