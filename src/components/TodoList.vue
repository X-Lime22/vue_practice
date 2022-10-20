<template>
    <h3>Hi homie</h3>


    <fieldset>
        <legend>Задачи</legend>
        <div class="todo-list">



            <todo-item v-for="note in notes" :note="note" class="todo-list-item">
<!--                <h2>Заметка 1</h2>-->
<!--                <TodoItem/>-->
            </todo-item>


<!--            <div class="todo-list-item">-->
<!--                <h2>Заметка 2</h2>-->
<!--                <TodoItem/>-->
<!--            </div>-->

            <a href="">Создать новую заметку</a>
        </div> <!-- todo-list -->

    </fieldset>


</template>


<script>

import TodoItem from "./TodoItem.vue";
import axios from 'axios'

let id = 0
let response

export default {
    components: {TodoItem},
    name: "TodoList",
    mounted() {
        axios
            .get('http://localhost:3001/notes')
            .then(response => this.notes = response.data)
    },


    data() {
        return {
            inputValue: "",
            hideCompleted: false,
            notes: [],

            // notes: [
            //     {
            //         name: "test",
            //         checkboxes: [
            //             {id: id++, text: "Learn Vue", done: true},
            //             {id: id++, text: "Learn English", done: true}
            //         ]
            //     },
            //     {
            //         name: "test2",
            //         checkboxes: [
            //             {id: id++, text: "Learn Vue", done: true}
            //         ]
            //     }
            // ],

            person: {
                fName: "John",
                lName: "Sheridan",
                age: 17
            },
            items: []
        }
    },

    methods: {
        addItem() {
            if (this.$refs.myInput.value !== "") {
                this.items.unshift(this.$refs.myInput.value)
            }

            this.$refs.myInput.value = ''
        },
        doubleCount() {
            return this.notes.length * 2
        },
        stop(event) {
            event.stopPropagation()
        },
        // addNewNote() {
        //     if (this.inputValue !== "") {
        //         this.notes.push({ id: id++, text: this.inputValue, done: false })
        //         this.inputValue = ""
        //
        //         localStorage.setItem("notes", JSON.stringify(this.notes))
        //     }
        // },
        // btnDel(note) {
        //     this.notes = this.notes.filter((t) => t !== note)
        //
        //     localStorage.setItem("notes", JSON.stringify(this.notes))
        // },
    },
    computed: {
        doubleCountComputed() {
            // console.log("doubleCountComputed")
            return this.notes.length * 2
        },

        // filteredNotes() {
        //     return this.hideCompleted
        //         ? this.notes.filter((t) => !t.done)
        //         : this.notes
        // }
    },
}
</script>


<style scoped>

</style>