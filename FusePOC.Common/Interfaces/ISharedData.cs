using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FusePOC.Common.Interfaces
{
	public interface ISharedData
	{
		string SharedData1 { get; set; }
		int SharedData2 { get; set; }

		DateTime SharedDate1 { get; set; }
	}
}
