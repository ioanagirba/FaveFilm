using GraphQL.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Type;

public class UserType:ObjectGraphType<User>
{
    public UserType(IReviewRepository reviewRepository)
    {
        Field(u => u.Id);
        Field(u => u.FirstName);
        Field(u =>u.LastName);
        Field( u =>u.Email);
        Field(u => u.Password);
        Field(u=>u.WatchedList);
        Field<ListGraphType<ReviewType>>("ReviewsList").Resolve(context =>
        {
            return reviewRepository.GetByUserId(context.Source.Id);
        });
    }
}