using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Centrade.Models
{
    [Table("Clients", Schema ="Centrade")]
    public class Client
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Street { get; set; }
        public string ClientCode { get; set; }
        public DateTime RegisterDate { get; set; }
    }
}
