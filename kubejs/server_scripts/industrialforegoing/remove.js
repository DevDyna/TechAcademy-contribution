const IF_deny = ["industrialforegoing:transporter"];

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  IF_deny.forEach((itemId) => event.remove(itemId));
});
