using Frietzaak.Server.Data;
using Frietzaak.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Frietzaak.Server.Controllers
{
    public class ProductController : Controller
    {

        private readonly ApplicationData _context;

        public ProductController(ApplicationData context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/products")]
        public IActionResult FetchProducts()
        {
            return Ok(_context.Products);
        }

        [HttpPost]
        [Route("/product")]
        public IActionResult FetchProduct([FromBody] int productId)
        {
            Product currentProduct = _context.Products.Find(productId);
            return Ok(currentProduct);
        }

        [HttpPost]
        [Route("/create/product")]
        public IActionResult CreateProducts([FromBody] Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Ok("succes");
        }

        [HttpPost]
        [Route("/edit/product")]
        public IActionResult EditProducts([FromBody] Product product)
        {
            Console.WriteLine("Editing product");
            _context.Products.Find(product.Id).Name = product.Name;
            _context.Products.Find(product.Id).Category = product.Category;
            _context.Products.Find(product.Id).Price = product.Price;
            _context.Products.Find(product.Id).DiscountPrice = product.DiscountPrice;
            _context.Products.Find(product.Id).Image = product.Image;
            _context.SaveChanges();
            return Ok("succes");
        }

        [HttpDelete]
        [Route("/delete/product")]
        public IActionResult DeleteProduct([FromBody] int productId)
        {
            var product = _context.Products.Find(productId);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            _context.Products.Remove(product);
            _context.SaveChanges();

            return Ok("Product deleted successfully");
        }



    }
}
