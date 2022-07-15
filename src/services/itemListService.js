const items = [
  {
    id: 1,
    title: 'Gibson Les Paul Standard',
    price: 2000,
    url: 'http://images.richtonemusic.co.uk/serial/GIBLPCS00HBNH1__220100104__154__20201021__103.jpg'
  },
  {
    id: 2,
    title: 'Fender Stratocaster Standard',
    price: 1800,
    url: 'https://cdn.ecommercedns.uk/files/2/229692/4/8519694/dsc03282.jpg'
  },
  {
    id: 3,
    title: 'Paul Reed Smith Custom 24',
    price: 3500,
    url: 'https://peachguitars.2dimg.com/114/custom24-08-cobalt-blue_17292e9cc0.jpg'
  }
];

export function getItemList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
}
