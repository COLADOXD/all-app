<script setup>
import Cross from "../assets/icon-cross.svg"
import { defineEmits, ref } from "vue";

const props = defineProps({
    todoList: {
        type: Array,
        required: true
    }
})

let activeTodos = ref([]);
let shouldShowActive = ref(false);
const emit = defineEmits(['todoChanged'])

const changeBolean = (event) => {
    const todoId = event;
    emit('todoChanged', todoId)
}

const clear = (index) => {
    props.todoList.splice(index, 1)
}

const clearAll = () => {
    props.todoList.splice(0, props.todoList.length)
}

const onShowActive = () => {
    shouldShowActive.value = !shouldShowActive.value;
    activeTodos.value.push(...props.todoList.filter(item => item.isCompleted === true))
    if (!shouldShowActive.value) {
        activeTodos.value = []
    }
}
</script>

<template>
    <div class="px-10 bottom-20">
        <div class="flex relative bottom-[110px] flex-col bg-octavo text-terceary text-3xl rounded-lg my-10">
            <div v-if="shouldShowActive">
                <div v-for="(todoItem, index) in activeTodos" :key="todoItem">
                    <div class="flex flex-row px-10 py-8 justify-between">
                        <div class="flex flex-row">
                            <input class="mr-4" type="checkbox" :checked="todoItem.isCompleted"
                                v-on:click="changeBolean(index)">
                            <p>{{ todoItem.message }} {{ todoItem.isCompleted }}</p>
                        </div>
                        <img v-on:click="clear(index)" class="p-1" :src="Cross" alt="">
                    </div>
                    <div class="h-px w-full bg-sexto "></div>
                </div>
            </div>
            <div v-else>
                <div v-for="(item, index) in props.todoList" :key="item">
                    <div class="flex flex-row px-10 py-8 justify-between">
                        <div class="flex flex-row">
                            <input class="mr-4" type="checkbox" :checked="item.isCompleted"
                                v-on:click="changeBolean(index)">
                            <p>{{ item.message }} {{ item.isCompleted }}</p>
                        </div>
                        <img v-on:click="clear(index)" class="p-1" :src="Cross" alt="">
                    </div>
                    <div class="h-px w-full bg-sexto "></div>
                </div>
            </div>

            <div class="flex flex-row px-10 py-8 justify-between">
                <p>{{ props.todoList.length }} items Left</p>
                <p v-on:click="clearAll">Clear Completed</p>
            </div>
        </div>
        <div
            class="flex flex-row relative bottom-[90px] bg-octavo text-terceary text-3xl px-10 py-8 rounded-lg justify-center">
            <p class="mx-3">All</p>
            <p @click="onShowActive" class="mx-3">Active</p>
            <p class="mx-3">Complete</p>
        </div>
        <p class="text-center text-terceary text-3xl">Drag and drop to reorder list</p>
    </div>
</template>