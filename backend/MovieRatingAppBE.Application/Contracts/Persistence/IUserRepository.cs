using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Contracts;

public interface IUserRepository
{
    IReadOnlyList<User> Get();
    User GetById(int id);
    void AddToWatchList(int userId,int movieId);
    void DeleteMovieFromWatchList(int userId,int movieId);
    void Register(User user);
    User Login(string Email, string Password);

}