$('nav a').on('click', function(){
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 900)
    })
    
    $(document).on('scroll', function () {
        const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop()
    const $h2 = $('.h2main')
    const mainFromTop1 = $h2.offset().top/3;
    
    
    if(scrollValue > mainFromTop1) {
        $h2.addClass('active');
    }
    const $project = $('.project');
    const mainFromTop2 = $h2.offset().top/2;
    
    if(scrollValue > mainFromTop2) {
        $project.addClass('active');
    }
    
    const $sectionH2 = $('section h2');
    const $section = $('section');
    const $sociallink = $('.sociallink');
    const sectionFromTop = $section.offset().top;
    if(scrollValue > sectionFromTop - windowHeight + 200) {
        $sectionH2.addClass('active');
        $sociallink.addClass('active');
    }
    
    
    
    
    
    
    
    
    if(scrollValue < 100){
        $h2.removeClass('active');
        $project.removeClass('active');
        $sectionH2.removeClass('active');
    $sociallink.removeClass('active');
    }
    
    
    
    
    })