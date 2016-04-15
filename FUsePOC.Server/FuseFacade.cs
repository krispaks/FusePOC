
using Drive.Framework;
using Drive.Framework.Collections.Generic;
using Drive.Framework.Core;
using Drive.Framework.Data;
using Drive.Framework.Logging;
using Drive.Framework.Security;
using Drive.Framework.Transaction;
using FusePOC.Common.Auto;
using FusePOC.Common.Interfaces;
using FusePOC.Common.Shared;
using FusePOC.Common.Spul;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace FusePOC.Server
{
	public class FuseFacade : BaseFacade, IFuseFacade
	{
	
		private SecurityFacade securityFacade = null;

		

		public FuseFacade()
		{
			this.securityFacade = new SecurityFacade();
		}

		public ISegmentationData GetSegmentationData(int id, string type)
		{	
			if(type == "spul") {
				return new SpulSegmentation
				{
					SegmentationSpecificData2 = 1000,
					SegmentationSpecificData1 = "This is SPUL Context",
					SpulSegmentationData1 = "Spul SegmentationData1",
					SpulSegmentationDate1 = DateTime.Now
				};
			}
			else {
				return new AutoSegmentation
				{
					SegmentationSpecificData2 = 6000,
					SegmentationSpecificData1 = "This is Auto Context",
					AutoSegmentationData1 = "Auto SegmentationData1",
					AutoSegmentationData2 = 5000
				};
			}
		}

		public ISharedData GetSharedData() {
			return new SharedData {
				SharedData1 = "Shared Data",
				SharedData2 = 150000,
				SharedDate1 = DateTime.Now.AddDays(10)
			};
		}

		public List<string> GetUserRoutes(string userIdentityName)
		{
			try
			{
				List<string> routes = new List<string>();
				Logger.Log(LogType.Info, "Start GetSecurityUser");
				//SecurityUser user = securityFacade.GetUser(userIdentityName);

				//if (user.Groups.Any(x => x.Name.Split().Any(y => y.Trim() == "FUSE"))) {
				//	if (user.Groups.Any(x => x.Name.Split().Any(y => y.Trim() == "SPUL")))
				//	{
				//		routes.Add("Spul");
				//	}

				//	//if (user.Groups.Any(x => x.Name.Split().Any(y => y.Trim() == "AUTO")))
				//	//{
				//	//	routes.Add("Auto");
				//	//}

				//	routes.Add("Auto");
				//}

				routes.Add("Auto");

				routes.Add("Spul");
				return routes;
			}
			catch (Exception ex)
			{
				Logger.LogException("Exception at GetSecurityUser", ex);
				throw ex;
			}
			finally
			{
				Logger.Log(LogType.Info, "End GetSecurityUser");
			}
			
		}		
	}
}
