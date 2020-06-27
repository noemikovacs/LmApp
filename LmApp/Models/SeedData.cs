using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ToolDbContext(serviceProvider.GetRequiredService<DbContextOptions<ToolDbContext>>()))
            {
                
                if (context.Tools.Any())
                {
                    return;   // DB table has been seeded
                }



                context.SaveChanges();
            }
        }
    }
}
