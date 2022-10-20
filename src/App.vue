<template>

    <todo-list></todo-list>
<!--    <todo-item></todo-item>-->

<!--    <div class="card" v-cloak>-->
<!--        <h1>{{ title }}: <span :style="{-->
<!--      color: inputValue.length < 2 ? 'darkred' : 'darkblue',-->
<!--      fontSize: inputValue.length < 2 ? '10px' : '25px'-->
<!--    }">{{ (counter + 2) * 1000 }}</span></h1>-->

<!--        <div>-->
<!--            <span>Click on "+" and add to Crips</span>-->
<!--            <button @click="add" class="btn primary">+</button>-->
<!--            <br>-->
<!--            <span>Click on "-" and kill the Crips</span>-->
<!--            <button @click="subtract" class="btn danger">-</button>-->
<!--            <br>-->
<!--            <input type="text"-->
<!--                   v-model="inputValue"-->
<!--                   @keypress.enter="addNewNote"-->
<!--            >-->
<!--            <button class="btn" @click="addNewNote">Добавить</button>-->
<!--        </div>-->
<!--    </div>-->

<!--    <ul class="list" v-if="notes.length !== 0">-->
<!--        <li class="list-item" v-for="(note, idx) in notes">-->
<!--            <span :class="['green', {'yellow' : note.length > 5}]">({{ idx + 1 }}) {{ note.toUpperCase() }}</span>-->
<!--            <button @click="btnDel(idx)" class="btn danger">Удалить</button>-->
<!--        </li>-->
<!--        <li>-->
<!--            <strong>Общще кол-во: {{ notes.length }}</strong> | Удвоенное: {{ doubleCountComputed }}-->
<!--        </li>-->
<!--    </ul>-->

<!--    <div v-else>Заметок пока нет.</div>-->

    <!--    <ul v-if="items.length">-->
    <!--        <li-->
    <!--            v-for="(item, i) in items" :key="item">-->
    <!--            <span @click="stop">{{ item }}</span>&nbsp;-->
    <!--            <input type="text" @click="stop">&nbsp;-->
    <!--            <button @click="items.splice(i, 1)" class="btn danger">{{ item = 'Удалить' }}</button>-->
    <!--        </li>-->
    <!--    </ul>-->
    <!--    <h3 v-show="items.length === 0">Элементов нет</h3>-->

    <!--    <div class="form-control">-->
    <!--        <input type="text" @keydown.enter="addItem" ref="myInput">-->
    <!--        <button class="btn green" @click="addItem">Добавить</button>-->
    <!--    </div>-->


</template>


<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
    components: {TodoList, TodoItem},


//     data() {
//         return {
//             counter: 2,
//             title: "Crips is",
//             inputValue: "",
//             notes: ["Заметка 1", "Заметка 2"],
//             person: {
//                 fName: "John",
//                 lName: "Sheridan",
//                 age: 17
//             },
//             items: [
//                 1, 2,
//             ]
//         }
//     },
//     methods: {
//         add() {
//             this.counter++
//         },
//         subtract() {
//             this.counter--
//         },
//         // inputChangeHandler(event) {
//         //   this.inputValue = event.target.value
//         // },
//         addNewNote() {
//             if (this.inputValue !== "") {
//                 this.notes.push(this.inputValue)
//                 this.inputValue = ""
//             }
//         },
//         addItem() {
//             this.items.unshift(this.$refs.myInput.value)
//
//             this.$refs.myInput.value = ''
//         },
//         doubleCount() {
//             return this.notes.length * 2
//         },
//         toUpperCase(item) {
//             return item.toUpperCase()
//         },
//         btnDel(idx) {
//             this.notes.splice(idx, 1)
//         },
//         stop(event) {
//             event.stopPropagation()
//         }
//     },
//     computed: {
//         doubleCountComputed() {
//             console.log("doubleCountComputed")
//             return this.notes.length * 2
//         },
//         evenItems() {
//             return this.items.filter(i => i % 2 === 0)
//         }
//     },
//     watch: {
//         inputValue(value) {
//             if (value.length > 10) {
//                 this.inputValue = ""
//             }
//             // console.log("input value changed", value)
//         }
//     }
}
</script>


<style>
body {
    background: black;
    color: white;
    text-align: center;
}

ul, li {
    list-style: none;
}

input {
    border-radius: 50px;
}

.btn {
    margin: 10px;
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    outline: 0;
    border: 0;

    border-radius: 50px;

    transition: .2s linear;
}



.btn .del:hover {
    background: darkred;
}

.btn:hover {
    background: blue;
}

.btn.danger:hover {
    background: darkred;
}

/*===================Clases=====================*/

.green:hover {
    background: darkgreen;
}

.yellow {
    color: yellow;
}

[v-cloak] {
    display: none;
}

.start {
    text-align: start;
}

.done {
    text-decoration: line-through;
}

</style>
