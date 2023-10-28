<template>
    <NavBar/>
    <div class="login">
        <h1>Login</h1>
        <input type="email" placeholder="Enter Your Email" v-model="email">
        <input type="password" placeholder="Enter Your Password" v-model="password">
        <button v-on:click="login" class="btn">Login</button>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import axios from 'axios';
export default {
    
    name: "LoginComponent",
    components: {
        NavBar
    },
    data() {
        return {
            email: '',
            password:''
        }
    },
    methods: {
        async login() {
            let result = await axios.get (
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({name:'AllRestarurents'})
            }
        }

    }
}
</script>

<style scoped>
.login input{
    width: 300px;
    height: 40px;
    
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}
.login button{
    width: 310px;
    height: 40px;
    border: 1px solid rgb(79, 188, 232);
    color: aliceblue;
    background-color: rgb(80, 133, 223);
    cursor: pointer;
    border-radius: 20px;
    font-size: large;
    
}

.btn{
    margin-left: 40%;
}
</style>