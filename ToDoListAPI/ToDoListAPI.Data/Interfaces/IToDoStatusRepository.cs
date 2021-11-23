using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoListAPI.Model;

namespace ToDoListAPI.Data.Interfaces
{
    public interface IToDoStatusRepository
    {
        IEnumerable<ToDoStatus> GetAllToDoStatuses();
        ToDoStatus GetToDoStatus(long id);
    }
}
