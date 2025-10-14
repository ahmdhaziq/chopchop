/*
  Warnings:

  - You are about to drop the `access_requests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_resources` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."access_requests" DROP CONSTRAINT "access_requests_service_resource_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."service_resources" DROP CONSTRAINT "service_resources_service_id_fkey";

-- DropTable
DROP TABLE "public"."access_requests";

-- DropTable
DROP TABLE "public"."service_resources";

-- DropTable
DROP TABLE "public"."services";
