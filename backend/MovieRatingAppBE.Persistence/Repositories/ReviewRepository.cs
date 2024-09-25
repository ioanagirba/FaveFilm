using Microsoft.EntityFrameworkCore;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;
using MovieRatingAppBE.Persistence.Data;

namespace MovieRatingAppBE.Persistence.Repositories;

public class ReviewRepository : IReviewRepository
{
    private MovieRatingContext _context;

    public ReviewRepository(MovieRatingContext context)
    {
        _context = context;
    }
    public IReadOnlyList<Review> Get()
    {
        return _context.Reviews.ToList();
    }

    public Review GetById(int id)
    {
        return _context.Reviews.Find(id);
    }

    public List<Review> GetByMovieId(int movieId)
    {
        //Continue with the query implementation
        return _context.Reviews.Where(rev=>rev.MovieId == movieId).ToList();
    }

    public List<Review> GetByUserId(int userId)
    {
        //Continue with the query implementation
        return _context.Reviews.Where(rev=>rev.UserId == userId).ToList();
    }

    public List<Review> GetByMovieAndUserIds(int movieId, int userId)
    {
        //Continue with the query implementation
        return _context.Reviews.Where(rev=>rev.MovieId == movieId&&rev.UserId==userId).ToList();
    }

    public void AddReview(Review review)
    {
        review.Date = DateTime.Now;
        _context.Reviews.Add(review);
        var movie = _context.Movies.Find(review.MovieId);
        movie.Reviews.Add(review);
        _context.Movies.Update(movie);
        var user = _context.Users.Find(review.UserId);
        user.ReviewsList.Add(review);
        _context.Users.Update(user);
        _context.SaveChanges();
    }

    public void Update(Review review)
    {
        review.Date = DateTime.Now;
        _context.Reviews.Update(review);
        _context.SaveChanges();
    }

    public void Delete(int id)
    {
        var reviewResult = _context.Reviews.Find(id);
        _context.Reviews.Remove(reviewResult);
        _context.SaveChanges();
    }
}