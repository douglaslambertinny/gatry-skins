// function Teste() {
//   // var divElement = document.createElement("div")
//   // divElement.id = "divID";
//   // document.body.appendChild(divElement);

//   // What`s a constructor?
//   // A constructor is a function that creates an instance of a class which is typically called an “object”.
//   let number = 10;
//   let numberToString = String(number) + "px";
//   console.log(numberToString);

//   // what is a Properties?
//   // Properties are the values associated with a JavaScript object.
//   console.log(numberToString.length);
// }

const PromotionList = [
  {
    name: "AK-47 | Redline",
    price: 1.5,
    image:
      "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz/360fx360f",
    float: 0.06,
    type: "Rifle",
    weapon: "AK-47",
    rarity: "Classified",
    description:
      "Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. It has been custom painted with a red and black design. Carmen. I found him...- The Oni and The Valkyrie Part 1",
    collection: "The eSports 2013 Collection",
    link: "https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29",
    exterior: "Field-Tested",
    phase: "Phase 2",
    stattrak: false,
    souvenir: false,
    discount: 0,
  },
  {
    name: "Baioneta M9 (★) | Aquecimento de Aço",
    price: 1500.0,
    image:
      "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-SPo9-n0QSyqUo_ZWuhJtDHIQFtaA7SrwDrxuvthJW8uJuYn3Rlu3Yj7WGdwUL86I2c2w/256fx256f",
    float: 0.0688,
    type: "Rifle",
    weapon: "AK-47",
    rarity: "Classified",
    description:
      "Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. It has been custom painted with a red and black design. Carmen. I found him...- The Oni and The Valkyrie Part 1",
    collection: "The eSports 2013 Collection",
    link: "https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29",
    exterior: "Field-Tested",
    phase: "Phase 2",
    stattrak: false,
    souvenir: false,
    discount: 0,
  },
  {
    name: "Faca Karambit (★) | Rosa Negra",
    price: 2500.0,
    image:
      "https://community.akamai.steamstatic.com/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwYHXCTwtytGg8bvC_ezHt8Mmsgy4N5QgGE6yQUvY7S3aTM-KlDGVaNaC6xqoF7pDSNguJAyBo619r1RLQvqqsKYZBzLk6QD/360fx360f",
    float: 0.0802,
    type: "Melee",
    weapon: "Karambit",
    rarity: "Covert",
    description:
      "A classic and deadly folding knife, the Karambit features a curved blade and an ergonomic handle. This particular knife has a black and red design, representing elegance and danger. Embrace the darkness. The Rosa Negra is here to stay.",
    collection: "The Knife Collection",
    link: "https://steamcommunity.com/market/listings/730/Karambit%20%7C%20Crimson%20Web%20%28Minimal%20Wear%29",
    exterior: "Minimal Wear",
    phase: "N/A",
    stattrak: true,
    souvenir: false,
    discount: 0,
  },
  {
    name: "AWP (StatTrak™) | Porte de Elite",
    price: 5000.0,
    image:
      "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJP7c-ikZKSqPv9NLPFqWdQ-sJ0xL-Qoomm2wHk_0A6YWzzd9LHe1I4MFyD_Vi2lO7ogMTptZjPySE37iQ8pSGKluvjCzA/360fx360f",
    float: 0.0531,
    type: "Sniper Rifle",
    weapon: "AWP",
    rarity: "Covert",
    description:
      "The AWP is a powerful sniper rifle known for its deadly accuracy and high damage. This particular AWP is adorned with a dragon design, representing strength and power. Unleash the fury of the Black Dragon.",
    collection: "The Legendary Collection",
    link: "https://steamcommunity.com/market/listings/730/AWP%20%7C%20Dragon%20Lore%20%28Factory%20New%29",
    exterior: "Factory New",
    phase: "N/A",
    stattrak: false,
    souvenir: true,
    discount: 0,
  },
  {
    name: "Desert Eagle | Tempestade do Pôr do Sol 弐",
    price: 1200.0,
    image:
      "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5H7c-im5KGqOT8PLHeqWNU6dNoteXA54vwxgyx_xFuYjj1d4KQelRoMA3TqFDtxOe6jZ7q6szIy3ZgvCFwsHaJmRKpwUYbGuFNcRU/360fx360f",
    float: 0.0976,
    type: "Pistol",
    weapon: "Desert Eagle",
    rarity: "Classified",
    description:
      "The Desert Eagle is a powerful semi-automatic pistol known for its high caliber rounds. This particular Desert Eagle has a silver vengeance design, representing justice and retribution. Seek revenge with the Silver Vengeance.",
    collection: "The Justice Collection",
    link: "https://steamcommunity.com/market/listings/730/Desert%20Eagle%20%7C%20Silver%20%26%20Black%20%28Field-Tested%29",
    exterior: "Field-Tested",
    phase: "Phase 1",
    stattrak: true,
    souvenir: false,
    discount: 0,
  },
  {
    name: "Baioneta M9 (★) | Aquecimento de Aço",
    price: 1500.0,
    image:
      "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-SPo9-n0QSyqUo_ZWuhJtDHIQFtaA7SrwDrxuvthJW8uJuYn3Rlu3Yj7WGdwUL86I2c2w/256fx256f",
    float: 0.0688,
    type: "Rifle",
    weapon: "AK-47",
    rarity: "Classified",
    description:
      "Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. It has been custom painted with a red and black design. Carmen. I found him...- The Oni and The Valkyrie Part 1",
    collection: "The eSports 2013 Collection",
    link: "https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29",
    exterior: "Field-Tested",
    phase: "Phase 2",
    stattrak: false,
    souvenir: false,
    discount: 0,
  },
  {
    name: "Faca Karambit (★) | Rosa Negra",
    price: 2500.0,
    image:
      "https://community.akamai.steamstatic.com/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEIUwYHXCTwtytGg8bvC_ezHt8Mmsgy4N5QgGE6yQUvY7S3aTM-KlDGVaNaC6xqoF7pDSNguJAyBo619r1RLQvqqsKYZBzLk6QD/360fx360f",
    float: 0.0802,
    type: "Melee",
    weapon: "Karambit",
    rarity: "Covert",
    description:
      "A classic and deadly folding knife, the Karambit features a curved blade and an ergonomic handle. This particular knife has a black and red design, representing elegance and danger. Embrace the darkness. The Rosa Negra is here to stay.",
    collection: "The Knife Collection",
    link: "https://steamcommunity.com/market/listings/730/Karambit%20%7C%20Crimson%20Web%20%28Minimal%20Wear%29",
    exterior: "Minimal Wear",
    phase: "N/A",
    stattrak: true,
    souvenir: false,
    discount: 0,
  },
  {
    name: "AWP (StatTrak™) | Porte de Elite",
    price: 5000.0,
    image:
      "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJP7c-ikZKSqPv9NLPFqWdQ-sJ0xL-Qoomm2wHk_0A6YWzzd9LHe1I4MFyD_Vi2lO7ogMTptZjPySE37iQ8pSGKluvjCzA/360fx360f",
    float: 0.0531,
    type: "Sniper Rifle",
    weapon: "AWP",
    rarity: "Covert",
    description:
      "The AWP is a powerful sniper rifle known for its deadly accuracy and high damage. This particular AWP is adorned with a dragon design, representing strength and power. Unleash the fury of the Black Dragon.",
    collection: "The Legendary Collection",
    link: "https://steamcommunity.com/market/listings/730/AWP%20%7C%20Dragon%20Lore%20%28Factory%20New%29",
    exterior: "Factory New",
    phase: "N/A",
    stattrak: false,
    souvenir: true,
    discount: 0,
  },
  {
    name: "Desert Eagle | Tempestade do Pôr do Sol 弐",
    price: 1200.0,
    image:
      "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5H7c-im5KGqOT8PLHeqWNU6dNoteXA54vwxgyx_xFuYjj1d4KQelRoMA3TqFDtxOe6jZ7q6szIy3ZgvCFwsHaJmRKpwUYbGuFNcRU/360fx360f",
    float: 0.0976,
    type: "Pistol",
    weapon: "Desert Eagle",
    rarity: "Classified",
    description:
      "The Desert Eagle is a powerful semi-automatic pistol known for its high caliber rounds. This particular Desert Eagle has a silver vengeance design, representing justice and retribution. Seek revenge with the Silver Vengeance.",
    collection: "The Justice Collection",
    link: "https://steamcommunity.com/market/listings/730/Desert%20Eagle%20%7C%20Silver%20%26%20Black%20%28Field-Tested%29",
    exterior: "Field-Tested",
    phase: "Phase 1",
    stattrak: true,
    souvenir: false,
    discount: 0,
  },
];

