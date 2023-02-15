let processScroll = () => {
    if (window.location.hash.split('#').at(-1) === 'blogReadingContent') {
        let scrollPercent = (window.pageYOffset / (document.body.querySelector('#blog-content-here').offsetHeight - (window.innerHeight - (document.body.querySelector('#footerDotnet').offsetHeight - document.body.querySelector('#other-content').offsetHeight))) * 100);

        document.getElementById("progress-bar").style.width = scrollPercent + '%';
    }
    else {
        document.getElementById("progress-bar").style.width = 0
    }
    // console.log(scrollPercent)
}
document.addEventListener('scroll', processScroll);