import 'dart:async';

import 'package:common_sales_management/src/models/models.dart';
import 'package:rxdart/rxdart.dart';
import 'package:bloc/bloc.dart';

import 'package:common_sales_management/common_sales_managemnet.dart';
import 'package:meta/meta.dart';


class DocumentosSearchBloc extends Bloc<DocumentosSearchEvent, DocumentosSearchState> {
  final DocumentosRepo documentosRepo;

  DocumentosSearchBloc({@required this.documentosRepo});

  @override
  Stream<DocumentosSearchState> transform(
    Stream<DocumentosSearchEvent> events,
    Stream<DocumentosSearchState> Function(DocumentosSearchEvent event) next,
  ) {
    return super.transform(
      (events as Observable<DocumentosSearchEvent>).debounce(
        Duration(milliseconds: 500),
      ),
      next,
    );
  }

  @override
  void onTransition(
    Transition<DocumentosSearchEvent, DocumentosSearchState> transition,
  ) {
    print(transition);
  }

  @override
  DocumentosSearchState get initialState => SearchStateEmpty();

  @override
  Stream<DocumentosSearchState> mapEventToState(DocumentosSearchEvent event) async* {
    if (event is TextChanged) {
      final String searchTerm = event.text;
      if (searchTerm.isEmpty) {
        yield SearchStateEmpty();
      } else {
        yield SearchStateLoading();
        try {
          final results = await documentosRepo.searchFacturas(searchTerm);
           print(results);
          yield SearchStateSuccess(results);
        } catch (error) {
          print(error);
          yield error is SearchResultError
              ? SearchStateError(error.message)
              : SearchStateError('something went wrong');
        }
      }
    }
  }
}