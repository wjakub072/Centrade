using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Centrade.Models
{
    [Table("Documents", Schema ="Centrade")]
    public class Document
    {
        [Key]
        [Required]
        public int Id { get; set; }
    }
}
