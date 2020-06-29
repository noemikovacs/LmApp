using FluentValidation;
using LmApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.ModelValidators
{
	public class EmployeeValidator : AbstractValidator<Employee>
	{
		public EmployeeValidator(ToolDbContext context)
		{
			RuleFor(x => x.Name)
				.Length(1, 100);
		}
	}
}
