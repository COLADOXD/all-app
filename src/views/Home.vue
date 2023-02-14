<script setup>
import ToddleList from "../components/ToddleList.vue"
import Light from "../assets/icon-sun.svg"

const list = ['datos', 'falsos', 'nuevos']
</script>

<template>
    <section class="flex flex-col pb-20 text-white">
        <div class="bg-[url('./assets/bg-mobile-dark.jpg')] bg-no-repeat bg-cover flex px-10 flex-col pt-10">
            <div class="flex flex-row justify-between my-10">
                <p class="font-bold text-5xl tracking-widest">T O D O</p>
                <img class="h-[48px] w-[48px]" :src="Light" alt="">
            </div>
            <div class="flex flex-row bg-octavo items-center text-terceary text-3xl px-10 py-8 rounded-lg mt-10 mb-24">
                <form @submit.prevent="agregarNombre">
                    <input class="mr-4" type="submit">
                    <input class="bg-octavo" type="text" placeholder="Create a new todo..." />
                </form>

            </div>
        </div>
        <ToddleList :mi-list="list" />
    </section>

</template>