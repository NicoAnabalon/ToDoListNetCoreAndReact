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
    public class ToDoController : ControllerBase
    {
        private readonly IToDoRepository _toDoRepository;

        public ToDoController(IToDoRepository toDoRepository)
        {
            _toDoRepository = toDoRepository;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetToDo(long id)
        {

            var element = _toDoRepository.GetToDo(id);
            if (element == null)
                return NotFound("No items");


            return Ok(element);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IEnumerable<ToDo> GetAllToDos()
        {

            var element = _toDoRepository.GetAllToDos();
            if (element == null)
                return null;

            return element;
        }

        [HttpPost("")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult InsertToDo(ToDoCreateDTO toDoCreateDTO)
        {
            var salida = _toDoRepository.InsertToDo(toDoCreateDTO);
            return Ok(salida);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateToDo(long id, [FromBody] ToDoUpdateDTO toDoUpdateDTO)
        {
            if (id != toDoUpdateDTO.Id)
            {
                return BadRequest("Los IDs no coinciden");
            }
            var salida = _toDoRepository.UpdateToDo(toDoUpdateDTO);
            return Ok(salida);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult DeleteToDo(long id)
        {
            var response = _toDoRepository.DeleteToDo(id);
            if (response == null)
            {
                return BadRequest("No existe el ID ingresado");
            }
            return Ok(response);
        }
    }
}
