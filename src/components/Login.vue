<template>
    <div class="col-4">
        <h1 class="standout text-center">Log In</h1>
        <form>
            <input class="form-control mt-4 shadow-sm" type="email" placeholder="Email">
            <input class="form-control mt-3 shadow-sm" type="password" placeholder="Password">
            <input class="form-control mt-3 btn-primary" type="submit" value="Log In">
        </form>
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
            clientId: '973604254627-ca6u1b9pjmibaclhq74cfn303jip6cb6.apps.googleusercontent.com'
        }
    },
    methods: {
        OnGoogleAuthSuccess (idToken) {
            ax({
                url: '/users/signin/google',
                method: 'post',
                data: {
                    id_token: idToken
                }
            })
            .then(({ data })=> {
                localStorage.setItem('token', data.access_token)
                localStorage.setItem('username', data.username)
                this.$emit('login:done')
            })


        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }
}
</script>

<style>

</style>