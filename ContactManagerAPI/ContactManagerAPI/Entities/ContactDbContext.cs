using Microsoft.EntityFrameworkCore;

namespace ContactManagerAPI.Entities
{
    public class ContactDbContext : DbContext
    {
        private string _connectionString =
            "Server=localhost\\SQLEXPRESS;Database=ContactDb;Trusted_Connection=True;";
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
                new Contact
                {
                    Id = 1,
                    Name = "John",
                    PhotoUrl = "https://emiwo.pl/wp-content/uploads/2022/08/defoult.jpg",
                    Mobile = "48785438129",
                    Email = "john1989@gmail.com",
                    Company = "Google",
                    Group = "Colleague",
                    Title = "Software Engineer"
                },
                new Contact
                {
                    Id = 2,
                    Name = "Anna",
                    PhotoUrl = "https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png",
                    Mobile = "48543414311",
                    Email = "anna1999@gmail.com",
                    Company = "Google",
                    Group = "Colleague",
                    Title = "Java Developer"
                }
                );
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
