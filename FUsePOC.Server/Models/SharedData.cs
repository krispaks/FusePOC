using FusePOC.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FUsePOC.Server.Models
{
	public class SharedData : ISharedData
	{
		public string SharedData1
		{
			get; set;
		}

		public int SharedData2
		{
			get; set;
		}

		public DateTime SharedDate1
		{
			get; set;
		}
	}
}
