using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using baltomsdn1011.Models;
using System.IO;

namespace baltomsdn1011.Controllers
{
    public class ViewerController : Controller
    {
        public ActionResult Backbone() 
        {
            return View(Patient.GetPatient());
        }
        public ActionResult Canvas() 
        {
            return View(Patient.GetPatient());
        }

        public ActionResult BinaryReader() { return View(Patient.GetPatient()); }

        public ActionResult FileSystem() { return View(Patient.GetPatient()); }

        public ActionResult Image(int id)
        {
            var res = File(Url.Content(String.Format("~/Content/images/{0}.jpg", id)),"image/jpeg");
            return res; 
        }
    }
}
