using Microsoft.Extensions.DependencyInjection;
using MovieRatingAppBE.Application.Features.Mutations;
using MovieRatingAppBE.Application.Features.Queries;

namespace MovieRatingAppBE.Application.Schema;

public class RootSchema : GraphQL.Types.Schema
{
    public RootSchema(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        Query = serviceProvider.GetRequiredService<RootQuery>();
        Mutation = serviceProvider.GetRequiredService<RootMutation>();
    }
}