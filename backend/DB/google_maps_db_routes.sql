-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: google_maps_db
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `routes`
--

DROP TABLE IF EXISTS `routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `origin_address` varchar(255) NOT NULL,
  `destination_address` varchar(255) NOT NULL,
  `origin_latitude` double NOT NULL,
  `origin_longitude` double NOT NULL,
  `destination_latitude` double NOT NULL,
  `destination_longitude` double NOT NULL,
  `request_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routes`
--

LOCK TABLES `routes` WRITE;
/*!40000 ALTER TABLE `routes` DISABLE KEYS */;
INSERT INTO `routes` VALUES (1,'Bogotá, Colombia','Medellín, Colombia',4.711,-74.0721,6.2442,-75.5812,'2024-11-22 12:20:51'),(2,'Bogotá, Colombia','Barranquilla, Colombia',4.711,-74.0721,6.2442,-75.5812,'2024-11-22 13:14:05'),(3,'Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia','Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia',11.2365737,-74.19835979999999,11.2365737,-74.19835979999999,'2024-11-22 13:39:21'),(4,'Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia','Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia',11.2365737,-74.19835979999999,11.2365737,-74.19835979999999,'2024-11-22 13:41:48'),(5,'Cra. 17 Bis #80, Pereira, Risaralda, Colombia','Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia',4.805891,-75.6978651,11.2365737,-74.19835979999999,'2024-11-22 13:42:20'),(6,'Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia','Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia',11.2365737,-74.19835979999999,11.2365737,-74.19835979999999,'2024-11-22 13:47:24'),(7,'Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia','Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia',11.2365737,-74.19835979999999,11.2365737,-74.19835979999999,'2024-11-22 13:47:40'),(8,'Cra. 17 Bis, Usaquén, Bogotá, Colombia','Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia',4.763266499999999,-74.0384981,11.2365737,-74.19835979999999,'2024-11-22 13:47:53'),(9,'Cra. 17 Bis, Usaquén, Bogotá, Colombia','Cra. 17 Bis #80, Pereira, Risaralda, Colombia',4.763266499999999,-74.0384981,4.805891,-75.6978651,'2024-11-22 13:48:32'),(10,'Cra. 17 Bis #80, Pereira, Risaralda, Colombia','Cra. 17 Bis #70, Pereira, Risaralda, Colombia',4.805891,-75.6978651,4.805891,-75.6978651,'2024-11-22 14:40:13'),(11,'Cra. 17 Bis #80, Pereira, Risaralda, Colombia','Cra. 17 Bis #70, Pereira, Risaralda, Colombia',4.805891,-75.6978651,4.805891,-75.6978651,'2024-11-22 14:40:44'),(12,'Carretera Mochuelo, Cdad. Bolívar, Bogotá, Colombia','Cra. 17 Bis #70, Pereira, Risaralda, Colombia',4.5347442,-74.1414762,4.805891,-75.6978651,'2024-11-22 14:41:22'),(13,'Carretera Mochuelo, Cdad. Bolívar, Bogotá, Colombia','Carretera Mochuelo, Cdad. Bolívar, Bogotá, Colombia',4.5347442,-74.1414762,4.5347442,-74.1414762,'2024-11-22 14:42:16'),(14,'Carretera Mochuelo, Cdad. Bolívar, Bogotá, Colombia','Ac. 26 #69-76, Engativá, Bogotá, Cundinamarca, Colombia',4.5347442,-74.1414762,4.6824881,-74.1202713,'2024-11-22 14:43:12'),(15,'Carretera Mochuelo, Cdad. Bolívar, Bogotá, Colombia','calle 26 No. 69-76 ofc 603 torre 3 edificio Elemento, Engativá, Bogotá, Cundinamarca, Colombia',4.5347442,-74.1414762,4.6599051,-74.10660589999999,'2024-11-22 14:43:54'),(16,'Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia','Carretera Mochuelo, Cdad. Bolívar, Bogotá, Colombia',11.2365737,-74.19835979999999,4.5347442,-74.1414762,'2024-11-22 15:18:09'),(17,'Ac. 26 #69-76, Engativá, Bogotá, Cundinamarca, Colombia','Ac. 26 #69-76, Engativá, Bogotá, Cundinamarca, Colombia',4.6824881,-74.1202713,4.6824881,-74.1202713,'2024-11-22 15:36:39'),(18,'Cra. 17a, Comuna 4, Santa Marta, Magdalena, Colombia','Ac. 26 #69-76, Engativá, Bogotá, Cundinamarca, Colombia',11.2365737,-74.19835979999999,4.6824881,-74.1202713,'2024-11-22 15:36:57'),(19,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Av. El Dorado #69-76, Bogotá, Colombia',4.5349679,-74.1409323,4.6600509,-74.1061478,'2024-11-22 16:33:13'),(20,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Av. El Dorado #69-76, Bogotá, Colombia',4.5349679,-74.1409323,4.6600509,-74.1061478,'2024-11-22 16:33:50'),(21,'3430 Carregal do Sal, Portugal','Aveiro, Portugal',40.4348006,-7.998007099999999,40.6404264,-8.6539833,'2024-11-22 16:35:11'),(22,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Av. El Dorado, Bogotá, Colombia',4.5349679,-74.1409323,4.652193,-74.1029499,'2024-11-22 16:37:10'),(23,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Av. El Dorado #68c-61 Oficina 911, Bogotá, Colombia',4.5349679,-74.1409323,4.6566836,-74.10609389999999,'2024-11-22 16:52:37'),(24,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Av. El Dorado, Bogotá, Colombia',4.5349679,-74.1409323,4.652193,-74.1029499,'2024-11-22 17:08:18'),(25,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Av. El Dorado, Bogotá, Colombia',4.5349679,-74.1409323,4.652193,-74.1029499,'2024-11-22 17:26:43'),(26,'Cra. 31a #7-67, Bogotá, Colombia','Cra. 17 Bis #80, Pereira, Risaralda, Colombia',4.6095595,-74.098085,4.805891,-75.6978651,'2024-11-22 17:32:20'),(27,'Cra. 17 Bis, Cdad. Bolívar, Bogotá, Colombia','Cra. 31a #7-67, Bogotá, Colombia',4.5349679,-74.1409323,4.6095595,-74.098085,'2024-11-22 17:37:49'),(28,'Av. El Dorado, Bogotá, Colombia','Cra. 7, Bogotá, Colombia',4.652193,-74.1029499,4.6889793,-74.0347706,'2024-11-22 18:45:36'),(29,'Av. El Dorado, Bogotá, Colombia','Cra. 17n, Cdad. Bolívar, Bogotá, Colombia',4.652193,-74.1029499,4.5460866,-74.14190719999999,'2024-11-22 21:48:15'),(30,'Av. El Dorado, Bogotá, Colombia','Kr 13, Bogotá, Colombia',4.652193,-74.1029499,4.637732,-74.06550299999999,'2024-11-23 01:58:33'),(31,'Av. El Dorado, Bogotá, Colombia','Cl. 53b #25-21, Teusaquillo, Bogotá, Colombia',4.652193,-74.1029499,4.6433124,-74.07500759999999,'2024-11-25 17:13:56'),(32,'Cl. 95 #15-33, Bogotá, Colombia','Cra. 4 #9-43, Neiva, Huila, Colombia',4.6810534,-74.0501462,2.928144,-75.2903963,'2024-11-26 03:10:31'),(33,'Av. El Dorado, Bogotá, Colombia','Cl. 95 #15-33, Bogotá, Colombia',4.652193,-74.1029499,4.6810534,-74.0501462,'2024-11-26 04:25:37'),(34,'Usaquén, Bogotá, Colombia','Timiza, Antonio Nariño, Bogotá, Bogota, Colombia',4.7033589,-74.0328734,4.6154603,-74.15391249999999,'2024-11-26 04:29:48'),(35,'Cl. 40, Bogotá, Colombia','Parque El Tunal, Tunjuelito, Bogotá, Colombia',4.6299998,-74.07259309999999,4.5695741,-74.1335422,'2024-11-26 04:30:48'),(36,'Av. El Dorado, Bogotá, Colombia','Cl. 95 #15-33, Bogotá, Colombia',4.652193,-74.1029499,4.6810534,-74.0501462,'2024-11-26 04:40:03'),(37,'Cl. 95 #15-33, Bogotá, Colombia','Cra. 4 #9-43, Neiva, Huila, Colombia',4.6810534,-74.0501462,2.928144,-75.2903963,'2024-11-26 04:42:32'),(38,'Usaquén, Bogotá, Colombia','Timiza, Antonio Nariño, Bogotá, Bogota, Colombia',4.7033589,-74.0328734,4.6154603,-74.15391249999999,'2024-11-26 04:42:50'),(39,'Usaquén, Bogotá, Colombia','Timiza, Antonio Nariño, Bogotá, Bogota, Colombia',4.7033589,-74.0328734,4.6154603,-74.15391249999999,'2024-11-26 04:42:50'),(40,'Cl. 40, Bogotá, Colombia','Parque El Tunal, Tunjuelito, Bogotá, Colombia',4.6299998,-74.07259309999999,4.5695741,-74.1335422,'2024-11-26 04:45:43'),(41,'Ac. 26 #66a-48, Bogotá, Colombia','Parque El Tunal, Tunjuelito, Bogotá, Colombia',4.6519911,-74.10197010000002,4.5695741,-74.1335422,'2024-11-26 04:46:00'),(42,'Usaquén, Bogotá, Colombia','Timiza, Antonio Nariño, Bogotá, Bogota, Colombia',4.7033589,-74.0328734,4.6154603,-74.15391249999999,'2024-11-26 04:46:08');
/*!40000 ALTER TABLE `routes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-26 14:27:25
