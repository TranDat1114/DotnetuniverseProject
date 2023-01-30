
let myFooter = `
        <footer class="py-3">
            <div class="row justify-content-between">
                <div class="col-6 col-md-2 mb-3">
                    <p class="h5">Section</p>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="../screen/Home.html#home" class="nav-link p-0 text-muted"><i
                                    class="fa-solid fa-house"></i> Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i
                                    class="fa-solid fa-clipboard-question"></i> FAQs</a></li>
                        <li class="nav-item mb-2"><a href="../screen/AboutUs.html#about-us"
                                class="nav-link p-0 text-muted"><i class="fa-solid fa-address-card"></i> About Us</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                    <p class="h5">Working Hours</p>
                    <p><i class="fa-solid fa-business-time"></i> Monday to Friday </p>
                    <p><i class="fa-solid fa-clock"></i> 9:00 - 17:00</p>
                </div>
                <div class="col-6 col-md-2 mb-3">
                    <p class="h5">Contact Us</p>
                    <p><i class="fa-solid fa-phone"></i> +84 0985950723</p>
                </div>
                <div class="col-md-5 offset-md-1 mb-3">
                    <p class="h5">Subscribe to our newsletter</p>
                    <p class="h6">Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="useremail" class="visually-hidden">Your email address</label>
                        <input id="useremail" type="text" class="form-control text-dark"
                            placeholder="Your email address">
                        <label for="useremail" class="visually-hidden">Your name</label>
                        <input id="username" type="text" class="form-control text-dark" placeholder="Your name">
                        <button class="btn btn-warning" type="button">Subscribe</button>
                    </div>

                    <div class="row mt-3">
                        <div class="col-12 text-center"><i class="fa-solid fa-envelope"></i> Email:
                            Jackandy249@gmail.com</div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2022 DotNetUniverse Tran Phu Dat, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3">
                        <a class="nav-link" href="#">
                            <i class="fa-brands fa-twitter"></i> Twitter
                        </a>
                    </li>
                    <li class="ms-3">
                        <a class="nav-link" href="https://www.facebook.com/clbnetuniverse" target="_blank">
                            <i class="fa-brands fa-facebook"></i> Facebook
                        </a>
                    </li>
                    <li class="ms-3"><a class="nav-link" href="#">
                            <i class="fa-brands fa-instagram"></i> Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>`

const footer = document.querySelector('#footerDotnet')
footer.innerHTML = myFooter
