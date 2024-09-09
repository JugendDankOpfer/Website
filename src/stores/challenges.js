import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useChallengeStore = defineStore('challenges', () => {
    const challenges = ref(
        [
            {
                icon: "/src/assets/symbols/trashcan.svg",
                title: "Müll sammeln",
                active: true,
                current: false,
                form: [
                    {
                        "title": "Wie viel Müll habt ihr gesammelt (in kg)",
                        "type": "text"
                    },
                    {
                        "title": "Laded ein Bild vom Müllsammeln hoch",
                        "type": "image"
                    },
                    {
                        "title": "Ladet ein Bild von eurem gesammeltem Müll hoch",
                        "type": "image"
                    }
                ]
            },
            {
                icon: "/src/assets/symbols/cake.svg",
                title: "Einen Bangladesischen Kuchen Backen",
                active: true,
                current: true
            },
            {
                icon: "/src/assets/symbols/lock.svg",
                title: "Kommt am 05.10.2024",
                active: false,
                current: false
            },
            {
                icon: "/src/assets/symbols/lock.svg",
                title: "Kommt am 17.10.2024",
                active: false,
                current: false
            },
            {
                icon: "/src/assets/symbols/lock.svg",
                title: "Kommt am 28.10.2024",
                active: false,
                current: false
            },
            {
                icon: "/src/assets/symbols/lock.svg",
                title: "Kommt am 04.11.2024",
                active: false,
                current: false
            },
            {
                icon: "/src/assets/symbols/lock.svg",
                title: "Kommt am 16.11.2024",
                active: false,
                current: false
            }
        ]
    )

    return {challenges}
})
