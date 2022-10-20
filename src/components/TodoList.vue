<template>
    <h3>Hi homie</h3>

    <fieldset>
        <legend>Задачи</legend>
        <div class="todo-list">

            <todo-item v-for="note in notes" :note="note" class="todo-list-item">

            </todo-item>

            <a href="">Создать новую заметку</a>
        </div> <!-- todo-list -->
    </fieldset>


</template>


<script>

import TodoItem from "./TodoItem.vue";
import axios from 'axios'

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
            notes: []
        }
    },
}
</script>


<style scoped>

</style>