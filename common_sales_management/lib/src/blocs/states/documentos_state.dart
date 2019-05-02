import 'package:common_sales_management/src/models/factura.dart';
import 'package:equatable/equatable.dart';


abstract class DocumentosSearchState extends Equatable {
  DocumentosSearchState([List props = const []]) : super(props);
}

class SearchStateEmpty extends DocumentosSearchState {
  @override
  String toString() => 'SearchStateEmpty';
}

class SearchStateLoading extends DocumentosSearchState {
  @override
  String toString() => 'SearchStateLoading';
}

class SearchStateSuccess extends DocumentosSearchState {
  final List<Factura> documentos;

  SearchStateSuccess(this.documentos) : super([documentos]);

  @override
  String toString() => 'SearchStateSuccess { items: ${documentos.length} }';
}

class SearchStateError extends DocumentosSearchState {
  final String error;

  SearchStateError(this.error) : super([error]);

  @override
  String toString() => 'SearchStateError';
}