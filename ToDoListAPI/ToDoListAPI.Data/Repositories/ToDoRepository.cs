using Dapper;
using Npgsql;
using NpgsqlTypes;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoListAPI.Data.Interfaces;
using ToDoListAPI.Model;

namespace ToDoListAPI.Data.Repositories
{
    public class ToDoRepository : IToDoRepository
    {
        private PostgreSQLConfiguration _connectionString;

        public ToDoRepository(PostgreSQLConfiguration connectionString)
        {
            _connectionString = connectionString;
        }

        protected NpgsqlConnection dbConnection()
        {
            return new NpgsqlConnection(_connectionString.ConnectionString);
        }

        private void AddCreateParameters(IDbCommand cmd, string strFunction, NpgsqlParameter[] pgParams, out NpgsqlParameter outIdParam)
        {
            cmd.CommandText = strFunction;
            cmd.CommandType = CommandType.StoredProcedure;

            for (int i = 0; i < pgParams.Length; i++)
                cmd.Parameters.Add(pgParams[i]);

            outIdParam = new NpgsqlParameter("@ret_id", NpgsqlDbType.Bigint) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outIdParam);
        }

        private void AddUpdateParameters(IDbCommand cmd, string strFunction, long id, NpgsqlParameter[] pgParams, out NpgsqlParameter outIdParam)
        {
            cmd.CommandText = strFunction;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new NpgsqlParameter("@p_id", id));

            if (pgParams != null)
            {
                for (int i = 0; i < pgParams.Length; i++)
                {
                    cmd.Parameters.Add(pgParams[i]);
                }
            }

            outIdParam = new NpgsqlParameter("@ret_id", NpgsqlDbType.Bigint) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outIdParam);
        }

        private NpgsqlParameter CreateParam(string name, object value, NpgsqlDbType pgType)
        {
            return new NpgsqlParameter(name, pgType) { Value = value };
        }

        public IEnumerable<ToDo> GetAllToDos()
        {
            var conn = dbConnection();
            const string sQuery = "select * from td_to_do_read_all()";
            var oToDoStatus = conn.Query<ToDo>(sQuery);
            if (oToDoStatus?.Count() > 0)
            {
                return oToDoStatus.ToList();
            }
            return null;
        }

        public ToDo GetToDo(long id)
        {
            var conn = dbConnection();
            const string sQuery = "select * from td_to_do_read(@p_id)";
            var oToDoStatus = conn.Query<ToDo>(sQuery, new { p_id = id });
            if (oToDoStatus?.Count() > 0)
            {
                return oToDoStatus.FirstOrDefault();
            }
            return null;
        }

        public ToDo InsertToDo(ToDoCreateDTO toDoCreateDTO)
        {
            var conn = dbConnection();
            conn.Open();
            IDbCommand cmd = conn.CreateCommand();
            NpgsqlParameter outIdParam;

            AddCreateParameters(cmd, "td_to_do_create",
                new NpgsqlParameter[] {
                    CreateParam("@p_content", toDoCreateDTO.Content, NpgsqlDbType.Varchar),
                    CreateParam("@p_tds_id", toDoCreateDTO.ToDoStatusId, NpgsqlDbType.Bigint)
                },
                out outIdParam);

            cmd.ExecuteNonQuery();

            conn.Close();
            return this.GetToDo(Convert.ToInt32(outIdParam.Value));
        }

        public ToDo UpdateToDo(ToDoUpdateDTO toDoUpdateDTO)
        {
            var conn = dbConnection();
            conn.Open();
            IDbCommand cmd = conn.CreateCommand();
            NpgsqlParameter outIdParam;

            AddUpdateParameters(cmd, "td_to_do_update", toDoUpdateDTO.Id,
                new NpgsqlParameter[] {
                    CreateParam("@p_content", toDoUpdateDTO.Content, NpgsqlDbType.Varchar),
                    CreateParam("@p_tds_id", toDoUpdateDTO.ToDoStatusId, NpgsqlDbType.Bigint)
                },
                out outIdParam);

            cmd.ExecuteNonQuery();
            conn.Close();
            return this.GetToDo(Convert.ToInt32(outIdParam.Value));
        }

        public ToDo DeleteToDo(long id)
        {
            var conn = dbConnection();
            conn.Open();
            ToDo toDo = this.GetToDo(id);
            IDbCommand cmd = conn.CreateCommand();
            NpgsqlParameter outIdParam;

            AddUpdateParameters(cmd, "td_to_do_delete", id, null, out outIdParam);

            cmd.ExecuteNonQuery();
            conn.Close();
            if (outIdParam.NpgsqlValue.ToString() != "")
            {
                if (Convert.ToInt32(outIdParam.Value) == id)
                {
                    toDo.Deleted = true;
                    return toDo;

                }
            }
            return null;
        }
    }
}
