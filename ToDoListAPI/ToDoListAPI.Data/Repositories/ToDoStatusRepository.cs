using Dapper;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoListAPI.Data.Interfaces;
using ToDoListAPI.Model;

namespace ToDoListAPI.Data.Repositories
{
    public class ToDoStatusRepository : IToDoStatusRepository
    {
        private PostgreSQLConfiguration _connectionString;

        public ToDoStatusRepository(PostgreSQLConfiguration connectionString)
        {
            _connectionString = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(_connectionString.ConnectionString);
        }

        public IEnumerable<ToDoStatus> GetAllToDoStatuses()
        {
            var conn = dbConnection();
            const string sQuery = "select * from tds_to_do_status_read_all()";
            var oToDoStatus = conn.Query<ToDoStatus>(sQuery);
            if (oToDoStatus?.Count() > 0)
            {
                return oToDoStatus.ToList();
            }
            return null;
        }

        public ToDoStatus GetToDoStatus(long id)
        {
            var conn = dbConnection();
            const string sQuery = "select * from tds_to_do_status_read_all(@p_id)";
            var oToDoStatus = conn.Query<ToDoStatus>(sQuery, new { p_id = id });
            if (oToDoStatus?.Count() > 0)
            {
                return oToDoStatus.FirstOrDefault();
            }
            return null;
        }
    }
}
