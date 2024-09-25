using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Contracts;

public interface IMovieRepository
{
    IReadOnlyList<Movie> Get();
    Movie GetById(int id);
    IReadOnlyList<Movie> GetByGenre(string genre);
}