// 브라우저 채크
(function () {
    $(document).ready(function () {
        var $agents = [/(opr|opera)/gim, /(chrome)/gim, /(firefox)/gim, /(safari)/gim, /(msie[\s]+[\d]+)/gim, /(trident).*rv:(\d+)/gim];
        var $agent = navigator.userAgent.toLocaleLowerCase();
        for (var ag in $agents) {
            if ($agent.match($agents[ag])) {
                $(document.body).addClass(String(RegExp.$1 + RegExp.$2).replace(/opr/, 'opera').replace(/trident/, 'msie').replace(/\s+/, ''));
                break;
            }
        }
    });
})();

// 해더스크롤
$(window).scroll(function () {
    var headerTop = $(window).scrollTop();
    if (headerTop > 100) {
        $('.header').addClass('scroll');
    } else {
        $('.header').removeClass('scroll');
    };
});