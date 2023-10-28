<template>
    <NavRestarurent/>
    <div class="add-restarurent">
        <h1>Add Restarurent</h1>
        <input type="text" placeholder="Enter Restarurent name" v-model="name">
        <input type="text" placeholder="Enter Address" v-model="address">
        <input type="text" placeholder="Enter Contact Number" v-model="contact">

        <button  v-on:click="addRestarurent" class="btn">Add Restarurent</button>

    </div>
</template>

<script>
import axios from 'axios'
import NavRestarurent from './NavRestarurent.vue'


export default {
    name: "AddRestarurent",
    data() {
        return {
            name: '',
            address: '',
            contact:''
        }
    },
    components: {
        NavRestarurent
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
           this.$router.push({name:"Login"})
       }   
    },
    methods: {
        async addRestarurent() {
            let result = await axios.post("http://localhost:3000/restarurent", {
                name: this.name,
                address: this.address,
                contact:this.contact
            })

            if (result.status == 201) {
                this.$router.push({name:"AllRestarurents"})
            }
        }
    }
}

</script>

<style>

.add-restarurent input{
    width: 300px;
    height: 40px;
    
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}
.add-restarurent button{
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

