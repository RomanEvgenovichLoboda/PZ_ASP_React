namespace PZ_ASP_React.Models
{
    public class ProductWorck : IDisposable
    {
        public HostContext hostContext;
        public ProductRepo productRepo;
        public ProductWorck()
        {
            hostContext= new HostContext();
        }
        public ProductRepo ProductRepo 
        { 
            get
            {
                if (productRepo == null) productRepo = new ProductRepo(hostContext);
                return productRepo;
            }
        }
        public void Dispose() => GC.SuppressFinalize(this);
    }
}
