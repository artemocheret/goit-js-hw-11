const movie = {
  title: "Harry Potter",
  director: "Joanne Rowling",
  year: 2001,
  rating: 5,

  isHighlyRated() {
    return this.rating > 8;
  },
};

console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);

if (movie.isHighlyRated()) {
  console.log("Фільм має високий рейтинг (вище 8)");
} else {
  console.log("Рейтинг фільму 8 або нижче");
}
