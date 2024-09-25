using GraphQL;
using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Application.Type;
using MovieRatingAppBE.Application.Type.InputType;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Features.Mutations;

public class ReviewMutation:ObjectGraphType
{
    public ReviewMutation(IReviewRepository reviewRepository)
    {
        Field<StringGraphType>("CreateReview").Arguments(new QueryArgument<ReviewInputType>{Name = "review"}).Resolve(context =>
        {
            reviewRepository.AddReview(context.GetArgument<Review>("review"));
            return "The review was created";
        });
        Field<ReviewType>("UpdateReview").Arguments(new QueryArgument<ReviewInputType>{Name = "review"}).Resolve(context =>
        { 
            reviewRepository.Update(context.GetArgument<Review>("review"));
            return "The review was updated";
        });
        Field<StringGraphType>("DeleteReview").Arguments(new QueryArgument<IntGraphType>{Name = "id"}).Resolve(context =>
        {
            var id = context.GetArgument<int>("id");
            reviewRepository.Delete(id);
            return "The review against this Id" + id + " has been deleted";
        });
        //Continue with the query implementation
    }
}