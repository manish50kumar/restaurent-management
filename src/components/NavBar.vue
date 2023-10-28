<template>
    <div class="main">
        <div class="img-div">
            <img src="../assets/Restaurant.png" alt="nav-logo">
        </div>
        <div>
            <h2>Restaurant Application</h2>
        </div>
        <div class="btn-div">
            <router-link to="/sign-up" class="btn"> SignUp </router-link>
            <router-link to="/login" class="btn"> Login</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    
}
</script>

<style scoped>
.main{
    display: flex;
    background-color: rgb(230, 220, 220);
    justify-content: space-between;
    align-items: center;
}

.img-div{
    margin: 5px;
}

.btn-div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.btn{
  margin-left: 50px;
  margin-right: 50px;
  padding: 15px;
  background-color: rgb(114, 114, 230);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover{
    background-color: blue;
}
a{
    text-decoration: none;
    color: aliceblue;
    font: bold;
    font-size: larger;
    
}

img{
    width: 100px;
    height: 80px;
}
</style>