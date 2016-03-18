using System.Collections.Generic;
using Day10_Resource.Models;

namespace Day10_Resource.Services
{
    public interface IGuestbookService
    {
        IList<GuestbookEntry> ListEntries();
        void SaveEntry(GuestbookEntry entry);
    }
}
