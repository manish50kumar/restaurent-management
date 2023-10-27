<template>
    <img class="logo" src="../assets/Restaurant.png" alt="restro-logo">
    <h1>Sign Up</h1>

    <div class="register">
        <input type="text" placeholder="Enter your name" v-model="name">
        <input type="text" placeholder="Enter your Email" v-model="email">
        <input type="password" placeholder="Enter your password" v-model="password">

        <button v-on:click="signup">Sign Up</button>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password:''
        }
    },
    methods: {
         async signup() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status == 201) {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
            
        }
    }
}
</script>

<style>
.logo{
    widows: 100px;
    height: 100px;
}
.register input{
    width: 300px;
    height: 40px;
    
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}
.register button{
    width: 310px;
    height: 40px;
    border: 1px solid rgb(79, 188, 232);
    color: aliceblue;
    background-color: rgb(80, 133, 223);
    cursor: pointer;
    border-radius: 20px;
    font-size: large;
    
}


</style>