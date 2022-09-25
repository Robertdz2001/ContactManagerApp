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

        [HttpPost]
        public ActionResult CreateContact([FromBody] CreateContactDto dto)
        {
            var id = _service.CreateContact(dto);
            return Created($"/contacts/{id}",null);
        }

        [HttpGet("{id}")]

        public ActionResult<ContactDto> GetById([FromRoute] int id)
        {
            var contact = _service.GetById(id);
            return Ok(contact);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateContact([FromRoute] int id ,[FromBody] CreateContactDto dto)
        {
            _service.UpdateContact(id, dto);
            return Ok();
        }

        [HttpDelete("{id}")]

        public ActionResult DeleteContact([FromRoute] int id)
        {
            _service.DeleteContact(id);

            return Ok();
        }
    }
}
