using System.ComponentModel.DataAnnotations;

namespace ContactManagerAPI.Models
{
    public class CreateContactDto
    {
        public string Name { get; set; }

        [Url]
        public string PhotoUrl { get; set; }

        [Phone]
        public string Mobile { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public string Company { get; set; }
        public string Title { get; set; }
        public string Group { get; set; }
    }
}
