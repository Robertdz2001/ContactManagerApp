using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ContactManagerAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhotoUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Company", "Email", "Group", "Mobile", "Name", "PhotoUrl", "Title" },
                values: new object[] { 1, "Google", "john1989@gmail.com", "Colleague", "48785438129", "John", "https://emiwo.pl/wp-content/uploads/2022/08/defoult.jpg", "Software Engineer" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Company", "Email", "Group", "Mobile", "Name", "PhotoUrl", "Title" },
                values: new object[] { 2, "Google", "anna1999@gmail.com", "Colleague", "48543414311", "Anna", "https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png", "Java Developer" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
