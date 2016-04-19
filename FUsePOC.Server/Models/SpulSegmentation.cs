using FusePOC.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FUsePOC.Server.Models
{
	public class SpulSegmentation : ISegmentationData
	{
		public int SegmentationSpecificData2 { get; set; }

		public string SegmentationSpecificData1 { get; set; }

		public string SpulSegmentationData1 { get; set; }
		public DateTime SpulSegmentationDate1 { get; set; }
	}
}
