using GraphQL.Types;

namespace MovieRatingAppBE.Application.Features.Mutations;

public class RootMutation : ObjectGraphType
{
    public RootMutation()
    {
        Field<UserMutation>("userMutation").Resolve(context =>new{});
        Field<ReviewMutation>("reviewMutation").Resolve(context=>new{});
        
    }
}