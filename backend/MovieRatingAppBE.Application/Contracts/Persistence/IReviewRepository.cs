using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Contracts;

public interface IReviewRepository
{
    IReadOnlyList<Review> Get();
    Review GetById(int id);
    List<Review> GetByMovieId(int movieId);
    List<Review> GetByUserId(int userId);
    List<Review> GetByMovieAndUserIds(int movieId, int userId);
    void AddReview(Review review);
    void Update(Review review);
    void Delete(int id);
}