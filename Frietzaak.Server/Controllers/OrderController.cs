using Frietzaak.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Frietzaak.Server.Models;

namespace Frietzaak.Server.Controllers
{
    public class OrderController : Controller
    {
        private readonly ApplicationData _context;

        public OrderController(ApplicationData context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("/orders")]
        public IActionResult FetchOrders()
        {
            return Ok(_context.Orders
                .Include(o => o.OrderLines).ThenInclude(ol => ol.Product).ToList());
        }



        [HttpGet]
        [Route("/order/{id}")]
        public IActionResult FetchOrderById(int id)
        {
            var order = _context.Orders
                .Include(o => o.OrderLines)
                .ThenInclude(ol => ol.Product)
                .FirstOrDefault(o => o.Id == id);

            if (order == null)
            {
                return NotFound($"Order with ID {id} not found.");
            }

            return Ok(order);
        }


        [HttpPost]
        [Route("/create/order")]
        public IActionResult CreateOrder([FromBody] Order order)
        {
            foreach (var orderLine in order.OrderLines)
            {
                var existingProduct = _context.Products.Find(orderLine.ProductId);

                if (existingProduct == null)
                {
                    return NotFound($"Product with ID {orderLine.ProductId} not found.");
                }

                orderLine.Product = existingProduct;

                orderLine.Id = 0;

            }
            _context.Orders.Add(order);

            _context.SaveChanges();

            int newOrderId = order.Id;

            Console.WriteLine("New order ID: " + newOrderId);

            return Ok(newOrderId);
        }



        [HttpPut]
        [Route("/update/order/{id}")]
        public IActionResult UpdateOrder(int id, [FromBody] Order updatedOrder)
        {
            Console.WriteLine("Updating order with ID " + id);
            // Find the existing order
            var existingOrder = _context.Orders
                .Include(o => o.OrderLines)
                .ThenInclude(ol => ol.Product)
                .FirstOrDefault(o => o.Id == id);

            if (existingOrder == null)
            {
                return NotFound($"Order with ID {id} not found.");
            }

            // Update the existing order properties
            existingOrder.DateTime = updatedOrder.DateTime;
            existingOrder.EstimatedCompletionTime = updatedOrder.EstimatedCompletionTime;
            existingOrder.Completed = updatedOrder.Completed;

            // Clear existing order lines and update with new ones from the request
            existingOrder.OrderLines.Clear(); // Clear existing lines if you want to replace them
            
            // Validate and add new order lines
            foreach (var orderLine in updatedOrder.OrderLines)
            {
                var existingProduct = _context.Products.Find(orderLine.ProductId);
                Console.WriteLine("orderLine.Id");
                Console.WriteLine(orderLine.Id);
                Console.WriteLine("orderLine.Product.Name");
                Console.WriteLine(orderLine.Product.Name);

                if (existingProduct == null)
                {
                    return NotFound($"Product with ID {orderLine.ProductId} not found.");
                }

                orderLine.Product = existingProduct; // Associate the existing product
                orderLine.Id = 0; // Ensure new order lines get a new ID
                existingOrder.OrderLines.Add(orderLine);
            }

            // Save changes to the database
            _context.SaveChanges();

            return Ok(existingOrder); // Return the updated order
        }


        [HttpPut]
        [Route("/update/orderstatus/{id}")]
        public IActionResult UpdateOrderStatus(int id, [FromBody] string NewOrderStatus)
        {
            Console.WriteLine("Updating order status with ID " + id);

            var order = _context.Orders
                .Include(o => o.OrderLines)
                .ThenInclude(ol => ol.Product)
                .FirstOrDefault(o => o.Id == id);

            if (order == null)
            {
                return NotFound($"Order with ID {id} not found.");
            }

            if (NewOrderStatus == "completed")
            {
                order.Completed = true;
            }
            else if (NewOrderStatus == "open")
            {
                order.Completed = false;
            }
            else
            {
                return NotFound("Invalid status");
            }

            _context.SaveChanges();

            return Ok("Succes");
        }




        [HttpDelete]
        [Route("/delete/order")]
        public IActionResult DeleteOrder([FromBody] int orderId)
        {
            var order = _context.Orders
                    .Include(o => o.OrderLines) 
                    .FirstOrDefault(o => o.Id == orderId);


            if (order == null)
            {
                return NotFound("Order not found");
            }

            order.OrderLines.ToList().ForEach(ol => _context.OrderLines.Remove(ol));


            _context.Orders.Remove(order);
            _context.SaveChanges();

            return Ok("Order deleted successfully");
        }




    }
}
