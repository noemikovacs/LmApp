using FluentValidation;
using LmApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.ModelValidators
{
    public class ToolValidator : AbstractValidator<Tool>
	{
		public ToolValidator(ToolDbContext context)
		{
			RuleFor(x => x.Name)
				.Length(1, 100);
			RuleFor(x => x.Vendor)
				.Length(5, 500);
		}
	}
}
