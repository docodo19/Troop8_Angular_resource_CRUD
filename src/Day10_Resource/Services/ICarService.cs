using System.Collections.Generic;
using Day10_Resource.Models;

namespace Day10_Resource.Services
{
    public interface ICarService
    {
        Car FindCar(int id);
        IEnumerable<Car> ListCars();
        IEnumerable<CarMake> ListMakes();
    }
}
