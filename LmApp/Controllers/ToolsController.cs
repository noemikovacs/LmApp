using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LmApp.Models;
using LmApp.ViewModels;

namespace LmApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToolsController : ControllerBase
    {
        private readonly ToolDbContext _context;

        public ToolsController(ToolDbContext context)
        {
            _context = context;
        }

        // GET: api/Tools
        /// <summary>
        /// Gets a list of all the tools
        /// </summary>
        /// <returns>A list of Tool objects.</returns> 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tool>>> GetTools()
        {
            {
                IQueryable<Tool> result = _context.Tools;

                var resultList = await result
                 .Include(f => f.Licenses)
                 .ToListAsync();
                return resultList;
            }
        }

        // GET: api/Tools/5
        /// <summary>
        /// Gets tools with an unique id
        /// </summary>
        /// <param name="id">The ID for the tool we're searching for</param>
        /// <returns>A tool with the given id</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<ToolDetails>> GetTool(long id)
        {
            var tool = await _context
                .Tools
                .Include(f => f.Licenses)
                .FirstOrDefaultAsync(f => f.Id == id);

            if (tool == null)
            {
                return NotFound();
            }

            return ToolDetails.FromTool(tool);
        }

        // PUT: api/Tools/5
        /// <summary>
        /// Add or Update a Tool
        /// </summary>
        /// <param name="id">The ID of the Tool </param>
        /// <param name="tool"></param>
        /// <returns>The updated or created Tool</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTool(long id, Tool tool)
        {
            if (id != tool.Id)
            {
                return BadRequest();
            }

            _context.Entry(tool).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToolExists(id))
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

        // POST: api/Tools
       /// <summary>
       /// Add a Tool 
       /// </summary>
       /// <param name="tool">The tool we want to add</param>
       /// <returns>The added tool</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tool>> PostTool(Tool tool)
        {
            _context.Tools.Add(tool);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTool", new { id = tool.Id }, tool);
        }

        // DELETE: api/Tools/5
        /// <summary>
        /// Delete a tool with a certain id
        /// </summary>
        /// <param name="id">Id for the movie we want to delete</param>
        /// <returns>The deleted tool</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tool>> DeleteTool(long id)
        {
            var tool = await _context.Tools.FindAsync(id);
            if (tool == null)
            {
                return NotFound();
            }

            _context.Tools.Remove(tool);
            await _context.SaveChangesAsync();

            return tool;
        }

        private bool ToolExists(long id)
        {
            return _context.Tools.Any(e => e.Id == id);
        }
    }
}
