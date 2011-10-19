using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using baltomsdn1011.Models;

namespace baltomsdn1011.Controllers
{
    public class ViewerController : Controller
    {
        //
        // GET: /Viewer/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Razor() 
        {
            return View(Patient.GetPatient());
        }

        public ActionResult JQTemplates() 
        {
            return View(Patient.GetPatient());
        }

        public ActionResult Canvas() 
        {
            return View(Patient.GetPatient());
        }

        public ActionResult BinaryReader() { return View(Patient.GetPatient()); }

        public ActionResult FileSystem() { return View(Patient.GetPatient()); }

    }
}
