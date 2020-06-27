﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LmApp.Models;

namespace LmApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LicenseEmployeesController : ControllerBase
    {
        private readonly ToolDbContext _context;

        public LicenseEmployeesController(ToolDbContext context)
        {
            _context = context;
        }

        // GET: api/LicenseEmployees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LicenseEmployee>>> GetLicenseEmployee()
        {
            return await _context.LicenseEmployee.ToListAsync();

                //            IQueryable<Tool> result = _context.Tools;

                //var resultList = await result
                // .Include(f => f.Licenses)
                // .ToListAsync();
                //return resultList;
        }

        // GET: api/LicenseEmployees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LicenseEmployee>> GetLicenseEmployee(long id)
        {
            var licenseEmployee = await _context.LicenseEmployee.FindAsync(id);

            if (licenseEmployee == null)
            {
                return NotFound();
            }

            return licenseEmployee;
        }

        // PUT: api/LicenseEmployees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLicenseEmployee(long id, LicenseEmployee licenseEmployee)
        {
            if (id != licenseEmployee.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(licenseEmployee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LicenseEmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LicenseEmployees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LicenseEmployee>> PostLicenseEmployee(LicenseEmployee licenseEmployee)
        {
            _context.LicenseEmployee.Add(licenseEmployee);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LicenseEmployeeExists(licenseEmployee.EmployeeId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLicenseEmployee", new { id = licenseEmployee.EmployeeId }, licenseEmployee);
        }

        // DELETE: api/LicenseEmployees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LicenseEmployee>> DeleteLicenseEmployee(long id)
        {
            var licenseEmployee = await _context.LicenseEmployee.FindAsync(id);
            if (licenseEmployee == null)
            {
                return NotFound();
            }

            _context.LicenseEmployee.Remove(licenseEmployee);
            await _context.SaveChangesAsync();

            return licenseEmployee;
        }

        private bool LicenseEmployeeExists(long id)
        {
            return _context.LicenseEmployee.Any(e => e.EmployeeId == id);
        }
    }
}
