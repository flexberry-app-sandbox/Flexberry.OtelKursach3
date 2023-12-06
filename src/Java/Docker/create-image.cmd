docker build --no-cache -f SQL\Dockerfile.PostgreSql -t otelkursach3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t otelkursach3-java/app ../../..
