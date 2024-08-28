import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useChartsStore = defineStore('charts', () => {
    const years = ref(['2018', '2019', '2020', '2021', '2022', '2023', '2024'])

    const dresdenMiddle = ref([1370, 1329, 1434, 1350, 1370, 1475, 1520])
    const dresdenNorth = ref([1260, 1340, 1390, 1330, 1420, 1460, 1490])

    const valuesFirstPlace = ref([510, 618, 590, 580, 670, 710, 730])
    const nameFirstPlace = ref(["Laurentius", "Dresden Ost", "Dresden Ost", "Laurentius", "Blasewitz", "Blasewitz", "Weißer Hirsch"])

    const valuesSecondPlace = ref([470, 617, 550, 530, 610, 618, 630])
    const nameSecondPlace = ref(["Dresden Ost", "Weißer Hirsch", "Blasewitz", "Dresden Ost", "Laurentius", "Weißer Hirsch", "Blasewitz"])

    const valuesThirdPlace = ref([390, 603, 500, 520, 580, 608, 630])
    const nameThirdPlace = ref(["Weißer Hirsch", "Blasewitz", "Laurentius", "Weißer Hirsch", "Weißer Hirsch", "Dresden Ost", "Laurentius"])

    return {
        years,
        dresdenMiddle,
        dresdenNorth,
        valuesFirstPlace,
        valuesSecondPlace,
        valuesThirdPlace,
        nameFirstPlace,
        nameSecondPlace,
        nameThirdPlace
    }
})
