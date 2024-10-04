using Frietzaak.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;



namespace Frietzaak.Server.Data
{
    public class ApplicationData : DbContext
    {
        public DbSet<Models.Product> Products { get; set; }
        public DbSet<Models.Order> Orders { get; set; }
        public DbSet<Models.OrderLine> OrderLines { get; set; }
        public DbSet<Models.Customer> Customers{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Initial Catalog=FrietenzaakBackend;Trusted_Connection=True;TrustServerCertificate=True");
        }


        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    // Configure cascade delete for Order -> OrderLine relationship
        //    modelBuilder.Entity<Order>()
        //        .HasMany(o => o.OrderLines)
        //        .WithOne(ol => ol.Order)
        //        .HasForeignKey(ol => ol.OrderId)
        //        .OnDelete(DeleteBehavior.Cascade);
        //}
    }
}
