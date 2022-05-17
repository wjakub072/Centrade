using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Centrade.Models
{
    [Table("Users", Schema ="Centrade")]
    public class User
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public string Number { get; set; }

        public string Password { get; set; }
    }
}
