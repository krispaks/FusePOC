using System.Collections.Generic;
using Drive.Framework.Security;


namespace FusePOC.Common.Interfaces
{
    public interface IFuseUser
    {	
        string FirstName { get; }
	
		string LastName { get; }
	
		string Name { get; }
	
		string Description { get; }
	
		string FullName { get; }
        string UserRole { get; }
	
		int SecurityGroupId { get; }
		
		string UserGroup { get; }
		
		string GetCurrentUserRole();
		
		Dictionary<string, SecurityPermission> Permissions { get; set; }
		
		bool HasPermission(string permissionName);
		
		int Id { get; }
    }
}
