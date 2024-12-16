<script setup lang="ts">
  defineOptions({
    name: 'AppHotelCard',
  })
</script>

<template>
    <div class="flex justify-center items-center w-full mx-auto p-4  bg-white">
      <!-- Circular Image -->
      <div class="flex-shrink-0">
        <img
          class="w-32 h-32 rounded-full object-cover"
          src="https://i.travelapi.com/lodging/10000000/9300000/9296600/9296574/cbfc3f48_z.jpg"
          alt="Fairmont Jakarta"
        />
      </div>
  
      <!-- Hotel Details -->
      <div class="ml-6 flex-1">
        <!-- Hotel Name -->
        <h2 class="text-2xl font-bold text-gray-800 flex items-center">
          Fairmont Jakarta
          <!-- Star Ratings -->
          <div class="ml-2 flex">
            <template v-for="n in 5" :key="n">
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 3.317a1 1 0 011.902 0l1.152 3.553a1 1 0 00.95.69h3.735a1 1 0 01.592 1.81l-3.017 2.194a1 1 0 00-.364 1.118l1.152 3.553a1 1 0 01-1.538 1.118l-3.017-2.194a1 1 0 00-1.176 0l-3.017 2.194a1 1 0 01-1.538-1.118l1.152-3.553a1 1 0 00-.364-1.118L2.62 9.37a1 1 0 01.592-1.81h3.735a1 1 0 00.95-.69L9.05 3.317z"
                ></path>
              </svg>
            </template>
          </div>
        </h2>
  
        <!-- Hotel Description -->
        <p class="text-sm text-gray-500 mt-1">Hotel</p>
        <p class="text-gray-600 mt-2">
          Jl. Asia Afrika No.8, Gelora Bung Karno, Jakarta, Indonesia 10270
        </p>
  
        <!-- Reviews -->
        <div class="flex items-center mt-4">
          <span
            class="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-purple-600 rounded-full"
          >
            92
          </span>
          <span class="ml-2 text-sm text-gray-600">Excellent · 254 reviews</span>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
