let currentState = "start";

let gameData = {
  start: {
    text: "Embrace the path of Earth",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://img.freepik.com/premium-photo/nature39s-embrace-cradles-earth-as-globe-rests-upon-mossy-forest-floora-powerful-symbol-environmental-stewardship_875722-148.jpg",
  },
  start1: {
    text: "In a world where the elements reign supreme, you find yourself at a crossroads. Will you embrace the elemental forces?",
    choices: ["Embark on the Path of Earth", "Embark on the Path of Sky"],
    consequences: ["earthPath", "skyPath"],
    image: "https://miro.medium.com/v2/resize:fit:1400/1*4kuPMgmxAtrvWHLW_apToQ.jpeg",
},

  earthPath: {
    text: "You choose to embrace the Path of Earth, where the ground holds ancient secrets and power awaits. What challenges will you overcome?",
    choices: ["Explore the Forgotten Caverns", "Climb the Towering Peaks"],
    consequences: ["forgottenCaverns", "toweringPeaks"],
    image: "https://img.goodfon.com/original/5824x3264/e/40/zima-sneg-novyi-god-derevnia-rozhdestvo-domiki-house-christm.jpg",
},
skyPath: {
    text: "You opt for the Path of Sky, where the winds carry whispers of hidden knowledge. How will you soar through the skies?",
    choices: ["Navigate the Stormy Atmosphere", "Seek the Floating Islands"],
    consequences: ["stormyAtmosphere", "floatingIslands"],
    image: "https://w.wallhaven.cc/full/l3/wallhaven-l39qxr.jpg",
},
forgottenCaverns: {
    text: "You explore the depths of the Forgotten Caverns. What ancient secrets lie hidden within?",
    choices: ["Unearth Lost Relics", "Confront Subterranean Beasts"],
    consequences: ["lostRelics", "subterraneanBeasts"],
    image: "https://thetravelbible.com/wp-content/uploads/2023/07/k-mitch-hodge-oQ9pECond48-unsplash-scaled.jpg",
},
toweringPeaks: {
    text: "You climb the towering peaks of the mountain range. What challenges await amidst the high altitude?",
    choices: ["Master Elemental Balance", "Discover the Summit Shrine"],
    consequences: ["elementalBalance", "summitShrine"],
    image: "https://i.pinimg.com/736x/c9/7c/cf/c97ccf8ee20248bbbf701cfc164e9816.jpg",
},
stormyAtmosphere: {
    text: "You navigate through the stormy atmosphere. What mysteries are concealed within the tempest?",
    choices: ["Harness Aeromancy", "Find Shelter in the Cloud Cities"],
    consequences: ["aeromancy", "cloudCities"],
    image: "https://img.freepik.com/premium-photo/storm-clouds-rain-shafts-surround-blue-lightning-strike_410516-3392.jpg",
},
floatingIslands: {
    text: "You seek out the elusive floating islands. What wonders lie hidden among the clouds?",
    choices: ["Befriend Skyborne Creatures", "Harvest Precious Aerogems"],
    consequences: ["skyborneCreatures", "aerogemsHarvest"],
    image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Natural_floating_island.jpg",
},
lostRelics: {
    text: "You unearth lost relics within the Forgotten Caverns. Congratulations!",
    choices: ["Ending 1"],
    image: "https://images.saatchiart.com/saatchi/2204671/art/10875653/9938065-ZVMQCCFR-7.jpg",
},
subterraneanBeasts: {
    text: "You confront subterranean beasts dwelling in the depths. Congratulations!",
    choices: ["Ending 2"],
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/subterranean-nocturnal-beast-errol-dsouza.jpg",
},
elementalBalance: {
    text: "You master the elemental balance atop the towering peaks. Congratulations!",
    choices: ["Ending 3"],
    image: "https://www.thesacredscience.com/wp-content/uploads/Elemental-Balance-Earth-and-Air-Within-Us.jpg",
},
summitShrine: {
    text: "You discover the ancient shrine at the summit. Congratulations!",
    choices: ["Ending 4"],
    image: "https://www.japantimes.co.jp/wp-content/uploads/2014/01/p16-adika-kumano-a-20140112.jpg",
},
aeromancy: {
    text: "You harness the power of aeromancy amidst the stormy atmosphere. Congratulations!",
    choices: ["Ending 5"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shelfcloud.jpg/640px-Shelfcloud.jpg",
},
cloudCities: {
    text: "You find shelter and wonders within the cloud cities. Congratulations!",
    choices: ["Ending 6"],
    image: "https://www.asce.org/-/media/asce-images-and-files/publications-and-news/civil-engineering-magazine/images/2021/04-april/cep-fast-forward-4-30-21/80--fast-forward-top.jpg",
},
skyborneCreatures: {
    text: "You befriend skyborne creatures among the floating islands. Congratulations!",
    choices: ["Ending 7"],
    image: "https://web-assets.limewire.media/u/576c5601-f522-4a30-b608-eca1280219e9/b6367096-3256-4655-ae98-5b5ab33ca064.d/post_image_large.jpeg",
},
aerogemsHarvest: {
    text: "You harvest precious aerogems from the floating islands. Congratulations!",
    choices: ["Ending 8"],
    image: "https://i.pinimg.com/736x/36/8a/59/368a598c600150770eee661711e203e6.jpg",
},
};

  
function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();