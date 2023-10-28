<template>
    <NavRestarurent/>
    <h1>Hello  {{ name }} , Welcome on Home Page</h1>
    <h2>All restrurents List</h2>   

        <table border="1">

        <tr class="header">
            <td>ID</td>
            <td>Restarurent Name</td>
            <td>Address</td>
            <td>Mobile No.</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        <tr v-for="restarurent in restarurents" :key="restarurent.id">
            <td> {{ restarurent.id }} </td>
            <td> {{ restarurent.name }} </td>
            <td> {{ restarurent.address }} </td>
            <td> {{ restarurent.contact }} </td>
            <td> <router-link :to="'/update/'+restarurent.id" class="btn"> update </router-link>  </td>
            <td><button class="btn" v-on:click="deleteData(restarurent.id)">Delete </button>   </td>
        </tr>

    </table>

 
</template>

<script>
import axios from 'axios';
import NavRestarurent from './NavRestarurent.vue'

export default {
    name: "AllRestarurentComponent",
    components: {
       NavRestarurent
    },
    data() {
        return {
            name: '',
            restarurents:[]
        }
    },

    methods: {
        async deleteData(id) {
            let result = await axios.delete("http://localhost:3000/restarurent/" + id)
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            if (!user) {
               this.$router.push({name:"Login"})
            }
            this.name = JSON.parse(user).name;

             let result = await axios.get("http://localhost:3000/restarurent");
             this.restarurents = result.data

        }   
    },

     mounted() {
        this.loadData()
   }
}
</script>

<style scoped>
.header{
    background-color: rgb(167, 26, 26);
    color: aliceblue;
}
h2{
    text-align: center;
}
table{
    margin-left: auto;
    margin-right: auto;
}
td{
    width: 120px;
    height: 40px;
    text-align: center;
}

.btn{
    text-decoration: none;
     margin-right: auto;
     margin-left: auto;
    padding: 10px;
    background-color: rgb(84, 84, 198);
    color: aliceblue;
    border: none;
    text-align: center;
    transition-duration: 3ms;
    border-radius: 3px;
    font: bold;
}

.btn:hover{
    background-color: blue;
}
</style>



