namespace me.authisfor.AuthBackend.Core.Repositories
{
    internal abstract class RepositoryBase<TEntity>
        where TEntity : class
    {
        protected EmployeesContext DbContext { get; }

        protected RepositoryBase(EmployeesContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}