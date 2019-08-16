<template>
    <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <div class="full-center">
            <div id="register">
                <h1 class="standout text-center">Sign Up</h1>
                <form @submit.prevent="signUp">
                    <input v-model="email" class="form-control mt-3 shadow-sm" type="email" placeholder="Email">
                    <input v-model="username" class="form-control mt-3 shadow-sm" type="text" placeholder="Username">
                    <input v-model="password" class="form-control mt-3 shadow-sm" type="password" placeholder="Password">
                    <input class="form-control mt-3 btn-primary" type="submit" value="Sign Up">
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
            username: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            ax({
                method: 'post',
                url: '/users/register',
                data: {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }
            })
            .then(({data}) => {
                Swal.fire({
                title: 'Register Success',
                type: 'success'
                })
                this.email = ''
                this.username = ''
                this.password = ''

            })
            .catch( err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>