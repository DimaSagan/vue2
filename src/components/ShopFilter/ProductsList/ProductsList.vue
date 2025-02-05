<template>
    <article class="products product-grid">
        <section class="products__list product product--flex-column" v-for="product in productsData" :key="product.id">
            <div class="product__image">
                <img :src="product.image" :alt="'product ' + product.name">
            </div>
            <h2 class="product__title">{{ product.brand }}</h2>
            <h3 class="product__model">{{ product.name }}</h3>
            <div class="product__price">{{ product.price }}</div>
        </section>
    </article>
</template>

<script>
export default {
    name: "ProductsList",
    props: {
        productsData: {
            type: Array,
            default: () => ([])
        },
    },

}
</script>

<style lang="scss" scoped>
.products {
    padding: 0 toRem(10);
}

.product {
    padding: toRem(10) toRem(15);
    gap: toRem(8);
    background-color: #fff;
    border: toRem(1) solid $lightGray;
    justify-content: space-between;
    // .product__image

    &__image {
        img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: contain;
        }
    }

    // .product__title
    &__title,
    &__model {
        cursor: pointer;
    }

    &__title {
        font-size: toRem(18);
        font-weight: 600;
        text-transform: capitalize;
    }

    &__price {
        font-weight: 600;
        font-size: toRem(17);

    }

    // .product__model

    &__model {
        line-height: 1.2;

        @media(any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>