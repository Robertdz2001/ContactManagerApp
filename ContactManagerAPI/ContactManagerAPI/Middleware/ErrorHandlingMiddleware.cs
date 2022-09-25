using ContactManagerAPI.Exceptions;

namespace ContactManagerAPI.Middleware
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        private readonly ILogger<ErrorHandlingMiddleware> _logger;
        public ErrorHandlingMiddleware(ILogger<ErrorHandlingMiddleware> logger)
        {
            _logger = logger;
        }
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next.Invoke(context);
            }
            catch (NotFoundException NotFoundException)
            {
                context.Response.StatusCode = 404;
                await context.Response.WriteAsync(NotFoundException.Message);
            }
            catch (ConflictException ConflictException)
            {
                context.Response.StatusCode = 409;
                await context.Response.WriteAsync(ConflictException.Message);
            }
            catch (Exception e)
            {
                _logger.LogError(e, e.Message);

                context.Response.StatusCode = 500;
                await context.Response.WriteAsync("Something went wrong");
            }
        }
    }
}
