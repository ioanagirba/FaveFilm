using GraphQL;
using GraphQL.MicrosoftDI;
using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Application.Type;
using MovieRatingAppBE.Application.Type.InputType;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Features.Mutations;

public class UserMutation:ObjectGraphType
{
    public UserMutation(IUserRepository userRepository)
    {
        Field<StringGraphType>("RegisterUser").Arguments(new QueryArgument<UserInputType> { Name = "user" }).Resolve(
            context =>
            {
                userRepository.Register(context.GetArgument<User>("user"));
                return "The user was created";
            });
        Field<UserType>("LoginUser").Arguments(new QueryArgument<StringGraphType> { Name = "email" },
                new QueryArgument<StringGraphType> { Name = "password" })
            .Resolve(context =>
            {
                var user = userRepository.Login(context.GetArgument<string>("email"),
                    context.GetArgument<string>("password"));
                return user;
            });
        Field<StringGraphType>("AddToWatchList").Arguments(new QueryArgument<IntGraphType> { Name = "userId" },
            new QueryArgument<IntGraphType> { Name = "movieId" })
            .Resolve(context =>
            {
                userRepository.AddToWatchList(context.GetArgument<int>("userId"),context.GetArgument<int>("movieId"));
                return "Added to movie with Id = " + context.GetArgument<int>("movieId") + " to watchlist";
            });
        Field<StringGraphType>("DeleteFromWatchList").Arguments(new QueryArgument<IntGraphType> { Name = "userId" },
                new QueryArgument<IntGraphType> { Name = "movieId" })
            .Resolve(context =>
            {
                userRepository.DeleteMovieFromWatchList(context.GetArgument<int>("userId"),context.GetArgument<int>("movieId"));
                return "Movie with Id = " + context.GetArgument<int>("movieId") + " deleted from watchlist.";
            });
    }
}