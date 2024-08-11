using me.authisfor.AuthBackend.Core;
using me.authisfor.AuthBackend.Core.Dtos;
using me.authisfor.AuthBackend.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement.Mvc;

namespace me.authisfor.AuthBackend.Api.Controllers
{
    [Route("api/cars")]
    public class CarsController : ApiControllerBase
    {
        private readonly ICarService _carService;

        public CarsController(ICarService carService)
        {
            _carService = carService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<CarDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllAsync(
            CancellationToken cancellationToken = default)
        {
            var result = await _carService.GetAllSortedByPlateAsync(cancellationToken);
            return Ok(result);
        }

        [FeatureGate(FeatureFlags.Santa)]
        [HttpGet("santa")]
        [ProducesResponseType(typeof(CarDto), StatusCodes.Status200OK)]
        public IActionResult GetSantaCar()
        {
            return Ok(new CarDto
            {
                Id = int.MaxValue,
                Model = "Magic Sleigh",
                Plate = "XMas 12",
            });
        }
        [HttpGet("dummy")]
        public IActionResult GetDummyObject()
        {
            var dummyObject = new
            {
                Id = int.MaxValue,
                Model = "Magic Sleigh",
                Plate = "XMas 12",
            };
            return Ok(dummyObject);
        }
    }
}
