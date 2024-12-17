<script setup lang="ts">
  defineOptions({
    name: 'AppRoomInfo',
  })
</script>

<template>
    <div class="app-room-info">
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg">
            <!-- About the property -->
            <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">About the property</h2>
            <p class="text-gray-600 mb-4">
                Fairmont Jakarta is centrally located in Jakarta, a 3-minute walk from Plaza Senayan and 13 minutes by foot
                from Gelora Bung Karno Stadium. This luxury hotel is 1.6 mi (2.6 km) from Blok M Square and 3.8 mi (6.2 km)
                from Grand Indonesia.
            </p>
            <p class="text-gray-600 mb-4">
                Enjoy international cuisine at Spectrum, one of the hotel’s 10 restaurants, or stay in and take advantage of
                the 24-hour room service. Snacks are also available at the coffee shop/cafe. Relax with a refreshing drink
                from the poolside bar or one of the 4 bars/lounges. Buffet breakfasts are available daily for a fee.
            </p>
            <p class="text-gray-600">
                Relax at the full-service spa, where you can enjoy massages, body treatments, and facials. Additional features
                include complimentary wireless internet access, concierge services, and gift shops/newsstands.
            </p>
            </section>

            <!-- Languages -->
            <section class="mt-6">
            <h3 class="text-lg font-semibold text-gray-800">Languages</h3>
            <p class="text-gray-600">English, Indonesian, Japanese, Chinese (Mandarin).</p>
            </section>

            <!-- Policies -->
            <section class="mt-6">
            <h3 class="text-lg font-semibold text-gray-800">Policies</h3>
            <ul class="list-disc pl-5 text-gray-600 space-y-1">
                <li><strong>Check-in:</strong> 2:00 PM</li>
                <li><strong>Check-out:</strong> 12:00 PM</li>
            </ul>

            <h4 class="mt-4 font-medium text-gray-700">Additional check-in information:</h4>
            <ul class="list-disc pl-5 text-gray-600 space-y-2">
                <li>Extra-person charges may apply and vary depending on property policy.</li>
                <li>
                Government-issued photo identification and a credit card, debit card, or cash deposit may be required at
                check-in.
                </li>
                <li>Special requests are subject to availability and cannot be guaranteed.</li>
                <li>This property accepts credit cards, debit cards, and cash.</li>
                <li>Safety features include a fire extinguisher, first aid kit, and window guards.</li>
            </ul>
            </section>

            <!-- Important Information -->
            <section class="mt-6">
            <h3 class="text-lg font-semibold text-gray-800">Important information</h3>
            <h4 class="mt-2 font-medium text-gray-700">Optional charges:</h4>
            <ul class="list-disc pl-5 text-gray-600 space-y-2">
                <li>Fee for buffet breakfast: USD 21 for adults and USD 10.5 for children</li>
                <li>Airport shuttle fee: USD 30 per vehicle (roundtrip)</li>
                <li>Valet parking fee: USD 20 per day</li>
            </ul>
            <p class="mt-4 text-gray-600 text-sm">
                *The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change.
            </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
</style>
