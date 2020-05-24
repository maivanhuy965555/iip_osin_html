<?php
    include "library/header-css.php";
?>

<section class="registration" style="background-image: url(assets/images/bg-dk.png);">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-xl-8 col-lg-7">
				<div class="registration_content">
					<div class="list-img">
						<a href="#" title="">
							<img src="assets/images/lg1.png" alt="">
						</a>
						<a href="#" title="">
							<img src="assets/images/lg2.png" alt="">
						</a>
						<a href="#" title="">
							<img src="assets/images/lg3.png" alt="">
						</a>
					</div>
					<h1>Chào mùng bạn <br>
					đến với trang thông tin dành cho người lao động</h1>
				</div>
			</div>
			<div class="col-xl-4 col-lg-5">
				<div class="registration_form">
					<h2>Đăng nhập</h2>
					<form class="apply-form" action="">
						<div class="form-group">
							<input autocomplete="off" class="form-control" type="text" placeholder="Nhập số điện thoại" name="">
							<span>Nhập số điện thoại</span>
						</div>
						<div class="form-group">
							<input autocomplete="off" class="form-control" type="password" placeholder="Mật khẩu" name="">
							<span>Mật khẩu</span>
						</div>
						<div class="form-group d-flex align-items-center justify-content-between">
							<label class="check">Ghi nhớ
								<input type="checkbox">
								<span class="checkmark"></span>
							</label>
							<a class="forgot" href="#" title="">Quên mật khẩu ?</a>
						</div>
						<div class="form-group text-center" style="margin-top: 145px;">
							<button class="btn" type="submit">Đăng Nhập</button>
						</div>
					</form>
					<p class="directional text-center m-0">Bạn chưa có tài khoản? <a href="registration.php" title="">Đăng ký</a></p>
				</div>
			</div>
		</div>
	</div>
	<div class="language">
		<a href="#">English</a>
		<a href="#">Vietnamese</a>
		<a href="#">Japanese</a>
		<a href="#">German</a>
		<a href="#">Chinese</a>
		<a href="#">Taiwanese</a>
		<a href="#">Korean</a>
	</div>
</section>




<?php
    include "library/footer-js.php";
?>