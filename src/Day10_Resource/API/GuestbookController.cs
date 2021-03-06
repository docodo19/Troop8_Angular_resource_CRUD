using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Day10_Resource.Services;
using Day10_Resource.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Day10_Resource.API
{
    [Route("api/[controller]")]
    public class GuestbookController : Controller
    {
        private IGuestbookService _guestbookService;

        public GuestbookController(IGuestbookService guestbookService)
        {
            _guestbookService = guestbookService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<GuestbookEntry> Get()
        {
            return _guestbookService.ListEntries();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]GuestbookEntry entry)
        {
            _guestbookService.SaveEntry(entry);
        }

    }
}
