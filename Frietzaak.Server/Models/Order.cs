﻿using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Frietzaak.Server.Models
{
    public class Order
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime DateTime{ get; set; }

        [Required]
        public DateTime EstimatedCompletionTime { get; set; }

        [Required]
        public bool Completed { get; set; }

        [Required]
        public ICollection<OrderLine>? OrderLines { get; set; }

        [AllowNull]
        public int? CustomerId { get; set; }

        [AllowNull]
        public virtual Customer? Customer { get; set; }

    }
}
