<template>
    <article class="card">
        <section class="card__img">
            <img :src="card.img" alt="img">
        </section>
        <section class="card__information">
            <div class="card__information-header">
                <h2 class="card__title">{{ card.title }} <strong>{{ card.model }}</strong></h2>
                <div class="card__price">{{ price }}</div>
            </div>
            <div class="card__status" :class="!card.status ? 'lightGray' : 'green'">
                {{ productStatus }}
            </div>
        </section>
    </article>
</template>
<script>
export default {
    name: 'ProductCard',
    props: {
        card: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
    computed: {
        productStatus() {
            return this.card.status === true ? 'В наявності' : "Немає в наявності"
        },
        price() {
            return new Intl.NumberFormat('uk-Ua').format(this.card.price)
        }
    }
}
</script>
<style lang="scss" scoped>
.flex-column-grow-sb {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: toRem(5);
}

.card {
    display: flex;
    flex-direction: column;
    gap: toRem(10);
    padding: toRem(20);
    border: 1px solid $lightGray;
    transition: all 0.3s ease-in-out;
    background-color: #fff;

    @media(any-hover: hover) {
        &:hover {
            border-color: gray;
        }
    }

    // .card__img

    &__img {
        img {
            width: 100%;
            height: 100%;
            aspect-ratio: 1 / 1;
            object-fit: contain;
            object-position: center;
        }
    }

    // .card__information

    &__information {
        @extend .flex-column-grow-sb;
        gap: toRem(8);
    }

    &__information-header {
        @extend .flex-column-grow-sb;

    }

    // .card__title

    &__title {
        line-height: 1.2;
        font-size: toRem(18);

        @media(any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    // .card__price

    &__price {
        font-size: toRem(20);
        font-weight: 600;
    }

    &__title,
    &__img {
        cursor: pointer;
    }
}
</style>
