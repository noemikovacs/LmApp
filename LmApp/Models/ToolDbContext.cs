using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LmApp.Models
{
    public class ToolDbContext : IdentityDbContext
    {
        public ToolDbContext(DbContextOptions<ToolDbContext> options) : base(options)
        { 
        }
        public DbSet<Employee> Employees { get; set; }

        public DbSet<License> Licenses { get; set; }

        public DbSet<Tool> Tools { get; set; }

        public DbSet<LicenseEmployee> LicenseEmployee { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //one to many connection tool- license
            modelBuilder.Entity<License>()
                .HasOne(f => f.Tool)
                .WithMany(f => f.Licenses)
                .HasForeignKey(f => f.FKTool);

            //many to many connection employee - license
            modelBuilder.Entity<LicenseEmployee>()
                .HasKey(sc => new { sc.EmployeeId, sc.LicenseId });
        }

    }
}
