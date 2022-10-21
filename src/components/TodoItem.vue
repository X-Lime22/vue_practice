<template>
    <div class="todo-item">
        <h2>{{ note.name }}</h2>
        <ul>
            <li v-for="checkbox in filteredCheckboxes" :key="checkbox.id">
                <input type="checkbox" v-model="checkbox.done">
                <span :class="{ done: checkbox.done }">{{ checkbox.text }}</span>
                <button @click="CheckboxDelete(checkbox)" class="btn danger">Удалить</button>
            </li>
            <li>
                <strong>Список дел: {{ note.checkboxes?.length }}</strong>
            </li>
        </ul>

        <div v-if="note.checkboxes?.length === 0">Заметок пока нет</div>

        <input type="text"
                v-model="inputValue"
                @keypress.enter="addNewCheckbox"
                >

        <button class="btn" @click="addNewCheckbox">Добавить</button>

        <button @click="hideCompleted = !hideCompleted" v-if="note.checkboxes?.length > 0">
             {{ hideCompleted ? 'Show all' : 'Hide completed' }}
        </button>

    </div>
</template>

<script>

let id = 0
export default {
    name: "TodoItem",
    data() {
        return {
            inputValue: "",
            hideCompleted: false,
        }
    },

    methods: {
        addNewCheckbox() {
            if (this.inputValue !== "") {
                this.note.checkboxes.push({ id: id++, text: this.inputValue, done: false })
                this.inputValue = ""
            }
        },
        CheckboxDelete(checkbox) {
            this.note.checkboxes = this.note.checkboxes.filter((t) => t !== checkbox)
        },
    },
    computed: {
        filteredCheckboxes() {
            return this.hideCompleted
                ? this.note.checkboxes.filter((t) => !t.done)
                : this.note.checkboxes
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 20) {
                this.inputValue = ""
            }
        }
    },

    props: {
        note: {
            type: Object,
        }
    }
}
</script>


<style scoped>

</style>