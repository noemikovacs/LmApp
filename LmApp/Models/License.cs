using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class License
    {
        public long Id { get; set; }
        public string SerialNr { get; set; }
        public DateTime ExpirationDate { get; set; }
        public long FKTool { get; set; }
        [JsonIgnore]
        public Tool Tool { get; set; }
    }
}
