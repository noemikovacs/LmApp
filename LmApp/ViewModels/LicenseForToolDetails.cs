using LmApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.ViewModels
{
    public class LicenseForToolDetails
    {
        public string SerialNr { get; set; }
        public DateTime ExpirationDate { get; set; }

        public static LicenseForToolDetails FromLicense(License license)
        {
            return new LicenseForToolDetails
            {
                SerialNr = license.SerialNr,
                ExpirationDate = license.ExpirationDate
            };
        }
    }
}
