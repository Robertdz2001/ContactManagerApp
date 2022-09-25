﻿using AutoMapper;
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
        public int CreateContact(CreateContactDto dto)
        {
            var contact = _mapper.Map<Contact>(dto);

            if(_context.Contacts.Contains(contact))
            {
                throw new ConflictException("Contact already exists");
            }
            _context.Contacts.Add(contact);
            _context.SaveChanges();
            return contact.Id;
        }

        public ContactDto GetById(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == id);

            if(contact==null)
            {
                throw new NotFoundException("Not Found");
            }
            var contactDto = _mapper.Map<ContactDto>(contact);
            return contactDto;
        }

       

    }
}
