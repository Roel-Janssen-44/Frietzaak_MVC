﻿using System.ComponentModel.DataAnnotations;

namespace Frietzaak.Server.Models
{
    public class OrderLine
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }
        
        [Required]
        public int Amount { get; set; }
        
        [Required]
        public virtual Product? Product { get; set; }
    }
}
