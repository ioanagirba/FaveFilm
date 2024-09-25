using GraphQL;
using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Application.Type;

namespace MovieRatingAppBE.Application.Features.Queries;

public class UserQuery : ObjectGraphType
{
    public UserQuery(IUserRepository userRepository)
    {
        Field<ListGraphType<UserType>>("Users").Resolve(context =>
        {
            return userRepository.Get();
        });
        Field<UserType>("User").Arguments(new QueryArgument<IntGraphType>{Name = "id"}).Resolve(context =>
        {
            return userRepository.GetById(context.GetArgument<int>("id"));
        });
        
    }
}