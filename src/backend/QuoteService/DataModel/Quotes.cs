using System.ComponentModel.DataAnnotations.Schema;

namespace QuoteService.DataModel;

[Table(nameof(Quote))]
public class Quote
{
    public long Id { get; set; }
    public string Text { get; set; } = null!;
    public string Author { get; set; } = null!;
}