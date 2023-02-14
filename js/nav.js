let myNavBeforeLogin = `<nav class="navbar navbar-expand-lg" ng-controller="navBar">
<div class="container" id="normal-nav">
    <a class="navbar-brand d-none d-lg-block" href="../screen/Home.html#home"><img class="rounded-circle" height="50"
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
            <li class="nav-item d-lg-none">
                <button class="w-25 btn btn-outline-warning" data-bs-toggle="modal" type="button"
                    data-bs-target="#search-modal"><i class="fa-solid fa-magnifying-glass"></i></button>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../screen/Home.html#home"><i
                        class="fa-solid fa-house"></i> Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../screen/FAQs.html"><i class="fa-solid fa-clipboard-question"></i> FAQs</a>
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
                <button class="btn btn-outline-warning" data-bs-toggle="modal" type="button"
                    data-bs-target="#search-modal"><i class="fa-solid fa-magnifying-glass"></i></button>
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
                    <li>
                        <hr>
                    </li>
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
<!-- Modal -->
<div class="modal fade" id="search-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Search</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row g-3">
                    <div class="col-12 col-sm-12">
                        <label for="" class="form-label">Search</label>
                        <input class="form-control" type="text" placeholder="Search">
                    </div>
                    <div class="col-lg-6 col-12" ng-controller="topic">
                        <label for="" class="form-label">Topic</label>
                        <select class="form-select" name="" id="">
                            <option ng-repeat="item in listTopic">{{item}}</option>
                        </select>
                    </div>
                    <div class="col-lg-6 col-12">
                        <label for="" class="form-label">Read time</label>
                        <select class="form-select" name="" id="">
                            <option ng-repeat="readtime in listReadTime">{{readtime}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-warning">Tìm kiếm</button>
            </div>
        </div>
    </div>
</div>
</nav>`

const nav = document.querySelector('#navbarDotnet')
nav.innerHTML = myNavBeforeLogin

const listTopic = [
    "Sách",
    "Khoa học - Công nghệ",
    "Thể thao",
    "Quan điểm - Tranh luận",
    "Yêu",
    "Lịch sử",
    "Game", "Sáng tác",
    "Phát triển bản thân",
    "Âm nhạc",
    "Tâm lý học",
    "Du lịch",
    "Nhiếp ảnh",
    "Thời trang",
    "Phim ảnh"
]

const listReadTime = [
    "Dưới 3 phút",
    "3 phút - 7 phút",
    "7 phút - 15 phút",
    "15 phút - 30 phút",
    "Trên 30 phút",
]

var app = angular.module('myApp', []);
app.controller('navBar', function ($scope) {
    $scope.listReadTime = listReadTime;
});

app.controller('topic', ($scope) => {
    $scope.listTopic = listTopic;

})