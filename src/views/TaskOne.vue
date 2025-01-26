<template>
    <div class="page__container">
        <article class="products product-grid">
            <ProductCard v-for="product in products" :key="product.id" :card="product"></ProductCard>
        </article>
        <div></div>
    </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import { productData } from '@/assets/mock_data/productData';
export default {
    name: 'HomePage',
    data() {
        return {
            products: []
        }
    },
    components: {
        ProductCard
    },
    mounted() {
        this.products = productData
    }
}
</script>
<style lang="scss" scoped>
.products {
    padding-top: toRem(30);
}
</style>