<script setup>
import Cross from "../assets/icon-cross.svg"
import { defineEmits, ref, computed } from "vue";

const props = defineProps({
    todoList: {
        type: Array,
        required: true
    }
})

const activeTodos = computed(() => {
    return [
        ...props.todoList.map((todoItem, index) => {
            return {
                message: todoItem.message,
                isCompleted: todoItem.isCompleted,
                parentIndex: index
            };
        })
            .filter(item => item.isCompleted === true)
    ]
});
let shouldShowActive = ref(false);
const emit = defineEmits(['todoChanged', 'todoDeleted', 'todoTrue', 'todoClear'])

const changeBolean = (event) => {
    const todoId = event;
    emit('todoChanged', todoId)
}

const deleteTodo = (todoIndex) => {
    emit('todoDeleted', todoIndex)
}

const clear = (index) => {
    console.log(`on Clear: ${index}`)
    console.log(`on Clear: ${shouldShowActive.value}`)

    if (shouldShowActive.value) {
        const activeTodo = activeTodos.value[index]
        const activeTodoIndex = activeTodo.parentIndex
        deleteTodo(activeTodoIndex)

    } else {
        deleteTodo(index);
    }
}

const onClearComplete = () => {
    // props.todoList.splice(0, props.todoList.length)
    emit('todoClear')
}

const onShowActive = () => {
    shouldShowActive.value = !shouldShowActive.value;
}

const onShowAll = () => {
    shouldShowActive.value = false;
}

const onComplete = () => {
    emit('todoTrue', true);
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
                <p v-on:click="onClearComplete">Clear Completed</p>
            </div>
        </div>
        <div
            class="flex flex-row relative bottom-[90px] bg-octavo text-terceary text-3xl px-10 py-8 rounded-lg justify-center">
            <p @click="onShowAll" class="mx-3">All</p>
            <p @click="onShowActive" class="mx-3">Active</p>
            <p @click="onComplete" class="mx-3">Complete</p>
        </div>
        <p class="text-center text-terceary text-3xl">Drag and drop to reorder list</p>
    </div>
</template>