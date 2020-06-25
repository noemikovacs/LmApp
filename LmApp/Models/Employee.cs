using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class Employee
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public Position Position { get; set; }
    }
}
