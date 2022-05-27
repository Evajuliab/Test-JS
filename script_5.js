const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  function rented () {

      books.forEach((name) => {
      if (name.rented > 0);
          console.log ("oui tous les livres été ont été empruntés au moins 1 fois");
    })    
  };
  rented ()


  function rentedMost () {
    const rents = []

    books.forEach((book) => {
        rents.push(book.rented);
    });

    var maxValue = Math.max.apply(Math, rents);//fonction trouvée sur internet
    books.forEach((book) => {
		if (book.rented == maxValue) {
			console.log(`le plus emprunté est : ${book.title}`);
		}
	});
}


rentedMost ()

function rentedLess() {
    const rents = []
    books.forEach((book) => {
        rents.push(book.rented);
    });

    var minValue = Math.min.apply(Math, rents); //fonction trouvée sur internet
    books.forEach((book) => {
		if (book.rented == minValue) {
			console.log(`le moins emprunté : ${book.title}`);
		}
	});
}
rentedLess ()


function find(id) {
    
        books.forEach((book) => {
            if (book.id === id) {
                console.log(`le livre avec l'id ${id} est ${book.title}`);
            }
        });
    }

find (873495)


function suppr() {
    
        delete books[0] // supprime le livre en position 0
       
        console.log(books);  
}
suppr()




function sort() {

    const arr = [];
	books.forEach((name) => {
		arr.push(name.title);
	});
	arr.sort();
	console.log(arr);
}
sort();





