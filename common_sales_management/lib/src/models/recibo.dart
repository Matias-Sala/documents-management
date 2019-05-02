import 'package:common_sales_management/src/models/models.dart';
import 'package:json_annotation/json_annotation.dart';

part 'recibo.g.dart';

@JsonSerializable(nullable: false)
class Recibo {
  String guid;
  int number;
  num amount;
  int customerId;
  List<Deposito> deposits;
  List<Cheque> checks;
  List<NotaCredito> creditNote;
  List<Adelanto> advance;

  Recibo(this.guid, this.number, this.amount, this.customerId,
  this.deposits, this.checks, this.creditNote, this.advance);

  factory Recibo.fromJson(Map<String, dynamic> json) => _$ReciboFromJson(json);
  Map<String, dynamic> toJson() => _$ReciboToJson(this);
}
