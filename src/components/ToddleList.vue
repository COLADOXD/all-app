<script setup>
import Cross from "../assets/icon-cross.svg"
import { defineEmits, ref } from "vue";

const props = defineProps({
    lists: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['todoChanged'])

const changeBolean = (event) => {
    const todoId = event;
    emit('todoChanged', todoId)
}

const clear = (indice) => {
    props.lists.splice(indice, 1)
}

const clearAll = () => {
    props.lists.splice(0, props.lists.length)
}

const filtered = ref({})

const displaySelecet = () => {
    filtered.push = props.lists.filter(list => list.isCompleted === true)
    console.log(filtered)
}


</script>

<template>
    <div class="px-10 bottom-20">
        <div class="flex relative bottom-[110px] flex-col bg-octavo text-terceary text-3xl rounded-lg my-10">
            <div v-for="(list, indice) in props.lists" :key="list">
                <div class="flex flex-row px-10 py-8 justify-between">
                    <div class="flex flex-row">
                        <input class="mr-4" type="checkbox" :checked="list.isCompleted" v-on:click="changeBolean(indice)">
                        <p>{{ list.mensage }} {{ list.isCompleted }}</p>
                    </div>
                    <img v-on:click="clear(indice)" class="p-1" :src="Cross" alt="">
                </div>
                <div class="h-px w-full bg-sexto "></div>
            </div>
            <div class="flex flex-row px-10 py-8 justify-between">
                <p>{{ props.lists.length }} items Left</p>
                <p v-on:click="clearAll">Clear Completed</p>
            </div>
        </div>
        <div
            class="flex flex-row relative bottom-[90px] bg-octavo text-terceary text-3xl px-10 py-8 rounded-lg justify-center">
            <p class="mx-3">All</p>
            <p @click="displaySelecet" class="mx-3">Active</p>
            <p class="mx-3">Complete</p>
        </div>
        <p class="text-center text-terceary text-3xl">Drag and drop to reorder list</p>
    </div>
</template>