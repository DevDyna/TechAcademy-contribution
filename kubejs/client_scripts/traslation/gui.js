const guiLangs = [
  "en_us",
  "it_it"
];

const guiStrings ={
  //-------------------------------------------// continue button
  "techacademy.continue_button.key": [
    "Continue",
    "Continua",
  ],
  "techacademy.continue_button_hover.key": [
    "Enter in",
    "Entra in"
  ],
}


guiLangs.forEach((lang, langIndex) => {
  ClientEvents.lang(lang, (event) => {
    let text;
    Object.keys(guiStrings).forEach((entry) => {
      if (typeof guiStrings[entry][langIndex] === "")
        text = "MISSING TRANSLATION";
      else
        text = guiStrings[entry][langIndex];
      event.add(entry, text);
    });
  });
})



