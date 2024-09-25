using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Type;

public class ReviewType : ObjectGraphType<Review>
{
    public ReviewType(IUserRepository userRepository)
    {
        Field(r => r.Id);
        Field(r => r.Rating);
        Field(r =>r.Comment);
        Field( r =>r.Date);
        Field(r => r.UserId);
        Field<UserType>("user").Resolve(context =>
        {
            return userRepository.GetById(context.Source.UserId);
        });
        Field(r =>r.MovieId);
       
    }   
}