<script setup>
import Cross from "../assets/icon-cross.svg"


const props = defineProps({
    lists: {
        type: Array,
        required: true
    }
})

// listLength = props.lists.length
console.log(props.lists.length)
</script>

<template>
    <div class="px-10 bottom-20">
        <div class="flex relative bottom-[90px] flex-col bg-octavo text-terceary text-3xl rounded-lg my-10">
            <div v-for="list in props.lists" :key="list">
                <div class="flex flex-row px-10 py-8 justify-between">
                    <div class="flex flex-row">
                        <input class="mr-4" type="checkbox">
                        <p>{{ list }}</p>
                    </div>
                    <img class="p-1" :src="Cross" alt="">
                </div>
                <div class="h-px w-full bg-sexto "></div>
            </div>
            <div class="flex flex-row px-10 py-8 justify-between">
                <p>{{ props.lists.length }} items Left</p>
                <p>Clear Completed</p>
            </div>
        </div>
        <div
            class="flex flex-row relative bottom-[90px] bg-octavo text-terceary text-3xl px-10 py-8 rounded-lg justify-center">
            <p class="mx-3">All</p>
            <p class="mx-3">Active</p>
            <p class="mx-3">Complete</p>
        </div>
        <p class="text-center text-terceary text-3xl">Drag and drop to reorder list</p>
    </div>
</template>