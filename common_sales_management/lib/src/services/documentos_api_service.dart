import 'dart:async';
import 'package:common_sales_management/src/models/mocks/mocks.dart';
import 'package:common_sales_management/src/models/models.dart';
import 'package:http/http.dart' show Client;

class DocumentosApiService {
  Client client = Client();

  Future<List<Factura>> searchFacturas(String term) async {
    print("entered");
    final response = await client
        .get("http://api.themoviedb.org/3/movie/popular?api_key=802b2c4b88ea1183e50e6b285a27696e");
    print(response.body.toString());
    if (response.statusCode == 200) {
      // If the call to the server was successful, parse the JSON
       print("OK");
       
      var facturas = mockFactura
        .map((e) => Factura.fromJson(e))
        .toList();

     

      return facturas;

    } else {
      // If that call was not successful, throw an error.
      throw Exception('Error al cargar los recibos');
    }
  }

  
}