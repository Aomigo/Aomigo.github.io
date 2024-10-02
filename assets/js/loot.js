function loot(Expedition) {
    damage(Expedition)
    if (Expedition.textContent.includes("Cave")) CaveLoot()
    if (Expedition.textContent.includes("Meadow")) MeadowLoot()
    if (Expedition.textContent.includes("Raid")) RaidLoot()
    if (Expedition.textContent.includes("Underwater")) UnderwaterLoot()

    function CaveLoot() {
        let result = Math.floor(Math.random() * (4 - 1) + 1)
        let loot = []
        for (let i = 0; i < result; i++) {
            loot.push(ingredients[Math.floor(Math.random() * (12 - 0) + 0)])
        }
        console.log(result)
        console.log(loot)
        artefacts()
        resultLoot(loot)
    }

    function MeadowLoot() {
        let result = Math.floor(Math.random() * (3 - 0) + 0)
        let loot = []
        for (let i = 0; i < result; i++) {
            loot.push(ingredients[Math.floor(Math.random() * (12 - 0) + 0)])
        }
        console.log(result)
        console.log(loot)
        artefacts()
        resultLoot(loot)
    }

    function RaidLoot() {
        let result = Math.floor(Math.random() * (7 - 2) + 1)
        let loot = []
        for (let i = 0; i < result; i++) {
            loot.push(ingredients[Math.floor(Math.random() * (12 - 0) + 0)])
        }
        console.log(result)
        console.log(loot)
        artefacts()
        resultLoot(loot)
    }

    function UnderwaterLoot() {
        let loot = ["Fish", "Water"]

        console.log(loot)
        resultLoot(loot)
    }
}

function damage(Expedition) {
    if (Expedition.textContent.includes("Cave")) CaveDamage()
    if (Expedition.textContent.includes("Meadow")) MeadowDamage()
    if (Expedition.textContent.includes("Raid")) RaidDamage()
    if (Expedition.textContent.includes("Underwater")) UnderwaterDamage()

    function CaveDamage() {
        TotalHealth -= Math.floor(Math.random() * (20 - 1) + 1)
        TotalMental -= Math.floor(Math.random() * (30 - 5) + 5)
        TotalExhaustion -= Math.floor(Math.random() * (15 - 10) + 10)
        TotalHunger -= Math.floor(Math.random() * (15 - 10) + 10)
        damageDeduction()

    }

    function MeadowDamage() {
        TotalHealth -= Math.floor(Math.random() * (10 - 0) + 0)
        TotalExhaustion -= Math.floor(Math.random() * (20 - 0) + 0)
        TotalHapiness += Math.floor(Math.random() * (20 - 10) + 10)
        damageDeduction()
    }

    function RaidDamage() {
        TotalHealth -= Math.floor(Math.random() * (40 - 10) + 10)
        TotalMental -= 10
        TotalExhaustion -= Math.floor(Math.random() * (40 - 10) + 10)
        TotalHunger -= Math.floor(Math.random() * (30 - 15) + 10)
        damageDeduction()
    }

    function UnderwaterDamage() {
        TotalMental -= Math.floor(Math.random() * (5 - 0) + 0)
        TotalExhaustion -= 10
        TotalHapiness += Math.floor(Math.random() * (20 - 10) + 10)
        TotalHunger -= Math.floor(Math.random() * (10 - 5) + 5)
        damageDeduction()
    }

    function damageDeduction() {
        //health NEED TO ADD IF U GET BELOW 0 THE CHARA DOES NOT COME BACK
        if (TotalHealth < 0) {
            TotalHealth = 0
            deathAnimation()
        }
        healthBar.style.width = TotalHealth + "%"
        setTimeout(() => {
            DmgHealth()
        }, 700)

        function DmgHealth() {
            healthWrapper.style.width = TotalHealth + "%"
        }
        if (TotalHealth == 0) {
            deathWarrior()
        }
        //mental
        if (TotalMental < 0) TotalMental = 0
        MentalBar.style.width = TotalMental + "%"
        setTimeout(() => {
            DmgMental()
        }, 700)

        function DmgMental() {
            mentalWrapper.style.width = TotalMental + "%"
        }
        //exhaustion
        if (TotalExhaustion < 0) TotalExhaustion = 0
        ExhaustionBar.style.width = TotalExhaustion + "%"
        setTimeout(() => {
            DmgExhaustion()
        }, 700)

        function DmgExhaustion() {
            exhaustionWrapper.style.width = TotalExhaustion + "%"
        }
        //happiness
        if (TotalHapiness > 100) TotalHapiness = 100
        hapinessWrapper.style.width = TotalHapiness + "%"
        setTimeout(() => {
            HealHapiness()
        }, 500)

        function HealHapiness() {
            HapinessBar.style.width = TotalHapiness + "%"
        }
        //hunger
        if (TotalHunger < 0) TotalHunger = 0
        HungerBar.style.width = TotalHunger + "%"
        setTimeout(() => {
            DmgHunger()
        }, 700)

        function DmgHunger() {
            hungerWrapper.style.width = TotalHunger + "%"
        }
    }
}

function resultLoot(loot) {
    if (loot.length == 0) LootScrollerResults.innerHTML = "The looting was... lets not talk about that."
    if (loot.length <= 2 && loot !== 0) LootScrollerResults.innerHTML = "The looting was not very good."
    if (loot.length == 3) LootScrollerResults.innerHTML = "The looting was successful."
    if (loot.length > 3) LootScrollerResults.innerHTML = "The looting was excellent !"
    let OldLoot = document.querySelectorAll('.looting')
    OldLoot.forEach((text) => {
        text.remove()
    })
    for (let i = 0; i < loot.length; i++) {
        let looting = document.createElement('p')
        looting.classList.add('looting')
        looting.textContent = loot[i]
        LootScrollerLoot.appendChild(looting)
    }
    addLoot()
}

function artefacts() {
    let results = Math.floor(Math.random() * (100 - 1) + 1)
    if (results == 1) {
        artefactFound()
    }

    function artefactFound() {
        let artefactJustFound = Artefacts[Math.floor(Math.random() * (5 - 0) + 0)]
        console.log("you found " + artefactJustFound + "...")
    }
}

function addLoot() {
    console.log('addloot')
    //here add gained loot to food index
    OldLoot = document.querySelectorAll('.looting')
    OldLoot.forEach((loot) => {
        console.log(loot.textContent)
        let food = document.createElement("p")
        food.classList.add('sub-sliders-food', 'sliders')
        food.textContent = loot.textContent
        SliderFood.appendChild(food)
        SubSliderFood = document.querySelectorAll('.sub-sliders-food')
        feeding()
    })

}

LootscrollerButton.addEventListener('click', function () {
    if (LootScroller.classList.contains('hidden')) {
        LootScrollerWrapper.classList.add('appear')
        LootScrollerWrapper.classList.remove('dissapear')
        LootScroller.classList.remove('hidden')
    } else {
        LootScrollerWrapper.classList.remove('appear')
        LootScrollerWrapper.classList.add('dissapear')
        setTimeout(() => {
            LootScroller.classList.add('hidden')
        }, 500)
    }
})