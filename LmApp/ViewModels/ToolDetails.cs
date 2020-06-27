using LmApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.ViewModels
{
    public class ToolDetails
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Vendor { get; set; }

        public List<LicenseForToolDetails> Licenses { get; set; }

        public static ToolDetails FromTool(Tool tool)
        {
            return new ToolDetails
            {
                Id = tool.Id,
                Name = tool.Name,
                Vendor = tool.Vendor,
                Licenses = tool.Licenses.Select(c => LicenseForToolDetails.FromLicense(c)).ToList()
            };
        }

    }
}
