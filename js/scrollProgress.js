let processScroll = () => {
    let scrollPercent = (window.pageYOffset / (document.body.querySelector('#blog-content-here').offsetHeight - (window.innerHeight - (document.body.querySelector('#footerDotnet').offsetHeight - document.body.querySelector('#other-content').offsetHeight))) * 100)
    document.getElementById("progress-bar").style.width = scrollPercent + '%';
    console.log(scrollPercent)
}
document.addEventListener('scroll', processScroll);