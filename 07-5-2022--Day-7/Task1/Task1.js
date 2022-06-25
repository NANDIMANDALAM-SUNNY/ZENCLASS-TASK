// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)


// 1.a Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
    constructor() {
        this.title = 'Spacecart',
        this.studio = 'Paramount',
        this.rating = 'PG';
    }
}

const person = new Movie();

// 1.b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided. 
class Movie1{
    constructor( rating= 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const person1 = new Movie1();

// 1.c)
// Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class getPG{
    constructor(rating){
        this.rating = rating;
    }
    getPG(movie){
        return movie.filter(movie => movie.rating === 'PG');
    }
}

// 1.d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie3{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie3 = new Movie3('Casino Royale', 'Eon Productions', 'PG-13');




