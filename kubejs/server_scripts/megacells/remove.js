const megacell_deny = ['megacells:mega_emc_interface', 'megacells:cable_mega_emc_interface'];

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  megacell_deny.forEach((itemId) => event.remove(itemId));
});
