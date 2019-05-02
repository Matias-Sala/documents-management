import 'package:common_sales_management/src/models/models.dart';
import 'package:common_sales_management/common_sales_managemnet.dart';
import 'package:rxdart/rxdart.dart';

class VentasBloc {
  final _salesRepo = VentasRepo();
  final _receipts = BehaviorSubject<List<Recibo>>();

  Observable<List<Recibo>> get receipts => _receipts.stream;

  getReceipts() async {
    List<Recibo> receipts = await _salesRepo.getReceips();
    _receipts.sink.add(receipts);
  }

  dispose() {
    _receipts.close();
  }

  final bloc = VentasBloc();
}