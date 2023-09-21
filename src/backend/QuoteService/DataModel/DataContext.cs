using Microsoft.EntityFrameworkCore;

namespace QuoteService.DataModel;

public class DataContext : DbContext
{
    public DbSet<Quote> Quotes { get; set; }
    
    public DataContext(DbContextOptions options) : base(options) { }
}