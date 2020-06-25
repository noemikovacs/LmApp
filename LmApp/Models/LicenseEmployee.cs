using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class LicenseEmployee
    {
        public long Id { get; set; }
        public long LicenseId { get; set; }
        public License License { get; set; }
        public long EmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
}
