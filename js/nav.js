let myNav = `<nav class="navbar navbar-expand-lg">
<div class="container visually-hidden mt-3" id="searchbar-nav">
    <div class="row w-100 text-center">
        <div class="col-2">
            <button onclick="backNav()" class="btn btn-outline-warning"><i
                    class="fa-solid fa-arrow-left"></i></button>
        </div>
        <div class="col-8">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </div>
        <div class="col-2">
            <button class="btn btn-outline-warning"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</div>
<div class="container" id="normal-nav">
    <a class="navbar-brand d-none d-lg-block" href="#"><img class="rounded-circle" height="50"
            src="../assets/logo.svg" alt="logo">
        NetUniverse</a>
    <a class="navbar-brand d-lg-none" href="#"><img class="rounded-circle" height="50" src="../assets/logo.svg"
            alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-2">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../screen/Home.html#home"><i
                        class="fa-solid fa-house"></i> Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-clipboard-question"></i> FAQs</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="../screen/AboutUs.html" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-address-card"></i>
                    About Us</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="../screen/AboutUs.html#about-us">Our Information</a></li>
                    <li><a class="dropdown-item" href="../screen/AboutUs.html#our-misson">Our Mission</a></li>
                    <li><a class="dropdown-item" href="../screen/AboutUs.html#community">Our Community</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav gap-2">
            <li class="nav-item">
                <a class="btn-outline-light btn text-decoration-none" href="../screen/Login.html#login">
                    Login</a>
            </li>
            <li class="nav-item ">
                <a class="btn-warning btn text-decoration-none" href="../screen/SignUp.html#signup">
                    Sign up</a>
            </li>
            <li class="nav-item">
                <button class="btn btn-outline-warning" onclick="toSearchBar()"><i
                        class="fa-solid fa-magnifying-glass"></i></button>
            </li>
            <li class="nav-item dropdown dropstart">
                <button class="btn btn-outline-warning" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false"><i class="fa-solid fa-gear"></i></button>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#" class="dropdown-item disabled">
                            <i class="fa-solid fa-language "></i>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">vi - Tiếng việt</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">en - English</a>
                    </li>
                    <hr>
                    <li>
                        <a class="dropdown-item" href="#"><i class="fa-solid fa-sun"></i> Giao diện - Sáng</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#"><i class="fa-solid fa-moon"></i> Giao diện - Tối</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</nav>`
const nav = document.querySelector('#navbarDotnet')
nav.innerHTML = myNav

