using AutoMapper;
using ContactManagerAPI.Entities;
using ContactManagerAPI.Exceptions;
using ContactManagerAPI.Models;

namespace ContactManagerAPI.Services
{
    public class ContactService : IContactService
    {
        private readonly ContactDbContext _context;
        private readonly IMapper _mapper;

        public ContactService(IMapper mapper, ContactDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public IEnumerable<ContactShortDto> GetAll()
        {
            var contacts = _context.Contacts.ToList();
            if(contacts==null)
            {
                throw new NotFoundException("Not Found");
            }

            var contactsShort = _mapper.Map<List<ContactShortDto>>(contacts);
            return contactsShort;
        }

    }
}
