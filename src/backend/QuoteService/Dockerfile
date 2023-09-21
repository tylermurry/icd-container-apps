FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["backend/QuoteService/QuoteService.csproj", "backend/QuoteService/"]
RUN dotnet restore "backend/QuoteService/QuoteService.csproj"
COPY . .
WORKDIR "/src/backend/QuoteService"
RUN dotnet build "QuoteService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "QuoteService.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "QuoteService.dll"]
