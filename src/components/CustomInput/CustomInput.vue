<template>
    <div class="input">
        <label class="input__label" :class="error" :style="{ '--message': `'${message}'` }">
            {{ title }}
            <input type="number" class="input__input" :class="color" v-model.number="currentValue" placeholder="0">
        </label>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return {
            color: '',
            error: ''
        }
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        message: {
            type: String,
            default: 'error'
        },
        numberValues: {
            type: Object,
            default: {
                min: 0,
                mid: 0,
                max: 0
            }
        },
        age: {
            type: Number,
            default: null
        },

        ageModifiers: {
            default: () => ({})
        }

    },
    methods: {

    },

    computed: {
        currentValue: {
            get() {
                return this.age
            },
            set(newVal) {
                this.error = ''
                if (newVal) {
                    if (this.ageModifiers.check) {
                        if (newVal > this.numberValues.max) {
                            newVal = this.numberValues.max
                            this.error = 'error'
                        }
                    }
                    if (this.ageModifiers.setColor) {
                        newVal <= this.numberValues.min ? this.color = 'green' : newVal <= this.numberValues.mid ? this.color = 'yellow' : this.color = 'orange'
                    }
                    this.$emit('update:age', newVal)
                } else {
                    this.$emit('update:age', 0)
                    this.color = 'def'
                }
            }
        }

    },
}
</script>

<style lang="scss" scoped>
.input {
    background-color: rgb(208, 208, 208);
    padding: toRem(20) toRem(40);

    // .input__label
    &__label {
        font-size: toRem(20);
        position: relative;

        &::after {
            content: var(--message);
            position: absolute;
            display: block;
            top: 105%;
            right: 0;
            color: red;
            font-size: toRem(13);
            opacity: 0;
        }

        &.error {
            &::after {
                opacity: 1;
            }
        }
    }

    // .input__input

    &__input {
        border: toRem(1) solid black;

    }
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
}

.orange {
    background-color: orange;
}

.def {
    background-color: white;
}
</style>