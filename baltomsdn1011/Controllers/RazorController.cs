using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using baltomsdn1011.Models;

namespace baltomsdn1011.Controllers
{
    public class RazorController : Controller
    {
        //
        // GET: /Razor/

        public ActionResult Index()
        {
            return RedirectToAction("Details", new { id = 0 });
        }

        public ActionResult Details(int id)
        {
            return View(new Tuple<Patient,int>(Patient.GetPatient(),id));
        }

    }
}
