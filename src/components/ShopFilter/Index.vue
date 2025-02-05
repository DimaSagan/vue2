<template>
    <div class="shop-filter">
        <div class="section section--flex">
            <div class="section__filter">
                <product-filters :productsData="products" v-model:sellerValue="filteredProducts" v-model:brandValue="filteredBrand"></product-filters>
            </div>
            <div class="section__products">
                <products-list :productsData="currentProducts"></products-list>
            </div>
        </div>

        <!-- <div style="padding: 20px;">
            <h2 style="font-size: 20px; font-weight: 600;">parent</h2>
            <div> seller {{ filteredProducts }}</div>
            <div>brand {{ filteredBrand }}</div>
            <div>products {{ currentProducts }}</div>
        </div> -->
    </div>
</template>

<script>
import ProductFilters from './ProductFilters/ProductFilters.vue';
import ProductsList from './ProductsList/ProductsList.vue';
import { ProductListData } from '@/assets/mock_data/shopData';
export default {
    name: 'ShopFilter',
    components: {
        ProductFilters,
        ProductsList
    },
    data() {
        return {
            products: ProductListData,
            filteredProducts: '',
            filteredBrand: []
        }
    },
    computed: {
        currentProducts() {
            let currentProducts = this.products.products
            if (this.filteredProducts) {
                currentProducts = currentProducts.filter((product) => product.seller.includes(this.filteredProducts))
            }
            if (this.filteredBrand.length) {
                currentProducts = currentProducts.filter((product) => this.filteredBrand.includes(product.brand))
            }
            return currentProducts
        }
    },
}
</script>

<style lang="scss" scoped>
.section {
    &__filter {
        flex-basis: 20%;
        // background-color: $green;
    }

    &__products {
        flex-basis: 80%;
        // background-color: $blue;
    }
}
</style>