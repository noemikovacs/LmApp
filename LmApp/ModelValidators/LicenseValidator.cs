using FluentValidation;
using LmApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.ModelValidators
{
    public class LicenseValidator : AbstractValidator<License>
	{
		public LicenseValidator(ToolDbContext context)
		{
			RuleFor(x => x.SerialNr)
				.Length(1, 100);
			RuleFor(x => x.ExpirationDate)
				.GreaterThan(DateTime.Now);
		}
	}
}
