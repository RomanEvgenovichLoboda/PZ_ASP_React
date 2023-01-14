using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PZ_ASP_React.Models;

namespace PZ_ASP_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
       // public List<Product> Products = new List<Product>() { new Product() {Id = 1,Name = "Roma" } };
       // public  ProductWorck productWorck;
        ProductRepo productRepo = new ProductRepo(new HostContext());
        //public ProductController()
        //{
        //    productWorck = new ProductWorck();
        //}
        [HttpGet("GetByName")]
        public IEnumerable<Product> Search(string name) => productRepo.Get(name);

        [HttpGet("GetAll")]
        public IEnumerable<Product> Get() //=> productWorck.productRepo.GetAll();
        {
            //HostContext context = new HostContext();
            //return context.Products;
            
            return productRepo.GetAll();
            //return productWorck.productRepo.GetAll();
        }
        // Products; //

        [HttpPost("PostProduct")]
        public string Add([FromBody]Product product) => productRepo.AddProduct(product);

        [HttpPost("UpdateProduct")]
        public string Update([FromBody]Product product) => productRepo.ApdateProduct(product);
        [HttpDelete("DelleteProduct")]
        public string Delete(int id) => productRepo.Remove(id);
    }
}
