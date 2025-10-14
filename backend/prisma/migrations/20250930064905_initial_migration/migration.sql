-- CreateTable
CREATE TABLE "public"."user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."services" (
    "id" SERIAL NOT NULL,
    "service_name" VARCHAR(255) NOT NULL,
    "service_identifier" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."service_resources" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "resource_name" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "account_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."access_requests" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "service_resource_id" INTEGER NOT NULL,
    "request_name" TEXT NOT NULL,
    "access_level" TEXT NOT NULL,
    "access_action" TEXT NOT NULL,
    "access_type" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "request_metadata" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "access_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "services_service_name_key" ON "public"."services"("service_name");

-- CreateIndex
CREATE UNIQUE INDEX "services_service_identifier_key" ON "public"."services"("service_identifier");

-- AddForeignKey
ALTER TABLE "public"."service_resources" ADD CONSTRAINT "service_resources_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."access_requests" ADD CONSTRAINT "access_requests_service_resource_id_fkey" FOREIGN KEY ("service_resource_id") REFERENCES "public"."service_resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
