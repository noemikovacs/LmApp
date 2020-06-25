using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class Tool
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Vendor { get; set; }
        public List<License> Licenses{ get; set; }
    }
}
