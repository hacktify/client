<template>
    <div class="col-4">
<<<<<<< HEAD
        <h1 class="standout text-center">Log In</h1>
        <form @submit.prevent="signin">
            <input v-model="email" class="form-control mt-4 shadow-sm" type="email" placeholder="Email">
            <input v-model="password" class="form-control mt-3 shadow-sm" type="password" placeholder="Password">
            <input class="form-control mt-3 btn-primary" type="submit" value="Log In">
        </form>
=======
        <div class="full-center">
            <div id="login">
                <h1 class="standout text-center">Log In</h1>
                <form>
                    <input class="form-control mt-4 shadow-sm" type="email" placeholder="Email">
                    <input class="form-control mt-3 shadow-sm" type="password" placeholder="Password">
                    <input class="form-control mt-3 btn-primary" type="submit" value="Log In">
                </form>
            </div>
        </div>
>>>>>>> 09e1af4818667847f6d42a594cd4a262b0729d01
    </div>
</template>

<script>
import ax from '../../config/axios'
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
    directives: {
        GoogleSignInButton
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signin() {
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
            })
            .catch(next)
        }
    }
}
</script>

<style>

</style>