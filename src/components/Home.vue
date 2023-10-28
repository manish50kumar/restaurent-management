<template>
    <NavBar/>
    <h1>Welcome to Home page</h1>
</template>
<script>
import NavBar from './NavBar.vue';
export default {
    name: "HomeComponent",
    components: {
        NavBar,
    }
    
}

</script>

<style>
h1{
    text-align: center;
}
</style>