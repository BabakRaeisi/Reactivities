using Application.Activities.Queries;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
// typically Db is used through Dependency Injection , but we needto access it through service locator pattern
builder.Services.AddDbContext<AppDbContext>(options =>
  {options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));});

builder.Services.AddCors();
builder.Services.AddMediatR(x =>
x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());


var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod()
           .WithOrigins("http://localhost:3000","https://localhost:3000" ));


app.MapControllers();

using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<AppDbContext>();
   await context.Database.MigrateAsync();
   await DbInitializer.SeedData(context);
     
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during database seeding");
}
 

app.Run();
