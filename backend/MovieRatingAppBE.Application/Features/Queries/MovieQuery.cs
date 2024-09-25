using GraphQL;
using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Application.Type;

namespace MovieRatingAppBE.Application.Features.Queries;

public class MovieQuery : ObjectGraphType
{
    public MovieQuery(IMovieRepository movieRepository)
    {
        Field<ListGraphType<MovieType>>("Movies").Resolve(context =>
        {
            return movieRepository.Get();
        });
        Field<MovieType>("Movie").Arguments(new QueryArgument<IntGraphType>{Name = "id"}).Resolve(context =>
        {
            return movieRepository.GetById(context.GetArgument<int>("id"));
        });
        Field<ListGraphType<MovieType>>("MoviesByGenre").Arguments(new QueryArgument<StringGraphType>{Name="genre"}).Resolve(context =>
        {
            return movieRepository.GetByGenre(context.GetArgument<string>("genre"));
        });
    }
}