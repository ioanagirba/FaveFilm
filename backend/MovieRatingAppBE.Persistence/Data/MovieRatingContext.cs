using Microsoft.EntityFrameworkCore;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Persistence.Data;

public class MovieRatingContext : DbContext
{
    public MovieRatingContext(DbContextOptions<MovieRatingContext> options ) : base(options)
    {
        
    }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Review> Reviews { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Movie>().HasData(
            new Movie
            {
                Id = 1, 
                Title = "In Time",
                Description = "In a future where people stop aging at 25, but are engineered to live only one more year, having the means to buy your way out of the situation is a shot at immortal youth. Here, Will Salas finds himself accused of murder and on the run with a hostage - a connection that becomes an important part of the way against the system.",
                ImagesUrls = ["https://m.media-amazon.com/images/M/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg@@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMTU4NTY2NDU3Ml5BMl5BanBnXkFtZTcwMjQ1MTE5Ng@@._V1_.jpg","https://static.cinemagia.ro/img/db/movie/55/89/90/in-time-690990l.jpg"],
                Genres = ["Science Fiction","Thriller","Action"],
                Director = "Andrew Niccol",
                Cast=["Justin Timberlake","Cillian Murphy","Amanda Seyfried"]
            },
            new Movie 
            { 
                Id = 2, 
                Title = "The Pianist",
                Description = "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
                ImagesUrls = ["https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg","https://m.media-amazon.com/images/M/MV5BMTMxMTUzOTYxNF5BMl5BanBnXkFtZTcwNDYxMTIyMw@@._V1_.jpg","https://filmforum.org/do-not-enter-or-modify-or-erase/client-uploads/_1000w/THE_PIANIST_slideshow_3.png"],
                Genres = ["Biography","Drama","Music"],
                Director = "Roman Polanski",
                Cast=["Adrien Brody","Thomas Kretschmann","Frank Finlay"]
                
            },
            new Movie
            {
                Id = 3, 
                Title = "Society of the Snow",
                Description = "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
                ImagesUrls = ["https://elranchito.es/wp-content/uploads/2023/12/MV5BYWQ0Y2MxODgtOWI0ZC00MWIwLWIyYzEtN2FhNWQ1MGQ3MDBhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg","https://variety.com/wp-content/uploads/2023/07/Society-of-the-Snow.jpg?w=1000","https://m.media-amazon.com/images/M/MV5BZWQwYTljYWEtOThjZS00NmI5LWFmZTAtNDcyZjAwY2MxNjRjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg"],
                Genres = ["Adventure","Biography","Drama"],
                Director = "J.A. Bayona",
                Cast=["Enzo Vogrincic","Agustín Pardella","Matías Recalt"]
            },
            new Movie
            {
                Id = 4, 
                Title = "Spirited Away",
                Description = "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
                ImagesUrls = ["https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMjE1Mjk2MTcwNV5BMl5BanBnXkFtZTgwNTc1MTMyMDE@._V1_.jpg","https://www.fortressofsolitude.co.za/wp-content/uploads/2021/04/spirited-away-no-face.jpg"],
                Genres = ["Animation","Adventure","Family"],
                Director = "Hayao Miyazaki",
                Cast=["Miyu Irino","Rumi Hiiragi","Mari Natsuki"]
            },
            new Movie
            {
                Id = 5, 
                Title = "Barbie",
                Description = "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
                ImagesUrls = ["https://i.ebayimg.com/images/g/O3MAAOSwiZ9k0HfD/s-l1600.jpg","https://www.barbie-themovie.com/images/share.jpg","https://hips.hearstapps.com/hmg-prod/images/barbie-movie-film-64b9625d145c1.jpeg"],
                Genres = ["Adventure","Comedy","Fantasy"],
                Director = "Greta Gerwig",
                Cast=["Margot Robbie","Ryan Gosling","Simu Liu"]
            },
            new Movie
            {
                Id = 6, 
                Title = "Interstellar",
                Description = "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
                ImagesUrls = ["https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","https://www.denofgeek.com/wp-content/uploads/2022/02/spaceship-and-black-hole-in-Interstellar.jpeg?fit=1800%2C1125","https://cdn.mos.cms.futurecdn.net/LVoJnXBbUH6xx9EkfgVnc5.jpg"],
                Genres = ["Adventure","Drama","Science Fiction"],
                Director = "Christopher Nolan",
                Cast=["Matthew McConaughey","Anne Hathaway","Jessica Chastain"]
            }
            
        );
        modelBuilder.Entity<User>().HasData(new User
        {
            Id = 1,
            FirstName = "Robert",
            LastName = "Domokos",
            Email = "my@email.com",
            Password = "pass",
            ReviewsList = [],
            WatchedList = []
        });
    }
}