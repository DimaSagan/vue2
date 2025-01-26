<template>
    <header class="header">
        <div class="header__container">
            <RouterLink class="header__logo" to="/">
                <img src="https://testrigor.com/wp-content/uploads/2023/03/vuejs-logo.png" alt="logo">
            </RouterLink>
        </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'HeaderComponent'
}
</script>
<style lang="scss" scoped>
.header {
    padding: toRem(5) 0;
    border-bottom: 1px solid $lightGray;
    position: sticky;
    top: 0;
    background-color: $whiteBg;
    z-index: 20;
    // .header__container

    &__container {}

    &__logo {
        width: toRem(100);
        position: relative;
        transition: all .3s ease-in-out;

        @media(any-hover: hover) {
            &:hover {
                filter: grayscale(80%);
            }
        }

        img {
            width: 100%;
        }


    }
}
</style>