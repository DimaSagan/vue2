<template>
    <router-link :to="card.link">
        <article class="task-card">
            <section class="task-card__img">
                <img :src="card.img" alt="img">
            </section>
            <section class="task-card__info">
                <h2 class="task-card__title">{{ card.title }}</h2>
                <p class="task-card__description">{{ card.task }}</p>
                <div class="task-card__number">{{ number }}</div>
            </section>
        </article>
    </router-link>
</template>
<script>
export default {
    name: 'TaskCard',
    props: {
        card: {
            type: Object,
            required: true,
            default: () => ({})
        },
        taskNumber: {
            type: Number,
            required: true
        }
    },
    computed: {
        number() {
            return '0' + (this.taskNumber + 1)
        }
    }
}
</script>
<style lang="scss" scoped>
.position {
    position: relative;
    z-index: 4;
}

.task-card {
    display: flex;
    gap: toRem(25);
    background-color: white;
    padding: toRem(5);
    box-shadow: toRem(3) toRem(3) toRem(4) toRem(3) rgba(0, 0, 0, 0.12);
    // .task-card__img

    &__img {
        flex-basis: 50%;
        overflow: hidden;

        img {
            width: 100%;
            scale: (1.12);
        }
    }

    // .task-card__info

    &__info {
        flex-basis: 50%;
        @extend .position;
    }

    // .task-card__title

    &__title {
        font-size: toRem(25);
        font-weight: 600;
        margin-bottom: toRem(10);
        @extend .position;
        letter-spacing: .75px;
    }

    // .task-card__description

    &__description {
        @extend .position;
        line-height: 1.27;
    }

    // .task-card__number

    &__number {
        font-size: toRem(150);
        position: absolute;
        top: toRem(-10);
        left: toRem(20);
        font-weight: 800;
        color: $lightGray;
        z-index: 2;
    }
}
</style>