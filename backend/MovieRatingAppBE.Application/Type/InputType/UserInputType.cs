using GraphQL.Types;

namespace MovieRatingAppBE.Application.Type.InputType;

public class UserInputType : InputObjectGraphType
{
    public UserInputType()
    {
        Field<IntGraphType>("id");
        Field<StringGraphType>("firstName");
        Field<StringGraphType>("lastName");
        Field<StringGraphType>("email");
        Field<StringGraphType>("password");
    }
}