using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoListAPI.Model
{
    public class ToDoUpdateDTO
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public long ToDoStatusId { get; set; }
    }
}
