<template>
    <div class="comment-card">
        <h2>{{ userComment.name }}</h2>
        <p>
            {{ userComment.comment }}
        </p>
        <div class="comment-card__action">
            <button class="comment-card__like" @click="increaseLike">+</button>

            <button class="comment-card__dislike" @click="decreaseLike">-</button>
            <span>{{ userComment.likes }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentCard',
    props: {
        userComment: {
            type: Object,
            default: () => ({}),
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    methods: {
        increaseLike() {
            this.$emit('like', this.index)
        },

        decreaseLike() {
            this.$emit('dislike', this.index)
        }
    },
}
</script>

<style lang="scss" scoped>
.comment-card {
    padding: toRem(30) toRem(40);
    box-shadow: toRem(3) toRem(3) toRem(4) toRem(3) rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    gap: toRem(15);

    // .comment-card__action
    h2 {
        font-size: toRem(18);
        font-weight: 600;
    }

    &__action {
        display: flex;
        align-items: center;
        gap: toRem(5);

        span {
            font-size: toRem(17);
            letter-spacing: 1px;
        }
    }

    // .comment-card__like

    &__like,
    &__dislike {
        padding: toRem(5);
        font-size: toRem(25);
        font-weight: 600;
        width: toRem(25);
        height: toRem(25);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .comment-card__dislike
    &__like {
        color: $green;
    }

    &__dislike {
        color: $red;
    }
}
</style>