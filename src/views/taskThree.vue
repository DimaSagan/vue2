<template>
    <div class="task__container task">
        <div>
            <custom-input title="Enter your age" :number-values="numberSettings" :message="'max age error'" v-model:age.check.setColor="userAge" />
        </div>
    </div>
</template>

<script>
import CustomInput from '@/components/CustomInput/CustomInput.vue';

export default {
    name: "TaskThree",
    components: {
        CustomInput,
    },
    data() {
        return {
            userAge: 0,
            numberSettings: {
                min: 10,
                mid: 21,
                max: 150
            },
        }
    },
    computed: {
        age() {
            return this.userAge.value
        }
    },
}
</script>

<style lang="scss" scoped></style>