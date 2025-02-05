<template>
    <div class="comments-comp">
        <h2>Залиш свій коментар</h2>
        <div class="form">
            <label for="">
                <input class="form__input" type="text" placeholder="Введіть імʼя" v-model.lazy="userName">
            </label>
            <textarea class="form__message" placeholder="Текст..." v-model.lazy="message"></textarea>
            <button class="form__button" type="submit" @click="addComment">Відправити</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentsComponent",
    data() {
        return {
            userName: null,
            message: null
        }
    },
    methods: {
        addComment() {
            let userMessage = { name: this.userName, comment: this.message, likes: 0 }
            this.$emit('addComment', userMessage)
            this.clear()
        },
        clear() {
            this.userName = null
            this.message = null
        }
    },
}
</script>

<style lang="scss" scoped>
.border {
    border: 2px solid $lightGray;
}

.comments-comp {
    h2 {
        font-size: toRem(24);
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: toRem(20);
    }
}



.form {
    background-color: $whiteBg;
    display: flex;
    flex-direction: column;
    gap: toRem(15);
    padding: toRem(20) toRem(40);
    box-shadow: toRem(3) toRem(3) toRem(4) toRem(3) rgba(0, 0, 0, 0.12);

    &__input,
    &__message {
        @extend .border;
        padding: toRem(8) toRem(10);
        font-size: toRem(18);
    }



    // .form__message

    &__message {
        resize: none;
        line-height: 1.2;
    }

    // .form__button

    &__button {
        background-color: green;
        padding: toRem(10) toRem(20);
        align-self: center;
        font-weight: 500;
        color: $whiteBg;
    }
}
</style>