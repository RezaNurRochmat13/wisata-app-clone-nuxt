<script setup lang="ts">
  defineOptions({
    name: 'AppRoomMenuTab',
  })

  const currentTab = ref('tab1');
  const { isLoading, item, getHotelContent  } = useHotelContent();

  onMounted(() => {
    getHotelContent();
  })
</script>

<template>
    <div class="p-6">
      <!-- Tabs Navigation -->
      <div class="border-b border-gray-200">
        <ul
            class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center"
            role="tablist"
        >
            <!-- Tab 1 -->
            <li class="mr-2">
            <button
                @click="currentTab = 'tab1'"
                :class="[
                currentTab === 'tab1'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:border-gray-300',
                ]"
                class="inline-block p-4 border-b-2 rounded-t-lg flex items-center space-x-2"
            >
                <span class="icon">🔖</span> <!-- Replace with an appropriate icon -->
                <span>Deals</span>
            </button>
            </li>

            <!-- Tab 2 -->
            <li class="mr-2">
            <button
                @click="currentTab = 'tab2'"
                :class="[
                currentTab === 'tab2'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:border-gray-300',
                ]"
                class="inline-block p-4 border-b-2 rounded-t-lg flex items-center space-x-2"
            >
                <span class="icon">📷</span> <!-- Replace with an appropriate icon -->
                <span>Photos</span>
            </button>
            </li>

            <!-- Tab 3 -->
            <li class="mr-2">
            <button
                @click="currentTab = 'tab3'"
                :class="[
                currentTab === 'tab3'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:border-gray-300',
                ]"
                class="inline-block p-4 border-b-2 rounded-t-lg flex items-center space-x-2"
            >
                <span class="icon">ℹ️</span> <!-- Replace with an appropriate icon -->
                <span>Info</span>
            </button>
            </li>
        </ul>
     </div>
  
      <!-- Tabs Content -->
      <div class="p-4 bg-white border border-gray-200 rounded-b-lg">
        <!-- Content for Tab 1 -->
        <div v-if="currentTab === 'tab1'">
          <h3 class="text-lg font-semibold mb-2">Room Overview</h3>
          <AppRoomCard />
          <AppRoomCard />
          <AppRoomCard />
        </div>
  
        <!-- Content for Tab 2 -->
        <div v-if="currentTab === 'tab2'">
          <h3 class="text-lg font-semibold mb-2">Photos</h3>
          <AppRoomGallery />
        </div>
  
        <!-- Content for Tab 3 -->
        <div v-if="currentTab === 'tab3'">
          <h3 class="text-lg font-semibold mb-2">Info</h3>
          <AppRoomInfo />
        </div>
      </div>
    </div>
</template>

<style scoped></style>
