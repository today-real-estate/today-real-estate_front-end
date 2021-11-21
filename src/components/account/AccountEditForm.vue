<template>
	<div class="edit-container">
		<div class="edit-form">
			<div class="edit-form__item item--profile-image">
				<AAvatar :size="64" icon="user" />
			</div>
			<div class="edit-form__input">
				<label for="edit-form__email-input">아이디</label>
				<AInput
					type="text"
					id="edit-form__email-input"
					disabled
					v-model="user.userEmail"
				/>
			</div>
			<div class="edit-form__input">
				<label for="edit-form__name-input">이름</label>
				<div class="edit-form__input__main">
					<AInput
						type="text"
						id="edit-form__name-input"
						v-model="user.userName"
						:disabled="!userNameEditStatus"
					/>
					<button
						class="edit-form__edit-btn"
						v-if="!userNameEditStatus"
						key="userNameEditStatus"
						@click="onUserNameEditStatus"
					>
						수정
					</button>
					<button
						class="edit-form__confirm-btn"
						v-else
						key="userNameEditStatus"
						@click="confirmNewUserName"
					>
						확인
					</button>
				</div>
			</div>
			<div class="edit-form__input">
				<label for="edit-form__nickname-input">닉네임</label>
				<div class="edit-form__input__main">
					<AInput
						type="text"
						id="edit-form__nickname-input"
						v-model="user.nickname"
						:disabled="!nicknameEditStatus"
					/>
					<button
						class="edit-form__edit-btn"
						v-if="!nicknameEditStatus"
						key="nicknameEditStatus"
						@click="onNickNameEditStatus"
					>
						수정
					</button>
					<button
						class="edit-form__confirm-btn"
						v-else
						key="nicknameEditStatus"
						@click="confirmNewNickname"
					>
						확인
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {
	fetchUserData,
	updateUserName,
	updateNickname,
} from '@/api/account/accountEdit';
import Swal from 'sweetalert2';

export default {
	data() {
		return {
			user: {
				userEmail: '',
				userName: '',
				nickname: '',
				profileImage: '',
			},
			beforeUserData: {
				userName: '',
				nickname: '',
			},
			userNameEditStatus: false,
			nicknameEditStatus: false,
		};
	},
	created() {
		this.getUserData();
	},
	methods: {
		async getUserData() {
			try {
				const { data } = await fetchUserData(
					this.$store.getters['userStore/getId'],
				);

				this.user.userEmail = data.userEmail;
				this.user.userName = data.userName;
				this.user.nickname = data.nickname;
				this.user.profileImage = data.profileImage;
				this.beforeUserData.userName = data.userName;
				this.beforeUserData.nickname = data.nickname;
			} catch (error) {
				const errorMessage = error.data;

				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${errorMessage}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		async confirmNewUserName() {
			if (this.user.userName !== this.beforeUserData.userName) {
				const userData = {
					userId: this.$store.getters['userStore/getId'],
					userName: this.user.userName,
				};

				await updateUserName(userData);
				this.beforeUserData.userName = userData.userName;

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">수정이 완료되었습니다.<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}

			this.userNameEditStatus = false;
		},
		async confirmNewNickname() {
			if (this.user.nickname !== this.beforeUserData.nickname) {
				const userData = {
					userId: this.$store.getters['userStore/getId'],
					nickname: this.user.nickname,
				};

				await updateNickname(userData);
				this.beforeUserData.nickname = userData.nickname;
				this.$store.commit('userStore/SET_NICKNAME', userData.nickname);

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">수정이 완료되었습니다.<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}

			this.nicknameEditStatus = false;
		},
		onUserNameEditStatus() {
			this.userNameEditStatus = true;
		},
		onNickNameEditStatus() {
			this.nicknameEditStatus = true;
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/accountEditForm.scss';
</style>
