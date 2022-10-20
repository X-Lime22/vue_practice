<template>
    <div class="todo-item">
        <h2>{{ note.name }}</h2>
        <ul>
            <li v-for="checkbox in filteredNotes" :key="checkbox.id">
                <input type="checkbox" v-model="checkbox.done">
                <span :class="{ done: checkbox.done }">{{ checkbox.text }}</span>
                <button @click="btnDel(checkbox)" class="btn danger">Удалить</button>
            </li>
            <li>
                <strong>Список дел: {{ note.checkboxes.length }}</strong>
            </li>
        </ul>

        <div v-if="note.checkboxes.length === 0">Заметок пока нет</div>

        <input type="text"
                v-model="inputValue"
                @keypress.enter="addNewNote"
                >

         <button class="btn" @click="addNewNote">Добавить</button>

         <button @click="hideCompleted = !hideCompleted" v-if="note.checkboxes.length > 0">
             {{ hideCompleted ? 'Show all' : 'Hide completed' }}
          </button>




<!--        <ul class="list">-->
<!--            <li class="list-item" v-for="(note, idx) in filteredNotes" :key="note.id">-->
<!--                <input type="checkbox" v-model="note.done">-->
<!--                <span :class="{ done: note.done }">{{ note.text }}</span>-->
<!--                <button @click="btnDel(note)" class="btn danger">Удалить</button>-->
<!--            </li>-->
<!--            <li>-->
<!--                <strong>Список дел: {{ notes.length }}</strong>-->
<!--            </li>-->
<!--        </ul>-->

<!--        <div v-if="notes.length === 0">Заметок пока нет.</div>-->

<!--        <input type="text"-->
<!--        v-model="inputValue"-->
<!--        @keypress.enter="addNewNote"-->
<!--        >-->
<!--        <button class="btn" @click="addNewNote">Добавить</button>-->
<!--        <button @click="hideCompleted = !hideCompleted" v-if="notes.length > 0">-->
<!--            {{ hideCompleted ? 'Show all' : 'Hide completed' }}-->
<!--        </button>-->
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
            // notes: [
            //     { id: id++, text: 'Learn JavaScript', done: false,
            //         // lists: [
            //         //     { id: id++, text: "Learn props" },
            //         //     { id: id++, text: "Learn async/await" },
            //         // ]
            //     },
            //     { id: id++, text: 'Learn Vue', done: true },
            //     { id: id++, text: 'Learn English', done: false }
            // ],
        }
    },

    // async mounted() {
    //     const data = await localStorage.getItem("checkboxes")
    //     data ? this.notes.checkbox = JSON.parse(data) : null
    // },

    methods: {
        addNewNote() {
            if (this.inputValue !== "") {
                this.note.checkboxes.push({ id: id++, text: this.inputValue, done: false })
                this.inputValue = ""

                localStorage.setItem("checkboxes", JSON.stringify(this.note.checkboxes))
            }
        },
        btnDel(checkbox) {
            this.note.checkboxes = this.note.checkboxes.filter((t) => t !== checkbox)

            localStorage.setItem("checkboxes", JSON.stringify(this.note.checkboxes))
        },
    },
    computed: {
        filteredNotes() {
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
            // console.log("input value changed", value)
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