<template>
     <NavRestarurent/>
    <div class="add-restarurent">
        <h1>Update Restarurent</h1>
        <input type="text" placeholder="Enter Restarurent name" v-model="restarurents.name">
        <input type="text" placeholder="Enter Address" v-model="restarurents.address">
        <input type="text" placeholder="Enter Contact Number" v-model="restarurents.contact">

        <button  v-on:click="updateRestarurent" class="btn">Update Restarurent</button>

    </div>

</template>

<script>
import axios from 'axios';
import NavRestarurent from './NavRestarurent.vue';

export default {
    name: "UpdateComponent",
    data() {
        return {
            restarurents: {
                name: '',
                address: '',
                contact: ''
            }
        }   
    },
    components: {
        NavRestarurent
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({name:"Login"})
        }
        let id = this.$route.params.id;
        let result = await axios.get("http://localhost:3000/restarurent/"+id);
        this.restarurents = result.data;
    },
    methods: {
        async updateRestarurent() {
            const id = this.$route.params.id
            let result = await axios.put("http://localhost:3000/restarurent/"+id, {
                name: this.restarurents.name,
                address: this.restarurents.address,
                contact:this.restarurents.contact
            })
            if (result.status == 200) {
                this.$router.push({name:"AllRestarurents"})
            }
        }
    }
}

</script>

<style scoped>
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

