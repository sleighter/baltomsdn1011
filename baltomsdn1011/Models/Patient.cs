using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace baltomsdn1011.Models
{
    public class Patient
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Dob { get; set; }
        public int PatientAge { get; set; }
        public List<Study> Studies { get; set; }

        public static Patient GetPatient() {
            return new Patient()
            {
                FirstName = "Pat",
                LastName = "Wan",
                Dob = DateTime.Today.Subtract(TimeSpan.FromDays(365 * 30)),
                Studies = new List<Study>()
                {
                    new Study() { id = 0, Modality = "Angio", StudyDate = DateTime.Now.Subtract(TimeSpan.FromHours(60))},
                    new Study() { id = 1, Modality = "CT", StudyDate = DateTime.Now.Subtract(TimeSpan.FromHours(60))},
                    new Study() { id = 2, Modality = "Echo", StudyDate = DateTime.Now.Subtract(TimeSpan.FromHours(60))},
                    new Study() { id = 3, Modality = "MRI", StudyDate = DateTime.Now.Subtract(TimeSpan.FromHours(60))}
                }
            };
        }
    }
}