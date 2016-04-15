using System.Collections.Generic;
using Drive.Framework.Collections.Generic;
using Drive.Framework.Security;

namespace FusePOC.Common.Interfaces
{
	public interface IFuseFacade
	{
		List<string> GetUserRoutes(string userIdentityName);
		ISegmentationData GetSegmentationData(int id, string type);
		ISharedData GetSharedData();
	}
}
