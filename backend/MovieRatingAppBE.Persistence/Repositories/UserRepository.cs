using System.Globalization;
using Microsoft.EntityFrameworkCore;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;
using MovieRatingAppBE.Persistence.Data;

namespace MovieRatingAppBE.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    private MovieRatingContext _context;

    public UserRepository(MovieRatingContext context)
    {
        _context = context;
    }
    public IReadOnlyList<User> Get()
    {
        
        return _context.Users.Include(u=>u.WatchedList).ToList();
    }

    public User GetById(int id)
    {
        var user = _context.Users.Include(u => u.WatchedList).FirstOrDefault(u => u.Id == id);
        Console.WriteLine(user.WatchedList.Count);
        return user;
    }

    public void AddToWatchList(int userId,int movieId)
    {
        //Continue with the query implementation
        var movie = _context.Movies.FirstOrDefault(m=>m.Id==movieId);
        var user = _context.Users.FirstOrDefault(u=>u.Id==userId);
        if (user != null && movie != null)
        {
            user.WatchedList.Add(movie);
            movie.Users.Add(user);
            _context.Users.Update(user);
            _context.Movies.Update(movie);
            _context.Users.Attach(user);
            _context.Movies.Attach(movie);
            _context.SaveChanges();
        }

    }

    public void DeleteMovieFromWatchList(int userId, int movieId)
    {
        var movie = _context.Movies.Include(m=>m.Users).FirstOrDefault(m=>m.Id==movieId);
        var user = _context.Users.Include(u=>u.WatchedList).FirstOrDefault(u=>u.Id==userId);
        if (user != null && movie != null)
        {
            user.WatchedList.Remove(movie);
            movie.Users.Remove(user);
            
            _context.Users.Update(user);
            _context.Movies.Update(movie);
            
            _context.SaveChanges();
        }

    }
    public void Register(User user)
    {
        //Continue with the query implementation
        _context.Users.Add(user);
        _context.SaveChanges();
    }

    public User Login(string Email, string Password)
    {
        //Continue with the query implementation
        var user = _context.Users.FirstOrDefault(u => u.Email == Email);
        if (user != null)
        {
            if (user.Password.Equals(Password))
            {
                return user;
            }
            else
            {
                throw new Exception("Invalid password for user with email: " + Email + "!");
            }
        }
        else
        {
            throw new Exception("User with email: " + Email + " not found!");
        }
    }
}