<script setup lang="ts">
  defineOptions({
    name: 'AppRoomCard',
  })
</script>

<template>
    <div class="p-4 bg-gray-100">
      <!-- Container -->
      <div
        class="w-full max-w-5xl mx-auto bg-white border rounded-lg shadow-md flex flex-col md:flex-row"
      >
        <!-- Left Section: Room Images -->
        <div class="md:w-1/3 w-full relative">
          <img
            src="https://i.travelapi.com/lodging/10000000/9300000/9296600/9296574/c6ddc7ec_b.jpg"
            alt="Room Photo"
            class="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg"
          />
          <!-- "See Photos" Overlay -->
          <button
            class="absolute bottom-3 left-3 bg-white px-3 py-1 text-sm font-medium text-gray-700 rounded shadow-md hover:bg-gray-200"
          >
            See Photos
          </button>
        </div>
  
        <!-- Right Section: Room Details -->
        <div class="md:w-2/3 w-full p-4">
          <!-- Room Title -->
          <div class="mb-2">
            <h2 class="text-lg font-bold text-gray-800">Fairmont, Room, 1 King Bed</h2>
            <p class="text-sm text-gray-500">🛏️ 1 King Bed | 📏 49 m²</p>
          </div>
  
          <!-- Pricing Options -->
          <div class="space-y-4">
            <!-- Option 1 -->
            <div
              class="border-t pt-4 flex justify-between items-center"
            >
              <div>
                <p class="text-sm text-gray-600 flex items-center">
                  <span class="text-green-600 mr-1">✅ Free cancellation</span> before
                  <strong class="ml-1 text-gray-700">01 Mar 2025</strong>
                </p>
                <p class="text-lg font-bold text-gray-800">Rp 3,014,000 / night</p>
                <p class="text-xs text-gray-500">Total · Rp 12,056,000 after tax & fees</p>
              </div>
              <button
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-md"
              >
                Book Now
              </button>
            </div>
  
            <!-- Option 2 -->
            <div
              class="border-t pt-4 flex justify-between items-center"
            >
              <div>
                <p class="text-sm text-gray-600 flex items-center">
                  🍳 <span class="text-green-600 mr-1">Free Breakfast</span> ·
                  <span class="text-green-600 ml-1">✅ Free cancellation</span> before
                  <strong class="ml-1 text-gray-700">01 Mar 2025</strong>
                </p>
                <p class="text-lg font-bold text-gray-800">Rp 3,565,800 / night</p>
                <p class="text-xs text-gray-500">Total · Rp 14,263,200 after tax & fees</p>
              </div>
              <button
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<style scoped>
  /* Optional Scoped Styles */
</style>
  