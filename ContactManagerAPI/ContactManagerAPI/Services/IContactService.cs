using ContactManagerAPI.Models;

namespace ContactManagerAPI.Services
{
    public interface IContactService
    {
        IEnumerable<ContactShortDto> GetAll();
        int CreateContact(CreateContactDto dto);
        ContactDto GetById(int id);
    }
}
