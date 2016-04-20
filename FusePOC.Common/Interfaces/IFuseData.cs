using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FusePOC.Common.Interfaces
{
	public interface IFuseData
	{
		ISegmentationData data { get; set; }
		string metadata { get; set; }
	}
}
