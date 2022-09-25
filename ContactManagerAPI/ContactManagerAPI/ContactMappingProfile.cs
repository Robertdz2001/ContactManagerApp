using AutoMapper;
using ContactManagerAPI.Entities;
using ContactManagerAPI.Models;

namespace ContactManagerAPI
{
    public class ContactMappingProfile : Profile
    {
        public ContactMappingProfile()
        {
            CreateMap<Contact, ContactShortDto>();
            CreateMap<CreateContactDto, Contact>();
            CreateMap<Contact, ContactDto>();
        }
    }
}
