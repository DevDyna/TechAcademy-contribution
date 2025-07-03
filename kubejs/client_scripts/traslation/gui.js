const guiLangs = {
  _key: [
    //-------------------------------------------// buttons
    "techacademy.continue_button.key",
    "techacademy.continue_button_hover.key"
  ],
  en_us: [
    //-------------------------------------------// buttons
    "Continue",
    "Enter in",
  ],
  it_it: [
    //-------------------------------------------// buttons
    "Continua",
    "Entra in"
  ],
};

//Convert all _key traslation keys on virtual lang files to reduce multiple json
Object.keys(guiLangs).forEach((entry) => {
  if (entry == "_key") return;
  ClientEvents.lang(entry, (event) => {
    guiLangs._key.forEach((key, index) => {
      event.add(key, guiLangs[entry][index]);
    });
  });
});