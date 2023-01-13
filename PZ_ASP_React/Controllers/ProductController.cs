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
        public Product Search(string name) => productRepo.Get(name);

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


        //// GET: ProductController
        //public ActionResult Index()
        //{
        //    return View();
        //}

        //// GET: ProductController/Details/5
        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        //// GET: ProductController/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        //// POST: ProductController/Create
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create(IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: ProductController/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: ProductController/Edit/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: ProductController/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: ProductController/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}
