using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using gs_travel_app_api.Database;
using gs_travel_app_api.Services;
using gs_travel_app_api.Services.Interfaces;
using Microsoft.AspNetCore.SpaServices.AngularCli;

namespace gs_travel_app_api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSwaggerGen();

            services.AddDbContextPool<MariaDbContext>(
                dbContextOptions => dbContextOptions
                    .UseMySql(
                        Configuration.GetConnectionString("MapContext"),
                        mySqlOptions => mySqlOptions
                            .ServerVersion(new Version(10, 5, 6), ServerType.MariaDb)
                            .CharSetBehavior(CharSetBehavior.NeverAppend))
                    .UseLoggerFactory(
                        LoggerFactory.Create(
                            logging => logging
                                .AddConsole()
                                .AddFilter(level => level >= LogLevel.Information)))
                    .EnableSensitiveDataLogging()
                    .EnableDetailedErrors()
             );

              services.AddControllers();
              services.AddScoped<ILocationService, LocationService>();
              services.AddScoped<IVisitService, VisitService>();

              services.AddSpaStaticFiles(configuration =>
              {
                configuration.RootPath = "webapp/dist";
              });
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            if (!env.IsDevelopment())
            {
              app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
              // To learn more about options for serving an Angular SPA from ASP.NET Core,
              // see https://go.microsoft.com/fwlink/?linkid=864501

              spa.Options.SourcePath = "webapp";

              if (env.IsDevelopment())
              {
                spa.UseAngularCliServer(npmScript: "start");
              }
            });
        }
    }
}
