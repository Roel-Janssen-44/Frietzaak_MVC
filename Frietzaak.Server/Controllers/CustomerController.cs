using Frietzaak.Server.Data;
using Microsoft.AspNetCore.Mvc;

namespace Frietzaak.Server.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ApplicationData _context;

        public CustomerController(ApplicationData context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("/customers")]
        public IActionResult FetchCustomers()
        {
            return Ok(_context.Customers);
        }
    }
}
