using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Headers;

namespace FusePOC.WebApi
{
    public static class WebApiConfig
    {
		public static void Register(HttpConfiguration config)
		{
			// Web API configuration and services
			config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
			config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

			// Web API routes
			config.MapHttpAttributeRoutes();

			config.Routes.MapHttpRoute("DefaultApi", "{controller}/{id}", new { id = RouteParameter.Optional }
			);

			config.Routes.MapHttpRoute(
				"UtilGroupData",
				"Utils/{utilGroupType}/{policyId}",
				new { controller = "Utils" }
			);

			config.Routes.MapHttpRoute(
				"UtilGroupSearch",
				"Utils/{utilGroupType}/{policyId}/Search/",
				new { controller = "Utils" }
			);

			config.Routes.MapHttpRoute(
				"GetPolicyDetails",
				"Policy/{id}",
				new { controller = "Policy" }
			);

			config.Routes.MapHttpRoute(
				"GetAllPolicies",
				"Policy/All",
				new { controller = "Policy" }
			);

			config.Routes.MapHttpRoute(
				"GetPolicyNotes",
				"Policy/{id}/Notes",
				new { controller = "Policy" }
			);

			config.Routes.MapHttpRoute(
				"UpdateUtilGroups",
				"Utils/{policyId}/{utilityGroup}",
				new { controller = "Utils", utilityGroup = RouteParameter.Optional }
				);


			config.Routes.MapHttpRoute(
				"SavePolicyNotes",
				"Policy/{id}/Notes/{vm}",
				new { controller = "Policy", vm = RouteParameter.Optional }
			);
		}
	}
}
