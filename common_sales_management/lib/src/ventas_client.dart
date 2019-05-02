import 'dart:async';

import 'package:http/http.dart' as http;
import 'package:common_sales_management/common_sales_managemnet.dart';

class VentasClient {
  final String baseUrl;
  final http.Client httpClient;

  VentasClient({
    http.Client httpClient,
    this.baseUrl = "https://api.github.com/search/repositories?q=",
  }) : this.httpClient = httpClient ?? http.Client();

  Future<OrderResult> ordersSearch(String term) async {
    //var orderResult = MockOrderResult();

    return Future.value(null);
    // final response = await httpClient.get(Uri.parse("$baseUrl$term"));
    // final results = json.decode(response.body);

    // if (response.statusCode == 200) {
    //   return OrderResult.fromJson(results);
    // } else {
    //   throw OrderResultError.fromJson(results);
    // }
  }

  List<Activity> activitySearch(String term) {
    List<Activity> tasks = [
      new Activity(
          name: "Llamar a La Anonima",
          category: "Recordatorio",
          date: "2019-04-05 05:00:00",
          content: "Nueva venta",
          completed: false),
      new Activity(
          name: "Panaderia Las 2L",
          category: "Visita",
          date: "2019-04-03 10:00:00",
          content: "Pan no leva",
          completed: true),
      new Activity(
          name: "Design explorations",
          category: "Visita",
          date: "2019-04-03 10:00:00",
          content: "#259B24",
          completed: false),
      new Activity(
          name: "Lunch with Mary",
          category: "Visita",
          date: "2019-04-03 10:00:00",
          content: "#2196F3",
          completed: true),
      new Activity(
          name: "Teem Meeting",
          category: "Recordatorio",
          date: "2019-04-03 10:00:00",
          content: "#259B24",
          completed: true),
    ];
    return tasks;
  }
}
