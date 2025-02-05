<template>
    <article class="home__container home">
        <section class="title">
            <h2>Tasks</h2>
        </section>
        <section class="home__task-cards home__task-cards--grid">
            <TaskCard v-for="(task, i) in tasks" :key="i" :card="task" :taskNumber="i"></TaskCard>
        </section>
    </article>


</template>
<script>
import TaskCard from '@/components/TaskCard.vue';
import { tasks } from '@/assets/mock_data/productData';
export default {
    components: {
        TaskCard
    },
    data() {
        return {
            tasks: []
        }
    },
    mounted() {
        this.tasks = tasks
    }
}
</script>
<style lang="scss" scoped>
.title {
    h2 {
        font-size: toRem(40);
        letter-spacing: toRem(3);
        font-weight: 800;
        text-align: center;
    }

    p {
        text-align: center;
    }

    &:not(:last-child) {
        margin-bottom: toRem(30);
    }

}
</style>