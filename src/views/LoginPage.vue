<template>
	<div class="login-container">
		<LoginForm />
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
	components: {
		LoginForm,
	},
};
</script>

<style lang="scss" scoped>
.login-container {
	margin-top: 200px;
}
</style>
