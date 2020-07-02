using System;
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
    public class LicensesController : ControllerBase
    {
        private readonly ToolDbContext _context;

        public LicensesController(ToolDbContext context)
        {
            _context = context;
        }

        // GET: api/Licenses
        /// <summary>
        ///  List of licenses
        /// </summary>
        /// <returns>Returns all of the license</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<License>>> GetLicenses()
        {
            IQueryable<License> result = _context.Licenses;
            var resultList = await result.OrderByDescending(t => t.ExpirationDate).ToListAsync();
            //return await _context.Licenses.ToListAsync();
            return resultList;

        }

        // GET: api/Licenses/5
        /// <summary>
        /// Get a License with an unique id
        /// </summary>
        /// <param name="id">The ID for the license we're searching for</param>
        /// <returns>The serched license with the given id</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<License>> GetLicense(long id)
        {
            var license = await _context.Licenses.FindAsync(id);

            if (license == null)
            {
                return NotFound();
            }

            return license;
        }

        // PUT: api/Licenses/5
        /// <summary>
        /// Add or Update a License
        /// </summary>
        /// <param name="id">The ID for the license we're searching for</param>
        /// <param name="license"></param>
        /// <returns></returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLicense(long id, License license)
        {
            if (id != license.Id)
            {
                return BadRequest();
            }

            _context.Entry(license).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LicenseExists(id))
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

        // POST: api/Licenses
        /// <summary>
        /// Add/create a new License
        /// </summary>
        /// <param name="license">the License we want to add</param>
        /// <returns>The added license</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<License>> PostLicense(License license)
        {
            _context.Licenses.Add(license);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLicense", new { id = license.Id }, license);
        }

        // DELETE: api/Licenses/5
        /// <summary>
        /// Delete a license with a certain id
        /// </summary>
        /// <param name="id">The ID for the license we're searching for</param>
        /// <returns>The deleted license</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<License>> DeleteLicense(long id)
        {
            var license = await _context.Licenses.FindAsync(id);
            if (license == null)
            {
                return NotFound();
            }

            _context.Licenses.Remove(license);
            await _context.SaveChangesAsync();

            return license;
        }

        private bool LicenseExists(long id)
        {
            return _context.Licenses.Any(e => e.Id == id);
        }
    }
}