function ImageCard(image) {
    let DivElement = document.createElement("div");
    let imgElement = document.createElement("img");

    // Add the class to the div
    DivElement.className = "image-card";
    // Add content to the img element
    imgElement.src = image;
    // Add all elements to the div
    DivElement.appendChild(imgElement);
    return DivElement;
    }

function contentCard(name, price, type, weapon, rarity, description, collection, link, exterior, phase, stattrak, souvenir, discount) {
    let DivElement = document.createElement("div");
    return DivElement;
    }
// DOMContentLoaded to execute the script after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    let index;
    promotion_length = PromotionList.length;
    for(index = 0 ; index < promotion_length; index++) {
        let divElement = document.createElement("div");
        console.log(promotion_length);
        divElement.className = "container-card"
        divElement.id = "card__" + index;
        // Adicionar o novo elemento dentro da classe promotion
        document.querySelector(".promotion").appendChild(divElement);
        // Adicionar o elemento dentro da div
        divElement.appendChild(ImageCard(PromotionList[index].image));
        divElement.appendChild(contentCard(PromotionList[index].name, PromotionList[index].price, PromotionList[index].type, PromotionList[index].weapon, PromotionList[index].rarity, PromotionList[index].description, PromotionList[index].collection, PromotionList[index].link, PromotionList[index].exterior, PromotionList[index].phase, PromotionList[index].stattrak, PromotionList[index].souvenir, PromotionList[index].discount));
    }
});
