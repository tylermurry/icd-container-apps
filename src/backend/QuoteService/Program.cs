using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using QuoteService.DataModel;
using QuoteService.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOptions();
builder.Services.Configure<DataSourceOptions>(builder.Configuration.GetRequiredSection(nameof(DataSourceOptions)));

builder.Services.AddOptions<DataSourceOptions>();
builder.Services.AddDbContext<DataContext>((services, context) =>
{
    var dataSourceOptions = services.GetService<IOptions<DataSourceOptions>>();
    context.UseSqlServer(dataSourceOptions?.Value.DataSourceString);
});
       
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", corsBuilder =>
    {
        corsBuilder
            .WithOrigins("http://localhost:5001")
            .WithOrigins("http://localhost:5173")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });   
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");

if (app.Environment.IsDevelopment())
{
    // Ensure the database and tables are created and migrated
    var dataContext = app.Services.CreateScope().ServiceProvider.GetService<DataContext>();
    
    dataContext?.Database.Migrate();
}

app.MapGet("/random-quote", () => new Quote
{
    Id = 1,
    Text = "People will accept your ideas much more readily if you tell them Benjamin Franklin said it first.",
    Author = "Benjamin Franklin"
});

app.Run();