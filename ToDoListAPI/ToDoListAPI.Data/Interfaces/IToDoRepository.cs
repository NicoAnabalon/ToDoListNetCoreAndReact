using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoListAPI.Model;

namespace ToDoListAPI.Data.Interfaces
{
    public interface IToDoRepository
    {
        IEnumerable<ToDo> GetAllToDos();
        ToDo GetToDo(long id);
        ToDo InsertToDo(ToDoCreateDTO toDoCreateDTO);
        ToDo UpdateToDo(ToDoUpdateDTO toDoUpdateDTO);
        ToDo DeleteToDo(long id);
    }
}
