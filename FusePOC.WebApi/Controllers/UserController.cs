using FusePOC.Common.Interfaces;
using FusePOC.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FusePOC.WebApi.Controllers
{
    public class UserController : ApiController
    {
		private readonly IFuseFacade facade;
		public UserController()
		{
			this.facade = new FuseFacade();
		}

		[Route("User/Groups")]
		[HttpGet]
		public IHttpActionResult GetSecurityUser()
		{
			List<string> routes = this.facade.GetUserRoutes(User.Identity.Name);

			return Ok(routes);
		}
	}
}
