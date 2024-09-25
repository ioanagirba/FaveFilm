using GraphQL.Types;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Features.Queries;

public class RootQuery: ObjectGraphType
{
    public RootQuery()
    {
        Field<MovieQuery>("movieQuery").Resolve(context =>new{});
        Field<ReviewQuery>("reviewQuery").Resolve(context=>new{});
        Field<UserQuery>("userQuery").Resolve(context=>new{});
    }
}