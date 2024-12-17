export function useHotelContent() {
    const item = ref({} as any)
    const isLoading = ref(false)
    async function getHotelContent() {
        isLoading.value = true
       try {
            const response = await fetch('https://project-technical-test-api.up.railway.app/property/content?id=9000248394')
            const data = await response.json()
            console.log(data['9000248394'])
            isLoading.value = false
            item.value = data['9000248394']
       } catch (error) {
            isLoading.value = false
            console.error(error)
       }
    }
    return {
        item,
        isLoading,
        getHotelContent
    }
}