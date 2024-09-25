using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using MovieRatingAppBE.Application.Features.Mutations;
using MovieRatingAppBE.Application.Features.Queries;
using MovieRatingAppBE.Application.Schema;
using MovieRatingAppBE.Application.Type;
using MovieRatingAppBE.Application.Type.InputType;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application;

public static class ApplicationServicesConfiguration
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddTransient<MovieType>();
        services.AddTransient<UserType>();
        services.AddTransient<ReviewType>();
        
        services.AddTransient<UserInputType>();
        services.AddTransient<ReviewInputType>();
        
        services.AddTransient<MovieQuery>();
        services.AddTransient<UserQuery>();
        services.AddTransient<ReviewQuery>();
        services.AddTransient<RootQuery>();
        
        services.AddTransient<UserMutation>();
        services.AddTransient<ReviewMutation>();
        services.AddTransient<RootMutation>();
        
        services.AddTransient<ISchema,RootSchema>();

        services.AddGraphQL(builder => builder.AddAutoSchema<ISchema>().AddSystemTextJson());
        return services;
    }
}