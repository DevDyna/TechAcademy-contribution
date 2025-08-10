// priority: 9999999

ServerEvents.tags("item", (event) => {
  event.add("c:basalt", "/minecraft:.*basalt/g")

  let charcoalIds = getIdsByTagPre(event, "c:charcoal")
  let cokeIds = getIdsByTagPre(event, "c:coal_coke")

  getIdsByTagPre(event, "c:coal").forEach((id) => {
    if (charcoalIds.some((item) => item == id)) {
      event.add("c:coal/charcoal", String(id));
    } else if (cokeIds.some((item) => item == id)) {
      event.add("c:coal/coal_coke", String(id));
    } else {
      event.add("c:coal/coal", String(id));
    }
  });
});

ServerEvents.tags("block", (event) => {
  event.add("c:basalt", "/minecraft:.*basalt/g")
});

ServerEvents.tags("fluid", (event) => {
  event.add("immersiveengineering:drill_fuel", ["#c:biodiesel", "#c:diesel"])
    
  getIdsByTagPre(event, "c:crude_oil").forEach((id) => {
    event.add("c:oil", String(id));
  });
  getIdsByTagPre(event, "c:oil").forEach((id) => {
    event.add("c:crude_oil", String(id));
  });
  
  // event.add("c:oil", "#c:crude_oil");
  // event.add("c:crude_oil", "#c:oil");
});
