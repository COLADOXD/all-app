<script setup>
import ToddleList from "../components/ToddleList.vue"
import Light from "../assets/icon-moon.svg"
import { reactive, ref } from "vue";

const valor = ref('')

const todoList = ref([
    {
        message: '1',
        isCompleted: false,
        id: 0
    },
    {
        message: '2',
        isCompleted: false,
        id: 0
    },
    {
        message: '3',
        isCompleted: true,
        id: 0
    },
    {
        message: '4',
        isCompleted: true,
        id: 0
    },
    {
        message: '5',
        isCompleted: false,
        id: 0
    },

])
const handleSubmit = () => {
    todoList.value.push({ message: valor.value, isCompleted: false });
    valor.value = '';
}

const handleTodoChanged = (todoIndex) => {
    const todoItem = todoList.value[todoIndex]
    todoItem.isCompleted = !todoItem.isCompleted;
};

const handleTodoDeleted = (todoIndex) => {
    todoList.value.splice(todoIndex, 1);
};

const handleTodoTrue = (todoIsCompleted) => {
    // todoList.isCompleted = todoIsCompleted;
    todoList.value = todoList.value.map(obj => ({ ...obj, isCompleted: todoIsCompleted }));
}

const handleTodoClear = () => {
    todoList.value = todoList.value.filter(item => item.isCompleted !== true);
}

</script>

<template>
    <section class="flex flex-col pb-20 text-white bg-quinto">
        <div class="bg-[url('./assets/bg-mobile-dark.jpg')] bg-no-repeat bg-cover flex flex-col pt-10 px-10">
            <div class="flex flex-row justify-between my-10">
                <p class="font-bold text-5xl tracking-widest">T O D O</p>
                <img class="h-[48px] w-[48px]" :src="Light" alt="">
            </div>
            <div class="flex flex-row bg-octavo items-center text-terceary text-3xl px-10 py-8 rounded-lg mt-10 mb-24">
                <input class="mr-4" type="checkbox">
                <input type="text" v-on:keyup.enter="handleSubmit" placeholder="Create a new todo..." v-model="valor"
                    class="bg-transparent border-none w-full appearance-none leading-tight focus:outline-none" />
            </div>
        </div>
        <ToddleList :todoList="todoList" @todo-changed="handleTodoChanged" @todo-deleted="handleTodoDeleted"
            @todo-true="handleTodoTrue" @todo-clear="handleTodoClear" />
    </section>
</template>