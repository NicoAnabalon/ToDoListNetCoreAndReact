using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAPI.Data.Interfaces;
using ToDoListAPI.Model;

namespace ToDoListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoStatusController : ControllerBase
    {
        private readonly IToDoStatusRepository _toDoStatusRepository;

        public ToDoStatusController(IToDoStatusRepository toDoStatusRepository)
        {
            _toDoStatusRepository = toDoStatusRepository;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetToDoStatus(long id)
        {

            var element = _toDoStatusRepository.GetToDoStatus(id);
            if (element == null)
                return NotFound("No items");


            return Ok(element);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<ToDoStatus> GetAllToDoStatuses()
        {

            var element = _toDoStatusRepository.GetAllToDoStatuses();
            if (element == null)
                return null;

            return element;
        }
    }
}
