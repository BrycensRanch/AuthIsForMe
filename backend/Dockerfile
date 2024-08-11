# Note for contributors: DO NOT USE THE MCR HERE! I HAVE 1Gbps internet and downloading containers from there WAS SO DAMN SLOWWWWWW

FROM bitnami/dotnet-sdk:8 AS build
#USER app
WORKDIR /work
ENV DOTNET_NOLOGO=true
ENV DOTNET_CLI_TELEMETRY_OPTOUT=true

COPY ./Directory.Build.props ./
COPY ./Directory.Packages.props ./
COPY src src
COPY src/*/*.csproj ./
COPY ./me.authisfor.AuthBackend.sln me.authisfor.AuthBackend.ruleset global.json NuGet.config ./
RUN for projectFile in $(ls *.csproj); \
  do \
    mkdir -p ${projectFile%.*}/ && mv $projectFile ${projectFile%.*}/; \
  done

RUN dotnet restore /work/me.authisfor.AuthBackend.Api/me.authisfor.AuthBackend.Api.csproj

RUN dotnet publish -c Release -o /app --no-restore


# --------------
# We can now abuse the Ubuntu chiselled dotnet-aspnet container image for optimal size.
# Smaller than our old backend with Node.js! (I couldn't use rollup or nexe or pkg to save my life, too many issues!!)

FROM ubuntu/dotnet-aspnet AS final
WORKDIR /app
#USER app


#COPY --from=publish --chown=app:app /app/Release/net8.0/publish .
COPY --from=build /app/Release/net8.0/publish .

ENV DOTNET_NOLOGO=true
ENV DOTNET_CLI_TELEMETRY_OPTOUT=true

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=1 \
  CMD curl --fail http://localhost:80/health || exit 1

ENTRYPOINT ["dotnet", "me.authisfor.AuthBackend.Api.dll"]
