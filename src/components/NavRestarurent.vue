<template>
    <div>
    <div class="main">
        <div>
            <img src="../assets/Restaurant.png" alt="restarurent-logo">
        </div>
        <div>
            <h1>Welcome to Restarurent Management </h1>
        </div>
        <div>
            <router-link to="/all-restarurent" class="btn">All Restarurent</router-link>
            <router-link to="/add-restarurent" class="btn">Add Restarurent</router-link>
            
            <button v-on:click="logout" class="btn">Logout</button>
            
        </div>
    </div>
   
    </div>
</template>

<script>

export default {
    name: "AllRestarurent",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:"Home"})
        }
    }
}

</script>

<style scoped>
img{
    width:100px ;
    height: 80px;
}
.main{
    display: flex;
    justify-content: space-between;
    align-items: center;
  background-color: rgb(230, 220, 220);;
}
.btn{
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px;
    color: aliceblue;
    border: none;
    background-color: rgb(156, 156, 231);
    font-size: larger;
    font: bold;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 3ms;
    text-decoration: none;
}
.btn:hover{
    background-color: blue;
    
}
</style>