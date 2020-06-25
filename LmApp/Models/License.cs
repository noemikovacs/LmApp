using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class License
    {
        public long Id { get; set; }
        public string serialNr { get; set; }
        public DateTime expirationDate { get; set; }
    }
}
