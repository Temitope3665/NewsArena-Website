<template>
    <main>
        <div class="banner">
            <h1>Your No.1 News Hub</h1>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main'

}
</script>

<style scoped>
    main {
        width: 100%;
        height: 86vh;
        background: rgba(0,0,0,0.5);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .banner {
        width: 100%;
        height: 86vh;
        background-image: url(../assets/bg-img.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 30px;
    }
    h1 {
        width: 50%;
        font-weight: 700;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: auto;
        font-size: 55px;
        padding: 35vh 0;
        text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
</style>