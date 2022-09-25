using ContactManagerAPI.Models;
using ContactManagerAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactManagerAPI.Controllers
{
    [Route("contacts")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _service;

        public ContactController(IContactService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ContactShortDto>> GetAll()
        {
            var contacts = _service.GetAll();

            return Ok(contacts);
            
        }
    }
}
