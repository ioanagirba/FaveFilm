using GraphQL.Types;

namespace MovieRatingAppBE.Application.Type.InputType;

public class ReviewInputType : InputObjectGraphType
{
    public ReviewInputType()
    {
        Field<IntGraphType>("id");
        Field<IntGraphType>("rating");
        Field<StringGraphType>("comment");
        Field<DateGraphType>("date");
        Field<IntGraphType>("userId");
        Field<IntGraphType>("movieId");
    }
}