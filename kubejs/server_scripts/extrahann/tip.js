const idToToltip_extrahann = [
    "extrahnn:upgrade_module_stack",
    "extrahnn:upgrade_speed",
    "extrahnn:upgrade_data_kill",
]

ItemEvents.modifyTooltips(event=>{
    idToToltip_extrahann.forEach((itemID)=>{
        event.add(String(itemID),{ translate: `item.techacademy.extrahann_upgrade.tip1` })
        event.add(String(itemID),{ translate: `item.techacademy.extrahann_upgrade.tip2` })
    })
})