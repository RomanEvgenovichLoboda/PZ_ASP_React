using Microsoft.EntityFrameworkCore;

namespace PZ_ASP_React.Models
{
    public class HostContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            //new ConfigurationBuilder().AddUserSecrets<HostContext>()
            //    .Build()
            //    .Providers
            //    .First()
            //    .TryGet("connStr", out var connStr);
            string connStr = "Data Source=DESKTOP-54SAU6R\\SQLEXPRESS;Initial Catalog=Others;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            //"Data Source=DESKTOP-54SAU6R\\SQLEXPRESS;Initial Catalog=Others;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            builder.UseSqlServer(connStr);
        }
    }
}
