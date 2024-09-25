import {
  MovieSectionText,
  MovieSectionBorderedItems,
  MovieSectionContainer,
  MovieSectionItems,
} from "../Movie.styled";

interface MovieDetailProp {
  title: string;
  list?: string[];
  string?: string;
}

export const MovieDetailComponent = ({
  title,
  list,
  string,
}: MovieDetailProp) => {
  return (
    <MovieSectionContainer>
      <MovieSectionText>{title}</MovieSectionText>
      {list && (
        <MovieSectionItems>
          {list.map((item, index) => (
            <MovieSectionBorderedItems key={index}>
              {item}
            </MovieSectionBorderedItems>
          ))}
        </MovieSectionItems>
      )}
      {string && (
        <MovieSectionBorderedItems>{string}</MovieSectionBorderedItems>
      )}
    </MovieSectionContainer>
  );
};
