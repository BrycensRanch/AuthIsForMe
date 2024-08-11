using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoFixture.Xunit2;
using FluentAssertions;
using me.authisfor.AuthBackend.Api.Controllers;
using me.authisfor.AuthBackend.Core.Dtos;
using me.authisfor.AuthBackend.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace me.authisfor.AuthBackend.Api.UnitTests.Controllers
{
    public class CarsControllerTests : ControllerTestsBase<CarsController>
    {
        private readonly Mock<ICarService> _carServiceMock;

        public CarsControllerTests()
        {
            _carServiceMock = Mocker.GetMock<ICarService>();
        }

        [Fact]
        public async Task GetAll_should_call_GetAllSortedByPlateAsync_onto_service()
        {
            //when
            await Controller.GetAllAsync(default);

            //then
            _carServiceMock.Verify(x => x.GetAllSortedByPlateAsync(It.IsAny<CancellationToken>()), Times.Once);
        }

        [Theory, AutoData]
        public async Task GetAll_should_return_Ok_with_expected_result(IEnumerable<CarDto> cars)
        {
            //given
            _carServiceMock.Setup(x => x.GetAllSortedByPlateAsync(It.IsAny<CancellationToken>()))
                .ReturnsAsync(cars);

            //when
            var result = await Controller.GetAllAsync(default) as OkObjectResult;

            //then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(StatusCodes.Status200OK);
            result.Value.Should().BeAssignableTo<IEnumerable<CarDto>>();
            var value = result.Value as IEnumerable<CarDto>;
            value.Should().HaveCount(cars.Count());
        }
    }
}
