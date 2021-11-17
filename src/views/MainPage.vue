<template>
	<div>
		<div class="search-container">
			<div class="search__inner">
				<h1 class="search__title">어떤 아파트를 찾으세요?</h1>
				<div class="search__option-btn-group">
					<p class="search__option-btn">매물</p>
					<p class="search__option-btn">분양</p>
				</div>
				<form class="search__form">
					<label for="search-input">
						<AIcon type="search" class="search__form__icon" />
					</label>
					<input
						type="text"
						id="search-input"
						placeholder="지역 또는 단지명을 입력하세요."
					/>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-container {
	width: 100%;
	height: 580px;
	margin-top: -80px;
	background-image: linear-gradient(
		134deg,
		rgb(19, 183, 207) -5%,
		rgb(54, 91, 180) 56%,
		rgb(54, 91, 180) 56%
	);

	.search__inner {
		max-width: 1100px;
		margin: 0 auto;

		.search__title {
			padding-top: 280px;
			font-size: 46px;
			font-weight: 300;
			line-height: 60px;
			color: #fff;
		}
		.search__option-btn-group {
			display: flex;
			height: 30px;
			margin: 40px 0 20px;

			.search__option-btn {
				font-size: 18px;
				font-weight: 300;
				line-height: 24px;
				color: #fff;
				cursor: pointer;

				&:nth-child(2) {
					margin-left: 24px;
				}
			}
		}

		.search__form {
			display: flex;
			align-items: center;
			width: 100%;
			height: 72px;
			padding: 0px 40px;
			border-radius: 3px;
			box-shadow: rgb(0 0 0 / 10%) 0px 7px 15px -2px;
			background-color: #fff;

			.search__form__icon {
				font-size: 24px;
				color: #898989;
			}

			#search-input {
				width: 100%;
				height: 27px;
				margin-left: 20px;
				font-size: 20px;
				font-weight: 300;
				border: 0px;
				background-color: transparent;

				&:focus {
					outline: none;
				}
			}
		}
	}
}
</style>
