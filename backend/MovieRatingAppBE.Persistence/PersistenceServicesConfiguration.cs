using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;
using MovieRatingAppBE.Persistence.Data;
using MovieRatingAppBE.Persistence.Repositories;

namespace MovieRatingAppBE.Persistence;

public static class PersistenceServicesConfiguration
{
    public static IServiceCollection AddPersistenceServices(this IServiceCollection services)
    {
        services.AddDbContext<MovieRatingContext>(options =>
            options.UseSqlServer("Data Source=localhost;Initial Catalog=MovieDB;User ID=SA;Password=1234Abcd;TrustServerCertificate=True;MultipleActiveResultSets=true"));
        services.AddScoped<IMovieRepository, MovieRepository>();
        services.AddScoped<IUserRepository,UserRepository>();
        services.AddScoped<IReviewRepository,ReviewRepository>();
        return services;
    }
}