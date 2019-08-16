<template>
    <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="full-center">
            <div id="login">
                <h1 class="standout text-center">Log In</h1>
                <form @submit.prevent="signin">
                    <input v-model="email" class="form-control mt-4 shadow-sm" type="email" placeholder="Email">
                    <input v-model="password" class="form-control mt-3 shadow-sm" type="password" placeholder="Password">
                    <input class="form-control mt-3 btn-primary" type="submit" value="Log In">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ax from '../../config/axios'
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signin() {
            console.log('Login')
            ax({
                method: 'post',
                url: '/users/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(({data})=> {
                localStorage.setItem('access_token', data.access_token)
                Swal.fire({
                title: 'Login Success',
                type: 'success'
                })
                this.$emit('login:done')
                this.email = ''
                this.password = ''
            })
            .catch(console.log)
        }
    }
}
</script>

<style>

</style>