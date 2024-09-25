﻿using Microsoft.EntityFrameworkCore;



namespace Frietzaak.Server.Data
{
    public class ApplicationData : DbContext
    {
        public DbSet<Models.Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Initial Catalog=FrietenzaakBackend;Trusted_Connection=True;TrustServerCertificate=True");
        }
    }
}
