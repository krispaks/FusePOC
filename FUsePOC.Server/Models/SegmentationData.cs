using FusePOC.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FUsePOC.Server.Models
{
	public class SegmentationData : IFuseData
	{
		public ISegmentationData data
		{
			get; set;
		}

		public string metadata
		{
			get; set;
		}
	}
}
