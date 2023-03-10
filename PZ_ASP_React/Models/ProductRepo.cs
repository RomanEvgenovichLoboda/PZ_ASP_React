namespace PZ_ASP_React.Models
{
    public class ProductRepo
    {
        public HostContext context;
        public ProductRepo(HostContext context)
        {
            this.context = context;
        }
        public IEnumerable<Product> Get(string name) => context.Products.Where(x => x.Name.Contains(name));
        public IEnumerable<Product> GetAll() => context.Products;
        public string AddProduct(Product product) 
        {
            context.Products.Add(product);
            context.SaveChanges();
            return "Added";
        }
        public string ApdateProduct(Product product)
        {
            context.Products.Update(product);
            context.SaveChanges();
            return "Apdated";
        }
        public string Remove(int id)
        {
            Product? product = context.Products.Find(id);
            if (product != null)
            {
                context.Products.Remove(product);
                context.SaveChanges();
                return "Delleted";
            }
            else return "Not Delleted";
        }
    }
}
