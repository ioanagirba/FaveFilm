using Microsoft.EntityFrameworkCore;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;
using MovieRatingAppBE.Persistence.Data;

namespace MovieRatingAppBE.Persistence.Repositories;

public class MovieRepository : IMovieRepository
{
    private MovieRatingContext _context;

    public MovieRepository(MovieRatingContext context)
    {
        _context = context;
    }
    public IReadOnlyList<Movie> Get()
    {
        return _context.Movies.ToList();
    }

    public Movie GetById(int id)
    {
        return _context.Movies.Find(id);
    }

    public IReadOnlyList<Movie> GetByGenre(string genre)
    {
        return _context.Movies.ToList().FindAll(u => u.Genres.Contains(genre));
    }
}