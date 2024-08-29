// Fiyatı almak için
const getPrice = (item) => item.price;

// Fiyatlara göre sıralama
const sortLowHigh = (a, b) => a.price - b.price;
const sortHighLow = (a, b) => b.price - a.price;

// Alfabetik sıralama
const sortAlphabetically = (a, b) => a.title.localeCompare(b.title);

// Kategorileri çeviren fonksiyon
const translateCategory = (category) => {
  const translations = {
    electronics: 'Elektronik',
    jewelery: 'Mücevherat',
    men_clothing: 'Erkek Giyim',
    women_clothing: 'Kadın Giyim',
    // Diğer çeviriler...
  };

  return translations[category] || category;
};

export { getPrice, sortLowHigh, sortHighLow, sortAlphabetically, translateCategory };
