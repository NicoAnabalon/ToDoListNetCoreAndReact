using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoListAPI.Model
{
    public class ToDo
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public long ToDoStatusId { get; set; }
        public bool Deleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string ToDoStatusName { get; set; }
    }
}
