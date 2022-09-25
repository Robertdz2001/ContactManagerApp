using ContactManagerAPI.Models;

namespace ContactManagerAPI.Services
{
    public interface IContactService
    {
        IEnumerable<ContactShortDto> GetAll();
    }
}
