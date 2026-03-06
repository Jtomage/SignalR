using Chatroom.WebAPI.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add SignalR
builder.Services.AddSignalR(options =>
{
  options.EnableDetailedErrors = true;
});

var app = builder.Build();

// use Default
app.UseDefaultFiles();
app.UseStaticFiles();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Add Hubs
app.MapHub<ChatHub>("/chatHub");

app.Run();
