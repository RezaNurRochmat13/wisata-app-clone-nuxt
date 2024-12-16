<script setup lang="ts">
defineOptions({
    name: 'Navbar'
})
</script>

<template>
    <div class="navbar">
        <nav class="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <!-- Left Section: Logo -->
            <div class="flex items-center">
            <img src="@/assets/logo.png" alt="Logo" class="h-8 w-auto mr-2" />
            <span class="text-xl font-semibold text-gray-900">Wisata App</span>
            </div>

            <!-- Center Section: Search bar -->
            <div class="flex items-center w-1/3">
            <input
                type="text"
                placeholder="Search Fairmont Jakarta · 4 - 8 Mar 2025"
                class="w-full px-3 py-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            </div>

            <!-- Right Section: Sign-in Button -->
            <div>
            <button
                class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
                Sign in
            </button>
            </div>
        </nav>
    </div>
</template>

<style scoped></style>
