/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
  // for (let i = a.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [a[i], a[j]] = [a[j], a[i]];
  // }
  return a;
};

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: "./img/1.jpg",

    gify: "./gif/1.gif",
    open: false
  },
  {
    id: "hatch-2",
    nr: 2,
    img: "./img/2.jpg",
    gify: "https://media0.giphy.com/media/HEVQw704PTR72/200.gif",

    open: false
  },
  {
    id: "hatch-3",
    nr: 3,
    img: "./img/3.jpg",
    gify: "https://media3.giphy.com/media/xUOxeXhZlq0eVhHJde/200.gif",

    open: false
  },
  {
    id: "hatch-4",
    nr: 4,
    img: "./img/4.jpg",
    gify: "https://media1.giphy.com/media/3o6ZtjqdcQfuno2WPK/200.gif",

    open: false
  },
  {
    id: "hatch-5",
    nr: 5,
    img: "./img/5.jpg",
    gify: "https://media2.giphy.com/media/12RNHxCAQ0dYFa/200.gif",

    open: false
  },
  {
    id: "hatch-6",
    nr: 6,
    img: "./img/6.jpg",
    gify: "https://media1.giphy.com/media/W5D9oEAJvOHaE/200.gif",

    open: false
  },
  {
    id: "hatch-7",
    nr: 7,
    img: "./img/7.jpg",
    gify: "https://media3.giphy.com/media/l0MYAetEyGvYiqZ20/200.gif",

    open: false
  },
  {
    id: "hatch-8",
    nr: 8,
    img: "./img/8.jpg",
    gify: "https://media2.giphy.com/media/gL96l3xNovDwLS2QV2/200.gif",

    open: false
  },
  {
    id: "hatch-9",
    nr: 9,
    img: "./img/9.jpg",
    gify: "https://media3.giphy.com/media/5FyoAQNXY6XDO/200.gif",

    open: false
  },
  {
    id: "hatch-10",
    nr: 10,
    img: "./img/10.jpg",
    gify: "https://media1.giphy.com/media/vYUWWJty4qIdW/200.gif",

    open: false
  },
  {
    id: "hatch-11",
    nr: 11,
    img: "./img/11.jpg",
    gify: "https://media3.giphy.com/media/11BEQyXROgnLTG/200.gif",

    open: false
  },
  {
    id: "hatch-12",
    nr: 12,
    img: "./img/12.jpg",
    gify: "https://media0.giphy.com/media/8GbmBOTB9Ely0/200.gif",

    open: false
  },
  {
    id: "hatch-13",
    nr: 13,
    img: "./img/13.jpg",
    gify: "https://media1.giphy.com/media/h5dc7nZVelw2I/200.gif",

    open: false
  },
  {
    id: "hatch-14",
    nr: 14,
    img: "./img/14.jpg",
    gify: "https://media0.giphy.com/media/3o8doXnqbNvG8h6bJe/200.gif",

    open: false
  },
  {
    id: "hatch-15",
    nr: 15,
    img: "./img/15.jpg",
    gify: "https://media0.giphy.com/media/3oEduL72SXHklZ4eWI/200.gif",

    open: false
  },
  {
    id: "hatch-16",
    nr: 16,
    img: "./img/16.jpg",
    gify: "https://media3.giphy.com/media/lBGAoXsXxb0ty/200.gif",

    open: false
  },
  {
    id: "hatch-17",
    nr: 17,
    img: "./img/17.jpg",
    gify: "https://media0.giphy.com/media/3oriO6qJiXajN0TyDu/200.gif",

    open: false
  },
  {
    id: "hatch-18",
    nr: 18,
    img: "./img/18.jpg",
    gify: "https://media0.giphy.com/media/3o6fJ1UDfEBc9BcPss/200.gif",

    open: false
  },
  {
    id: "hatch-19",
    nr: 19,
    img: "./img/19.jpg",
    gify: "https://media2.giphy.com/media/bxJRigovhEPhC/200.gif",

    open: false
  },
  {
    id: "hatch-20",
    nr: 20,
    img: "./img/20.jpg",
    gify: "https://media0.giphy.com/media/11EEXw1EIEoHaE/200.gif",

    open: false
  },
  {
    id: "hatch-21",
    nr: 21,
    img: "./img/21.jpg",
    gify: "https://media3.giphy.com/media/CfCJwsAfjopRS/200.gif",

    open: false
  },
  {
    id: "hatch-22",
    nr: 22,
    img: "./img/22.jpg",
    gify: "https://media1.giphy.com/media/KemCzIB3KHemc/200.gif",

    open: false
  },
  {
    id: "hatch-23",
    nr: 23,
    img: "./img/23.jpg",
    gify: "https://media0.giphy.com/media/gNke2UrUTopOg/200.gif",

    open: false
  },
  {
    id: "hatch-24",
    nr: 24,
    img: "./img/24.jpg",
    gify: " https://media2.giphy.com/media/P2n7d7IhgCPx6/200.gif",

    // https://media2.giphy.com/media/P2n7d7IhgCPx6/200.gif

    open: false
  }
];

export const createCalendar = () => shuffle(hatchArray);
