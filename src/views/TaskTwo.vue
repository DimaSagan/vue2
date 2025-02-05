<template>
    <div class="comments comments__container">
        <CommentsComponent @addComment="add"></CommentsComponent>
        <div class="comments__cards">
            <CommentCard v-for="(userComment, i) in usersCommentsv" :key="i" :user-comment="userComment" :index="i" @like="like" @dislike="dislike">
            </CommentCard>
        </div>
    </div>
</template>

<script>
import CommentsComponent from "@/components/CommentsComponent/CommentsComponent.vue"
import CommentCard from "@/components/CommentsComponent/CommentCard.vue";
import { usersComments } from "@/assets/mock_data/productData";
export default {
    name: "TaskTwo",
    components: {
        CommentsComponent,
        CommentCard
    },
    data() {
        return {
            usersCommentsv: []
        }
    },
    methods: {
        add(userComment) {
            console.log('add')
            this.usersCommentsv.push(userComment)
        },
        like(index) {
            console.log(index)
            this.usersCommentsv[index].likes++
        },
        dislike(index) {
            this.usersCommentsv[index].likes--
        }
    },
    mounted() {
        this.usersCommentsv = usersComments
    },
}
</script>

<style lang="scss" scoped>
.comments {
    display: flex;
    flex-direction: column;
    gap: toRem(25);
    // .comments__container

    &__container {}

    // .comments__cards

    &__cards {
        display: flex;
        flex-direction: column;
        gap: toRem(20);
    }
}
</style>