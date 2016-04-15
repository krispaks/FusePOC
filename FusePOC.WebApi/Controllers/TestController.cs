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
	public class TestController : ApiController
	{
		private IFuseFacade fuseFacade = null;

		public TestController()
		{
			this.fuseFacade = new FuseFacade();
		}
		
		// GET api/<controller>
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/<controller>/5
		public IHttpActionResult Get(int id, string type)
		{
			ISegmentationData data = fuseFacade.GetSegmentationData(id, type);

			return Ok(data);
		}

		[HttpGet]
		[Route("Test/Shared")]
		public IHttpActionResult GetSharedData()
		{
			ISharedData data = this.fuseFacade.GetSharedData();
			return Ok(data);
		}

		// POST api/<controller>
		public void Post([FromBody]string value)
		{
		}

		// PUT api/<controller>/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/<controller>/5
		public void Delete(int id)
		{
		}
	}
}