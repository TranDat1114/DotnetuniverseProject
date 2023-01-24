let myNav = `<nav class="navbar navbar-expand-lg ">
<div class="container">
    <a class="navbar-brand d-none d-lg-block" href="#"><img class="rounded-circle" height="50"
            src="../assets/logo.svg" alt="logo">
        NetUniverse</a>
    <a class="navbar-brand d-lg-none" href="#"><img class="rounded-circle" height="50" src="../assets/logo.svg"
            alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
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
    <div class="collapse navbar-collapse justify-content-end" id="navbar">
        <ul class="navbar-nav me-2">
            <li class="nav-item">
                <a class="btn-outline-light btn me-2 mb-2  text-decoration-none"
                    href="../screen/Login.html#login">
                    Login</a>
            </li>
            <li class="nav-item ">
                <a class="btn-warning btn text-decoration-none me-2 mb-2" href="../screen/SignUp.html#signup">
                    Sign up</a>
            </li>
            <li class="nav-item ">
                <button class="btn me-2 mb-2"><i class="fa-solid fa-moon fa-2x text-warning"></i></button>
            </li>
            <li class="nav-item dropdown d-none d-lg-block">
                <div class="btn-group">
                    <button class="btn text-white mb-2" data-bs-toggle="dropdown" aria-expanded="false"><i
                            class="fa-solid fa-earth-asia fa-2x"></i></button>
                    <button class="btn text-white mb-2 dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <p class="dropdown-item disabled">Language</p>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a class="dropdown-item" href="../screen/AboutUs.html#about-us">vi - Tiếng việt</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="../screen/AboutUs.html#our-misson">en - English</a>
                        </li>
                    </ul>
            </li>
        </ul>
    </div>
</div>
</nav>`
const nav = document.querySelector('#navbarDotnet')
nav.innerHTML = myNav

