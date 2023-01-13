namespace PZ_ASP_React.Models
{
    public class ProductRepo
    {
        public HostContext context;
        public ProductRepo(HostContext context)
        {
            this.context = context;
        }
        public Product Get(string name) => context.Products.FirstOrDefault(x => x.Name == name);
        public IEnumerable<Product> GetAll() => context.Products;
        public string AddProduct(Product product) 
        {
            context.Products.Add(product);
            context.SaveChanges();
            return "Added";
        }
    }
}
