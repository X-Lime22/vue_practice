<template>
    <h3>Hi homie</h3>

    <fieldset>
        <legend>Задачи</legend>
        <div class="todo-list">

            <todo-item @postDeleteNote="postDeleteNote" v-for="(note, index) in notes" :note="note" class="todo-list-item">
                    {{ index }}
            </todo-item>

            <button @click="postAddNote">Создать заметку</button>
        </div> <!-- todo-list -->
    </fieldset>


</template>


<script>

import TodoItem from "./TodoItem.vue";
import axios from 'axios'

export default {
    components: {TodoItem},
    name: "TodoList",
    mounted() {
        axios
            .get('http://localhost:3001/notes?_embed=checkboxes')
            .then(response => this.notes = response.data)
    },

    data() {
        return {
            inputValue: "",
            hideCompleted: false,
            notes: [],
            DateCurrentId: null
        }
    },

    methods: {
        async postAddNote() {
            //деструктуризация
            const {data} = await axios
                .post('http://localhost:3001/notes', {
                name: `test${this.notes.length}`
            })

            data.checkboxes = []

            this.notes.push(data)
        },

        postDeleteNote(id) {
            axios
                .delete(`http://localhost:3001/notes/${id}`)
        }
    },
}
</script>


<style scoped>

</style>