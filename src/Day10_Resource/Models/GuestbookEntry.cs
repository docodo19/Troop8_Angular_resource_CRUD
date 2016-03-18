using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day10_Resource.Models
{
    public class GuestbookEntry
    {
        public int Id { get; set; }

        public string Author { get; set; }

        public string Message { get; set; }

        public DateTime DateCreated { get; set; }
    }
}