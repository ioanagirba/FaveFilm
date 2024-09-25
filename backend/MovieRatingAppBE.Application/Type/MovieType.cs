using GraphQL.Types;
using HotChocolate.Types;
using MovieRatingAppBE.Application.Contracts;
using MovieRatingAppBE.Domain;

namespace MovieRatingAppBE.Application.Type;

public class MovieType : ObjectGraphType<Movie>
{
    public MovieType(IReviewRepository reviewRepository)
    {
        Field(m => m.Id);
        Field(m => m.Title);
        Field(m => m.Description);
        Field<ListGraphType<StringGraphType>>("imagesUrls").Resolve( m =>m.Source.ImagesUrls);
        Field<ListGraphType<StringGraphType>>("genres").Resolve( m =>m.Source.Genres);
        Field(m => m.Director);
        Field<ListGraphType<StringGraphType>>("cast").Resolve(m =>m.Source.Cast);
        Field<ListGraphType<ReviewType>>("Reviews").Resolve(context =>
            {
                return reviewRepository.GetByMovieId(context.Source.Id);
            });
    }
}