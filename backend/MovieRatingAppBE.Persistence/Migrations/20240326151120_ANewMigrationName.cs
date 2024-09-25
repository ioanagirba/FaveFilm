using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MovieRatingAppBE.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ANewMigrationName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagesUrls = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Genres = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Director = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cast = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MovieUser",
                columns: table => new
                {
                    UsersId = table.Column<int>(type: "int", nullable: false),
                    WatchedListId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieUser", x => new { x.UsersId, x.WatchedListId });
                    table.ForeignKey(
                        name: "FK_MovieUser_Movies_WatchedListId",
                        column: x => x.WatchedListId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MovieUser_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    MovieId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reviews_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reviews_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Cast", "Description", "Director", "Genres", "ImagesUrls", "Title" },
                values: new object[,]
                {
                    { 1, "[\"Justin Timberlake\",\"Cillian Murphy\",\"Amanda Seyfried\"]", "In a future where people stop aging at 25, but are engineered to live only one more year, having the means to buy your way out of the situation is a shot at immortal youth. Here, Will Salas finds himself accused of murder and on the run with a hostage - a connection that becomes an important part of the way against the system.", "Andrew Niccol", "[\"Science Fiction\",\"Thriller\",\"Action\"]", "[\"https://m.media-amazon.com/images/M/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg@@._V1_.jpg\",\"https://m.media-amazon.com/images/M/MV5BMTU4NTY2NDU3Ml5BMl5BanBnXkFtZTcwMjQ1MTE5Ng@@._V1_.jpg\",\"https://static.cinemagia.ro/img/db/movie/55/89/90/in-time-690990l.jpg\"]", "In Time" },
                    { 2, "[\"Adrien Brody\",\"Thomas Kretschmann\",\"Frank Finlay\"]", "During WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.", "Roman Polanski", "[\"Biography\",\"Drama\",\"Music\"]", "[\"https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg\",\"https://m.media-amazon.com/images/M/MV5BMTMxMTUzOTYxNF5BMl5BanBnXkFtZTcwNDYxMTIyMw@@._V1_.jpg\",\"https://filmforum.org/do-not-enter-or-modify-or-erase/client-uploads/_1000w/THE_PIANIST_slideshow_3.png\"]", "The Pianist" },
                    { 3, "[\"Enzo Vogrincic\",\"Agust\\u00EDn Pardella\",\"Mat\\u00EDas Recalt\"]", "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.", "J.A. Bayona", "[\"Adventure\",\"Biography\",\"Drama\"]", "[\"https://elranchito.es/wp-content/uploads/2023/12/MV5BYWQ0Y2MxODgtOWI0ZC00MWIwLWIyYzEtN2FhNWQ1MGQ3MDBhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg\",\"https://variety.com/wp-content/uploads/2023/07/Society-of-the-Snow.jpg?w=1000\",\"https://m.media-amazon.com/images/M/MV5BZWQwYTljYWEtOThjZS00NmI5LWFmZTAtNDcyZjAwY2MxNjRjXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg\"]", "Society of the Snow" },
                    { 4, "[\"Miyu Irino\",\"Rumi Hiiragi\",\"Mari Natsuki\"]", "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.", "Hayao Miyazaki", "[\"Animation\",\"Adventure\",\"Family\"]", "[\"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg\",\"https://m.media-amazon.com/images/M/MV5BMjE1Mjk2MTcwNV5BMl5BanBnXkFtZTgwNTc1MTMyMDE@._V1_.jpg\",\"https://www.fortressofsolitude.co.za/wp-content/uploads/2021/04/spirited-away-no-face.jpg\"]", "Spirited Away" },
                    { 5, "[\"Margot Robbie\",\"Ryan Gosling\",\"Simu Liu\"]", "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.", "Greta Gerwig", "[\"Adventure\",\"Comedy\",\"Fantasy\"]", "[\"https://i.ebayimg.com/images/g/O3MAAOSwiZ9k0HfD/s-l1600.jpg\",\"https://www.barbie-themovie.com/images/share.jpg\",\"https://hips.hearstapps.com/hmg-prod/images/barbie-movie-film-64b9625d145c1.jpeg\"]", "Barbie" },
                    { 6, "[\"Matthew McConaughey\",\"Anne Hathaway\",\"Jessica Chastain\"]", "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", "Christopher Nolan", "[\"Adventure\",\"Drama\",\"Science Fiction\"]", "[\"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg\",\"https://www.denofgeek.com/wp-content/uploads/2022/02/spaceship-and-black-hole-in-Interstellar.jpeg?fit=1800%2C1125\",\"https://cdn.mos.cms.futurecdn.net/LVoJnXBbUH6xx9EkfgVnc5.jpg\"]", "Interstellar" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "LastName", "Password" },
                values: new object[] { 1, "my@email.com", "Robert", "Domokos", "pass" });

            migrationBuilder.CreateIndex(
                name: "IX_MovieUser_WatchedListId",
                table: "MovieUser",
                column: "WatchedListId");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_MovieId",
                table: "Reviews",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovieUser");

            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "Movies");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
