﻿namespace ContactManagerAPI.Models
{
    public class CreateContactDto
    {
        public string Name { get; set; }
        public string PhotoUrl { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Company { get; set; }
        public string Title { get; set; }
        public string Group { get; set; }
    }
}