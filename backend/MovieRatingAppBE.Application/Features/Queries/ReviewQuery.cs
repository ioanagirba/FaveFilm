using GraphQL;
using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Application.Type;

namespace MovieRatingAppBE.Application.Features.Queries;

public class ReviewQuery : ObjectGraphType
{
    public ReviewQuery(IReviewRepository reviewRepository)
    {
        Field<ListGraphType<ReviewType>>("Reviews").Resolve(context =>
        {
            return reviewRepository.Get();
        });
        Field<ReviewType>("Review").Arguments(new QueryArgument<IntGraphType>{Name = "id"}).Resolve(context =>
        {
            return reviewRepository.GetById(context.GetArgument<int>("id"));
        });
        //Continue with the query implementation
        Field<ListGraphType<ReviewType>>("reviewUserMovie").Arguments(new QueryArgument<IntGraphType> { Name= "movieId" },
            new QueryArgument<IntGraphType>{ Name= "userId" }).Resolve(context =>
        {
            return reviewRepository.GetByMovieAndUserIds(context.GetArgument<int>("movieId"),
                context.GetArgument<int>("userId"));
        });
        Field<ListGraphType<ReviewType>>("reviewUser").Arguments(
            new QueryArgument<IntGraphType>{ Name= "userId" }).Resolve(context =>
        {
            return reviewRepository.GetByUserId(
                context.GetArgument<int>("userId"));
        });
        Field<ListGraphType<ReviewType>>("reviewMovie").Arguments(
            new QueryArgument<IntGraphType>{ Name= "movieId" }).Resolve(context =>
        {
            return reviewRepository.GetByMovieId(
                context.GetArgument<int>("movieId"));
        });
    }
}