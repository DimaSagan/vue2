<template>
    <article class="filer filer--flex-column">
        <section class="filer__sellers sellers">
            <h2 class="sellers__title">{{ sellerTitle }}</h2>
            <div class="sellers__item sellers__item--flex-column">
                <label v-for="(seller, index) in sellers" :key="index" :for="`seller${index}`">
                    <input type="radio" v-model="currentSeller" :id="`seller${index}`" :value="seller.name">
                    {{ seller.name }}
                </label>
            </div>
        </section>
        <section class="filter__brand brand">
            <h2 class="brand__title">{{ brandTitle }}</h2>
            <input type="text" class="brand__input" v-model="brandFinder">
        </section>
        <section class="brands-items">
            <h2 class="brands-items__title">{{ alphabetTitle }}</h2>
            <div class="brands-items__item brands-items__item--flex-column">
                <label v-for="(brand, index) in brandsSorted" :key="index" :for="`brand${index}`">
                    <input type="checkbox" v-model="currentBrand" :id="`brand${index}`" :value="brand.name">
                    {{ brand.name }}
                </label>
            </div>
        </section>

    </article>
</template>

<script>
export default {
    name: "ProductFilters",
    props: {
        sellerValue: {
            type: String,
            default: null
        },
        brandValue: {
            type: Array,
            default: () => { [] }
        },
        productsData: {
            type: Object,
            default: () => ({})
        },
        productsDataModifiers: {
            default: () => ({})
        }
    },
    data() {
        return {
            sellerTitle: this.productsData.sellersTitle,
            sellers: this.productsData.sellers,
            brandTitle: this.productsData.brandsTitle,
            alphabetTitle: this.productsData.alphabetTitle,
            brands: this.productsData.brands,
            brandFinder: null
        }
    },
    computed: {
        currentSeller: {
            get() {
                return this.sellerValue
            },
            set(newVal) {
                this.$emit('update:sellerValue', newVal)
            }
        },
        currentBrand: {
            get() {
                return this.brandValue
            },
            set(newVal) {
                this.$emit('update:brandValue', newVal)
            }
        },
        brandsSorted() {
            const sortedBrands = this.brands.sort((a, b) => a.name.localeCompare(b.name))
            if (this.brandFinder !== null) {
                return sortedBrands.filter((value) => value.name.toLowerCase().includes(this.brandFinder.toLowerCase()))
            }
            return sortedBrands

            // }
        }
    },
}
</script>

<style lang="scss" scoped>
[class*='_title'] {
    margin-bottom: toRem(10);
    font-size: toRem(18);
    font-weight: 600;
}

.filer {
    padding: toRem(20) toRem(10);
    border: toRem(1) solid $lightGray;
    gap: toRem(20);
    height: 100%;
}

.sellers {
    &__item {
        gap: toRem(5);
    }
}

.brand {
    &__input {
        border: toRem(1) solid $lightGray;
        padding: toRem(3) toRem(5);
        border-radius: toRem(10);
        width: 80%;
    }
}

.brands-items {
    &__item {
        gap: toRem(5);
    }
}
</style>